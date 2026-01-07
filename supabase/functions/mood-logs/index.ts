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
      console.error("Auth error:", authError);
      return new Response(
        JSON.stringify({ error: "Invalid token" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const userId = claims.claims.sub;

    if (req.method === "GET") {
      // Fetch mood logs for the user
      const url = new URL(req.url);
      const limit = parseInt(url.searchParams.get("limit") || "50");
      const offset = parseInt(url.searchParams.get("offset") || "0");

      const { data: moodLogs, error } = await supabase
        .from("mood_logs")
        .select("*")
        .eq("user_id", userId)
        .order("timestamp", { ascending: false })
        .range(offset, offset + limit - 1);

      if (error) {
        console.error("Database error:", error);
        return new Response(
          JSON.stringify({ error: "Failed to fetch mood logs" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ moodLogs }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (req.method === "POST") {
      // Create new mood log
      const { mood_type, confidence, source = "manual" } = await req.json();

      if (!mood_type) {
        return new Response(
          JSON.stringify({ error: "mood_type is required" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const { data: newLog, error } = await supabase
        .from("mood_logs")
        .insert({
          user_id: userId,
          mood_type,
          confidence,
          source,
        })
        .select()
        .single();

      if (error) {
        console.error("Insert error:", error);
        return new Response(
          JSON.stringify({ error: "Failed to create mood log" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      console.log(`Created mood log for user ${userId}: ${mood_type}`);

      return new Response(
        JSON.stringify({ moodLog: newLog }),
        { status: 201, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (req.method === "DELETE") {
      const url = new URL(req.url);
      const logId = url.searchParams.get("id");

      if (!logId) {
        return new Response(
          JSON.stringify({ error: "Log ID is required" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const { error } = await supabase
        .from("mood_logs")
        .delete()
        .eq("id", logId)
        .eq("user_id", userId);

      if (error) {
        console.error("Delete error:", error);
        return new Response(
          JSON.stringify({ error: "Failed to delete mood log" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in mood-logs:", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
