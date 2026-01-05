export type Mood = 'happy' | 'sad' | 'stressed' | 'calm' | 'energetic';

export interface MoodData {
  mood: Mood;
  confidence: number;
  timestamp: Date;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: 'meditation' | 'workout' | 'relaxation' | 'focus';
  icon: string;
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  trackCount: number;
  mood: Mood;
}

export interface MoodHistory {
  mood: Mood;
  timestamp: Date;
}

export const moodColors: Record<Mood, string> = {
  happy: 'mood-happy',
  sad: 'mood-sad',
  stressed: 'mood-stressed',
  calm: 'mood-calm',
  energetic: 'mood-energetic',
};

export const moodEmojis: Record<Mood, string> = {
  happy: '😊',
  sad: '😢',
  stressed: '😰',
  calm: '😌',
  energetic: '⚡',
};

export const moodDescriptions: Record<Mood, string> = {
  happy: 'You seem to be in a great mood!',
  sad: 'Feeling a bit down? Let\'s lift your spirits.',
  stressed: 'Take a deep breath. Let\'s help you relax.',
  calm: 'You\'re feeling peaceful and centered.',
  energetic: 'You\'re full of energy! Let\'s channel it.',
};
