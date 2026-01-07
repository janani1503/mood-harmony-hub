import { supabase } from '@/integrations/supabase/client';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

// Mood Logs API
export const moodLogsApi = {
  async getMoodLogs(limit = 50, offset = 0) {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) throw new Error('Not authenticated');

    const response = await fetch(
      `${SUPABASE_URL}/functions/v1/mood-logs?limit=${limit}&offset=${offset}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch mood logs');
    }

    return response.json();
  },

  async createMoodLog(moodType: string, confidence?: number, source = 'manual') {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) throw new Error('Not authenticated');

    const response = await fetch(`${SUPABASE_URL}/functions/v1/mood-logs`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${session.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mood_type: moodType, confidence, source }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create mood log');
    }

    return response.json();
  },

  async deleteMoodLog(id: string) {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) throw new Error('Not authenticated');

    const response = await fetch(`${SUPABASE_URL}/functions/v1/mood-logs?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${session.access_token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to delete mood log');
    }

    return response.json();
  },
};

// AI Recommendations API
export const recommendationsApi = {
  async getAIRecommendations(mood: string, language?: string, type = 'both') {
    const response = await fetch(`${SUPABASE_URL}/functions/v1/ai-recommendations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ mood, language, type }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to get recommendations');
    }

    return response.json();
  },

  async getSavedRecommendations(moodType?: string, type?: string, likedOnly = false) {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) throw new Error('Not authenticated');

    const params = new URLSearchParams();
    if (moodType) params.append('mood_type', moodType);
    if (type) params.append('type', type);
    if (likedOnly) params.append('liked', 'true');

    const response = await fetch(
      `${SUPABASE_URL}/functions/v1/save-recommendation?${params}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch recommendations');
    }

    return response.json();
  },

  async saveRecommendation(recommendation: {
    mood_type: string;
    type: 'music' | 'activity';
    title: string;
    description?: string;
    link?: string;
    youtube_id?: string;
    image_url?: string;
    is_liked?: boolean;
  }) {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) throw new Error('Not authenticated');

    const response = await fetch(`${SUPABASE_URL}/functions/v1/save-recommendation`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${session.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recommendation),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to save recommendation');
    }

    return response.json();
  },

  async toggleLike(id: string, isLiked: boolean) {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) throw new Error('Not authenticated');

    const response = await fetch(`${SUPABASE_URL}/functions/v1/save-recommendation`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${session.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, is_liked: isLiked }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to update recommendation');
    }

    return response.json();
  },
};

// Voice to Text API
export const voiceApi = {
  async transcribe(audioBase64: string) {
    const response = await fetch(`${SUPABASE_URL}/functions/v1/voice-to-text`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ audio: audioBase64 }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to transcribe audio');
    }

    return response.json();
  },
};
