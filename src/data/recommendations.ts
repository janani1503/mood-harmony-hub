import { Mood, Activity, Playlist } from '@/types/mood';

export const moodPlaylists: Record<Mood, Playlist[]> = {
  happy: [
    {
      id: 'h1',
      title: 'Feel Good Vibes',
      description: 'Upbeat tracks to keep the good mood going',
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300',
      trackCount: 50,
      mood: 'happy',
      youtubeId: 'ZbZSe6N_BXs', // Pharrell - Happy
    },
    {
      id: 'h2',
      title: 'Summer Hits',
      description: 'Sunny melodies for sunny days',
      imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300',
      trackCount: 35,
      mood: 'happy',
      youtubeId: 'ru0K8uYEZWw', // Can't Stop The Feeling
    },
    {
      id: 'h3',
      title: 'Dance Party',
      description: 'Get up and groove!',
      imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300',
      trackCount: 42,
      mood: 'happy',
      youtubeId: 'OPf0YbXqDm0', // Uptown Funk
    },
  ],
  sad: [
    {
      id: 's1',
      title: 'Mood Lifter',
      description: 'Songs to gently lift your spirits',
      imageUrl: 'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300',
      trackCount: 40,
      mood: 'sad',
      youtubeId: 'nfWlot6h_JM', // Tyler the Creator - See You Again
    },
    {
      id: 's2',
      title: 'Comforting Acoustics',
      description: 'Warm acoustic melodies for solace',
      imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300',
      trackCount: 30,
      mood: 'sad',
      youtubeId: 'k4V3Mo61fJM', // Let Her Go
    },
    {
      id: 's3',
      title: 'Hopeful Hearts',
      description: 'Inspirational tracks for brighter days',
      imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300',
      trackCount: 28,
      mood: 'sad',
      youtubeId: 'pUeY6sTl5eE', // Here Comes The Sun
    },
  ],
  stressed: [
    {
      id: 'st1',
      title: 'Stress Relief',
      description: 'Calming sounds to ease your mind',
      imageUrl: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=300',
      trackCount: 45,
      mood: 'stressed',
      youtubeId: 'lFcSrYw-ARY', // Relaxing Music
    },
    {
      id: 'st2',
      title: 'Nature Sounds',
      description: 'Peaceful nature ambience',
      imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300',
      trackCount: 25,
      mood: 'stressed',
      youtubeId: 'eKFTSSKCzWA', // Rain Sounds
    },
    {
      id: 'st3',
      title: 'Spa & Wellness',
      description: 'Tranquil melodies for relaxation',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300',
      trackCount: 38,
      mood: 'stressed',
      youtubeId: 'hlWiI4xVXKY', // Spa Music
    },
  ],
  calm: [
    {
      id: 'c1',
      title: 'Zen Garden',
      description: 'Meditative tracks for inner peace',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      trackCount: 55,
      mood: 'calm',
      youtubeId: '1ZYbU82GVz4', // Meditation Music
    },
    {
      id: 'c2',
      title: 'Ambient Dreams',
      description: 'Ethereal soundscapes for tranquility',
      imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300',
      trackCount: 32,
      mood: 'calm',
      youtubeId: 'lE6RYpe9IT0', // Study Music
    },
    {
      id: 'c3',
      title: 'Piano Serenity',
      description: 'Gentle piano pieces for relaxation',
      imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300',
      trackCount: 40,
      mood: 'calm',
      youtubeId: '4N3N1MlvVc4', // Piano Relaxing Music
    },
  ],
  energetic: [
    {
      id: 'e1',
      title: 'Power Workout',
      description: 'High-energy beats to fuel your workout',
      imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300',
      trackCount: 60,
      mood: 'energetic',
      youtubeId: 'gCYcHz2k5x0', // Eminem - Lose Yourself
    },
    {
      id: 'e2',
      title: 'Morning Boost',
      description: 'Energizing tracks to start your day',
      imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300',
      trackCount: 35,
      mood: 'energetic',
      youtubeId: 'fJ9rUzIMcZQ', // Bohemian Rhapsody
    },
    {
      id: 'e3',
      title: 'Running Mix',
      description: 'Keep your pace with these tracks',
      imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=300',
      trackCount: 45,
      mood: 'energetic',
      youtubeId: 'btPJPFnesV4', // Eye of the Tiger
    },
  ],
};

export const moodActivities: Record<Mood, Activity[]> = {
  happy: [
    {
      id: 'ha1',
      title: 'Dance Session',
      description: 'Let loose and dance to your favorite tunes',
      duration: '20 min',
      category: 'workout',
      icon: '💃',
    },
    {
      id: 'ha2',
      title: 'Creative Journaling',
      description: 'Capture your positive moments in writing',
      duration: '15 min',
      category: 'focus',
      icon: '📝',
    },
    {
      id: 'ha3',
      title: 'Gratitude Meditation',
      description: 'Reflect on the things that make you happy',
      duration: '10 min',
      category: 'meditation',
      icon: '🙏',
    },
  ],
  sad: [
    {
      id: 'sa1',
      title: 'Gentle Yoga',
      description: 'Slow, nurturing movements to comfort your body',
      duration: '25 min',
      category: 'relaxation',
      icon: '🧘',
    },
    {
      id: 'sa2',
      title: 'Breathing Exercise',
      description: 'Deep breathing to release emotional tension',
      duration: '10 min',
      category: 'meditation',
      icon: '🌬️',
    },
    {
      id: 'sa3',
      title: 'Nature Walk',
      description: 'Get outside for some fresh air and sunshine',
      duration: '30 min',
      category: 'relaxation',
      icon: '🌳',
    },
  ],
  stressed: [
    {
      id: 'str1',
      title: 'Body Scan Meditation',
      description: 'Release tension from head to toe',
      duration: '15 min',
      category: 'meditation',
      icon: '🧠',
    },
    {
      id: 'str2',
      title: 'Progressive Relaxation',
      description: 'Systematically relax your muscles',
      duration: '20 min',
      category: 'relaxation',
      icon: '😌',
    },
    {
      id: 'str3',
      title: 'Quick HIIT',
      description: 'Release stress through intense movement',
      duration: '15 min',
      category: 'workout',
      icon: '🏃',
    },
  ],
  calm: [
    {
      id: 'ca1',
      title: 'Mindfulness Meditation',
      description: 'Deepen your sense of peace and presence',
      duration: '20 min',
      category: 'meditation',
      icon: '🕯️',
    },
    {
      id: 'ca2',
      title: 'Reading Session',
      description: 'Enjoy a good book in quiet comfort',
      duration: '30 min',
      category: 'focus',
      icon: '📚',
    },
    {
      id: 'ca3',
      title: 'Stretching Routine',
      description: 'Maintain your relaxed state with gentle stretches',
      duration: '15 min',
      category: 'relaxation',
      icon: '🤸',
    },
  ],
  energetic: [
    {
      id: 'en1',
      title: 'HIIT Workout',
      description: 'Channel your energy into intense intervals',
      duration: '30 min',
      category: 'workout',
      icon: '💪',
    },
    {
      id: 'en2',
      title: 'Power Yoga',
      description: 'Dynamic flow to match your energy',
      duration: '25 min',
      category: 'workout',
      icon: '🔥',
    },
    {
      id: 'en3',
      title: 'Focused Work Sprint',
      description: 'Use your energy for productive deep work',
      duration: '45 min',
      category: 'focus',
      icon: '🎯',
    },
  ],
};
