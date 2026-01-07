import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey, {
      global: { headers: { Authorization: authHeader } }
    });

    const token = authHeader.replace("Bearer ", "");
    const { data: claims, error: authError } = await supabase.auth.getClaims(token);
    
    if (authError || !claims?.claims) {
      return new Response(
        JSON.stringify({ error: "Invalid token" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const userId = claims.claims.sub;

    if (req.method === "GET") {
      const url = new URL(req.url);
      const moodType = url.searchParams.get("mood_type");
      const type = url.searchParams.get("type");
      const likedOnly = url.searchParams.get("liked") === "true";

      let query = supabase
        .from("recommendations")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (moodType) query = query.eq("mood_type", moodType);
      if (type) query = query.eq("type", type);
      if (likedOnly) query = query.eq("is_liked", true);

      const { data: recommendations, error } = await query;

      if (error) {
        console.error("Fetch error:", error);
        return new Response(
          JSON.stringify({ error: "Failed to fetch recommendations" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ recommendations }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (req.method === "POST") {
      const { mood_type, type, title, description, link, youtube_id, image_url, is_liked } = await req.json();

      if (!mood_type || !title || !type) {
        return new Response(
          JSON.stringify({ error: "mood_type, type, and title are required" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const { data: newRec, error } = await supabase
        .from("recommendations")
        .insert({
          user_id: userId,
          mood_type,
          type,
          title,
          description,
          link,
          youtube_id,
          image_url,
          is_liked: is_liked || false,
        })
        .select()
        .single();

      if (error) {
        console.error("Insert error:", error);
        return new Response(
          JSON.stringify({ error: "Failed to save recommendation" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      console.log(`Saved recommendation for user ${userId}: ${title}`);

      return new Response(
        JSON.stringify({ recommendation: newRec }),
        { status: 201, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (req.method === "PATCH") {
      const { id, is_liked } = await req.json();

      if (!id) {
        return new Response(
          JSON.stringify({ error: "Recommendation ID is required" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const { data: updated, error } = await supabase
        .from("recommendations")
        .update({ is_liked })
        .eq("id", id)
        .eq("user_id", userId)
        .select()
        .single();

      if (error) {
        console.error("Update error:", error);
        return new Response(
          JSON.stringify({ error: "Failed to update recommendation" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ recommendation: updated }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in save-recommendation:", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
