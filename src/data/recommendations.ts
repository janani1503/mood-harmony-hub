import { Mood, Activity, Playlist, Language } from '@/types/mood';

export const moodPlaylists: Record<Mood, Playlist[]> = {
  happy: [
    // English
    { id: 'h1', title: 'Feel Good Vibes', description: 'Upbeat tracks to keep the good mood going', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 50, mood: 'happy', youtubeId: 'ZbZSe6N_BXs', language: 'english' },
    { id: 'h2', title: 'Summer Hits', description: 'Sunny melodies for sunny days', imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300', trackCount: 35, mood: 'happy', youtubeId: 'ru0K8uYEZWw', language: 'english' },
    { id: 'h3', title: 'Dance Party', description: 'Get up and groove!', imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300', trackCount: 42, mood: 'happy', youtubeId: 'OPf0YbXqDm0', language: 'english' },
    // Tamil
    { id: 'h4', title: 'Kuthu Beats', description: 'High energy Tamil dance hits', imageUrl: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=300', trackCount: 40, mood: 'happy', youtubeId: 'tIGXaZNwYyM', language: 'tamil' },
    { id: 'h5', title: 'Anirudh Hits', description: 'Best of Anirudh party songs', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 38, mood: 'happy', youtubeId: 'vlWRfC3DUzo', language: 'tamil' },
    { id: 'h6', title: 'Vaathi Coming', description: 'Master - Vijay hit song', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300', trackCount: 1, mood: 'happy', youtubeId: 'lkMpmQ3fZuE', language: 'tamil' },
    // Hindi
    { id: 'h7', title: 'Bollywood Party', description: 'Dance hits from Bollywood', imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300', trackCount: 45, mood: 'happy', youtubeId: 'l_MyUGq7pgs', language: 'hindi' },
  ],
  sad: [
    // English
    { id: 's1', title: 'Mood Lifter', description: 'Songs to gently lift your spirits', imageUrl: 'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300', trackCount: 40, mood: 'sad', youtubeId: 'nfWlot6h_JM', language: 'english' },
    { id: 's2', title: 'Comforting Acoustics', description: 'Warm acoustic melodies for solace', imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300', trackCount: 30, mood: 'sad', youtubeId: 'k4V3Mo61fJM', language: 'english' },
    { id: 's3', title: 'Hopeful Hearts', description: 'Inspirational tracks for brighter days', imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300', trackCount: 28, mood: 'sad', youtubeId: 'pUeY6sTl5eE', language: 'english' },
    // Tamil
    { id: 's4', title: 'Kadhal Sad Songs', description: 'Emotional Tamil melodies', imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300', trackCount: 35, mood: 'sad', youtubeId: 'zMQVEz3bG1A', language: 'tamil' },
    { id: 's5', title: 'Kannazhaga', description: '3 Movie - Soulful melody', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 1, mood: 'sad', youtubeId: 'cnrXBoQ9pPk', language: 'tamil' },
    // Hindi
    { id: 's6', title: 'Arijit Singh Sad', description: 'Heartbreak songs by Arijit', imageUrl: 'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300', trackCount: 40, mood: 'sad', youtubeId: 'JF8BRvqGCNs', language: 'hindi' },
  ],
  stressed: [
    { id: 'st1', title: 'Stress Relief', description: 'Calming sounds to ease your mind', imageUrl: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=300', trackCount: 45, mood: 'stressed', youtubeId: 'lFcSrYw-ARY', language: 'english' },
    { id: 'st2', title: 'Nature Sounds', description: 'Peaceful nature ambience', imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300', trackCount: 25, mood: 'stressed', youtubeId: 'eKFTSSKCzWA', language: 'english' },
    { id: 'st3', title: 'Spa & Wellness', description: 'Tranquil melodies for relaxation', imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300', trackCount: 38, mood: 'stressed', youtubeId: 'hlWiI4xVXKY', language: 'english' },
    { id: 'st4', title: 'Tamil Devotional', description: 'Peaceful devotional songs', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300', trackCount: 30, mood: 'stressed', youtubeId: '2x0wYgPNhrc', language: 'tamil' },
    { id: 'st5', title: 'Sufi Music', description: 'Calming Sufi melodies', imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300', trackCount: 25, mood: 'stressed', youtubeId: '9lGLcXSZlQU', language: 'hindi' },
  ],
  calm: [
    { id: 'c1', title: 'Zen Garden', description: 'Meditative tracks for inner peace', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300', trackCount: 55, mood: 'calm', youtubeId: '1ZYbU82GVz4', language: 'english' },
    { id: 'c2', title: 'Ambient Dreams', description: 'Ethereal soundscapes for tranquility', imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300', trackCount: 32, mood: 'calm', youtubeId: 'lE6RYpe9IT0', language: 'english' },
    { id: 'c3', title: 'Piano Serenity', description: 'Gentle piano pieces for relaxation', imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300', trackCount: 40, mood: 'calm', youtubeId: '4N3N1MlvVc4', language: 'english' },
    { id: 'c4', title: 'Ilaiyaraaja Melodies', description: 'Timeless soft Tamil classics', imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300', trackCount: 50, mood: 'calm', youtubeId: 'bMvYLijDPKo', language: 'tamil' },
    { id: 'c5', title: 'AR Rahman Calm', description: 'Soothing Rahman melodies', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 35, mood: 'calm', youtubeId: 'y1WiLcaJHW4', language: 'tamil' },
  ],
  energetic: [
    { id: 'e1', title: 'Power Workout', description: 'High-energy beats to fuel your workout', imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300', trackCount: 60, mood: 'energetic', youtubeId: 'gCYcHz2k5x0', language: 'english' },
    { id: 'e2', title: 'Morning Boost', description: 'Energizing tracks to start your day', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300', trackCount: 35, mood: 'energetic', youtubeId: 'fJ9rUzIMcZQ', language: 'english' },
    { id: 'e3', title: 'Running Mix', description: 'Keep your pace with these tracks', imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=300', trackCount: 45, mood: 'energetic', youtubeId: 'btPJPFnesV4', language: 'english' },
    { id: 'e4', title: 'Aalaporaan Tamizhan', description: 'Mersal - Vijay anthem', imageUrl: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=300', trackCount: 1, mood: 'energetic', youtubeId: 'mIYlbD2Zcz4', language: 'tamil' },
    { id: 'e5', title: 'Verithanam', description: 'Bigil - AR Rahman hit', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 1, mood: 'energetic', youtubeId: 'dKJfJMMsqX4', language: 'tamil' },
    { id: 'e6', title: 'Bollywood Workout', description: 'High energy Bollywood hits', imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300', trackCount: 40, mood: 'energetic', youtubeId: 'VuNIsY6JdUw', language: 'hindi' },
  ],
  anxious: [
    { id: 'a1', title: 'Anxiety Relief', description: 'Calming sounds for peace of mind', imageUrl: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=300', trackCount: 40, mood: 'anxious', youtubeId: '2OEL4P1Rz04', language: 'english' },
    { id: 'a2', title: 'Deep Breathing Music', description: 'Music for guided breathing', imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300', trackCount: 25, mood: 'anxious', youtubeId: 'cLvtRHZHQMg', language: 'english' },
    { id: 'a3', title: 'Tamil Meditation', description: 'Peaceful Tamil instrumentals', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300', trackCount: 30, mood: 'anxious', youtubeId: '1L_sWgdXwgo', language: 'tamil' },
  ],
  excited: [
    { id: 'ex1', title: 'Party Anthems', description: 'Let\'s celebrate!', imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300', trackCount: 55, mood: 'excited', youtubeId: 'kJQP7kiw5Fk', language: 'english' },
    { id: 'ex2', title: 'EDM Bangers', description: 'Electronic dance music hits', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300', trackCount: 45, mood: 'excited', youtubeId: 'IcrbM1l_BoI', language: 'english' },
    { id: 'ex3', title: 'Rowdy Baby', description: 'Maari 2 - Dhanush & Sai Pallavi', imageUrl: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=300', trackCount: 1, mood: 'excited', youtubeId: 'x6Q7c9RyMzk', language: 'tamil' },
    { id: 'ex4', title: 'Arabic Kuthu', description: 'Beast - Thalapathy Vijay', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 1, mood: 'excited', youtubeId: 'IlQFBg55xyo', language: 'tamil' },
  ],
  tired: [
    { id: 't1', title: 'Sleep Sounds', description: 'Drift off to dreamland', imageUrl: 'https://images.unsplash.com/photo-1455642305367-68834a1da7ab?w=300', trackCount: 30, mood: 'tired', youtubeId: 'aXItOY0sLRY', language: 'english' },
    { id: 't2', title: 'Lo-Fi Beats', description: 'Chill beats to relax', imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300', trackCount: 100, mood: 'tired', youtubeId: 'jfKfPfyJRdk', language: 'english' },
    { id: 't3', title: 'Ennodu Nee Irundhaal', description: 'I - Soft melody', imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300', trackCount: 1, mood: 'tired', youtubeId: 'Wmn4MoWm2Xc', language: 'tamil' },
    { id: 't4', title: 'Night Time Hindi', description: 'Slow Hindi melodies', imageUrl: 'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300', trackCount: 35, mood: 'tired', youtubeId: '07eIWkBg1A0', language: 'hindi' },
  ],
  focused: [
    { id: 'f1', title: 'Deep Focus', description: 'Concentration music for work', imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=300', trackCount: 50, mood: 'focused', youtubeId: 'xyHxhEqkxo4', language: 'english' },
    { id: 'f2', title: 'Study With Me', description: 'Background music for studying', imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300', trackCount: 40, mood: 'focused', youtubeId: 'TURbeWK2wwg', language: 'english' },
    { id: 'f3', title: 'Instrumental Tamil', description: 'Focus with Tamil instrumentals', imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300', trackCount: 30, mood: 'focused', youtubeId: '3ZCDJkFozyg', language: 'tamil' },
  ],
  romantic: [
    { id: 'r1', title: 'Love Songs', description: 'Romantic melodies for two', imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300', trackCount: 45, mood: 'romantic', youtubeId: '450p7goxZqg', language: 'english' },
    { id: 'r2', title: 'Date Night', description: 'Perfect for a romantic evening', imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300', trackCount: 35, mood: 'romantic', youtubeId: '3JWTaaS7LdU', language: 'english' },
    { id: 'r3', title: 'Moonu Love Songs', description: '3 Movie - Romantic hits', imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300', trackCount: 10, mood: 'romantic', youtubeId: 'RtFcZ_Rj4C0', language: 'tamil' },
    { id: 'r4', title: 'Oru Kili Oru Kili', description: 'Classic Tamil romance', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 1, mood: 'romantic', youtubeId: 'KDkSkUqXeM4', language: 'tamil' },
    { id: 'r5', title: 'Bollywood Romance', description: 'Hindi love songs', imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300', trackCount: 50, mood: 'romantic', youtubeId: 'ZrC7_zcPjvY', language: 'hindi' },
  ],
};

export const moodActivities: Record<Mood, Activity[]> = {
  happy: [
    { id: 'ha1', title: 'Dance Session', description: 'Let loose and dance to your favorite tunes', duration: '20 min', category: 'workout', icon: '💃', youtubeId: 'FJpSZlSz8Gs' },
    { id: 'ha2', title: 'Creative Journaling', description: 'Capture your positive moments in writing', duration: '15 min', category: 'creative', icon: '📝' },
    { id: 'ha3', title: 'Gratitude Meditation', description: 'Reflect on the things that make you happy', duration: '10 min', category: 'meditation', icon: '🙏', youtubeId: 'ZToicYcHIOU' },
    { id: 'ha4', title: 'Call a Friend', description: 'Share your happiness with someone you love', duration: '30 min', category: 'social', icon: '📞' },
    { id: 'ha5', title: 'Photo Walk', description: 'Capture beautiful moments around you', duration: '45 min', category: 'creative', icon: '📸' },
  ],
  sad: [
    { id: 'sa1', title: 'Gentle Yoga', description: 'Slow, nurturing movements to comfort your body', duration: '25 min', category: 'relaxation', icon: '🧘', youtubeId: 'v7AYKMP6rOE' },
    { id: 'sa2', title: 'Breathing Exercise', description: 'Deep breathing to release emotional tension', duration: '10 min', category: 'meditation', icon: '🌬️', youtubeId: 'tybOi4hjZFQ' },
    { id: 'sa3', title: 'Nature Walk', description: 'Get outside for some fresh air and sunshine', duration: '30 min', category: 'relaxation', icon: '🌳' },
    { id: 'sa4', title: 'Watch Comedy', description: 'Laughter is the best medicine', duration: '30 min', category: 'relaxation', icon: '😂' },
    { id: 'sa5', title: 'Comfort Cooking', description: 'Make your favorite comfort food', duration: '45 min', category: 'creative', icon: '🍲' },
  ],
  stressed: [
    { id: 'str1', title: 'Body Scan Meditation', description: 'Release tension from head to toe', duration: '15 min', category: 'meditation', icon: '🧠', youtubeId: 'z6X5oEIg6Ak' },
    { id: 'str2', title: 'Progressive Relaxation', description: 'Systematically relax your muscles', duration: '20 min', category: 'relaxation', icon: '😌', youtubeId: '86HUcX8ZtAk' },
    { id: 'str3', title: 'Quick HIIT', description: 'Release stress through intense movement', duration: '15 min', category: 'workout', icon: '🏃', youtubeId: 'ml6cT4AZdqI' },
    { id: 'str4', title: 'Aromatherapy Bath', description: 'Relax with essential oils and warm water', duration: '30 min', category: 'relaxation', icon: '🛁' },
    { id: 'str5', title: 'Coloring Therapy', description: 'Mindful coloring for stress relief', duration: '20 min', category: 'creative', icon: '🎨' },
  ],
  calm: [
    { id: 'ca1', title: 'Mindfulness Meditation', description: 'Deepen your sense of peace and presence', duration: '20 min', category: 'meditation', icon: '🕯️', youtubeId: 'inpok4MKVLM' },
    { id: 'ca2', title: 'Reading Session', description: 'Enjoy a good book in quiet comfort', duration: '30 min', category: 'focus', icon: '📚' },
    { id: 'ca3', title: 'Stretching Routine', description: 'Maintain your relaxed state with gentle stretches', duration: '15 min', category: 'relaxation', icon: '🤸', youtubeId: 'sTANio_2E0Q' },
    { id: 'ca4', title: 'Tea Ceremony', description: 'Mindful tea preparation and drinking', duration: '20 min', category: 'relaxation', icon: '🍵' },
    { id: 'ca5', title: 'Garden Time', description: 'Connect with nature through gardening', duration: '45 min', category: 'relaxation', icon: '🌱' },
  ],
  energetic: [
    { id: 'en1', title: 'HIIT Workout', description: 'Channel your energy into intense intervals', duration: '30 min', category: 'workout', icon: '💪', youtubeId: 'ml6cT4AZdqI' },
    { id: 'en2', title: 'Power Yoga', description: 'Dynamic flow to match your energy', duration: '25 min', category: 'workout', icon: '🔥', youtubeId: 'yL0I0f8gNfM' },
    { id: 'en3', title: 'Focused Work Sprint', description: 'Use your energy for productive deep work', duration: '45 min', category: 'focus', icon: '🎯' },
    { id: 'en4', title: 'Clean & Organize', description: 'Channel energy into tidying your space', duration: '30 min', category: 'focus', icon: '🧹' },
    { id: 'en5', title: 'Learn Something New', description: 'Take an online class or tutorial', duration: '60 min', category: 'focus', icon: '💡' },
  ],
  anxious: [
    { id: 'ax1', title: '4-7-8 Breathing', description: 'Calming breath technique for anxiety', duration: '5 min', category: 'meditation', icon: '🌬️', youtubeId: 'YRPh_GaiL8s' },
    { id: 'ax2', title: 'Grounding Exercise', description: '5-4-3-2-1 sensory grounding', duration: '10 min', category: 'meditation', icon: '🌍' },
    { id: 'ax3', title: 'Anxiety Relief Yoga', description: 'Calming yoga for anxious minds', duration: '20 min', category: 'relaxation', icon: '🧘', youtubeId: 'bJJWArRfKa0' },
    { id: 'ax4', title: 'Journaling', description: 'Write down your worries', duration: '15 min', category: 'creative', icon: '📓' },
    { id: 'ax5', title: 'Talk to Someone', description: 'Share your feelings with a trusted person', duration: '30 min', category: 'social', icon: '💬' },
  ],
  excited: [
    { id: 'exc1', title: 'Dance Workout', description: 'Dance your excitement out!', duration: '30 min', category: 'workout', icon: '🎉', youtubeId: 'FJpSZlSz8Gs' },
    { id: 'exc2', title: 'Plan Your Goals', description: 'Channel excitement into planning', duration: '20 min', category: 'focus', icon: '📋' },
    { id: 'exc3', title: 'Creative Project', description: 'Start something you\'ve been meaning to do', duration: '60 min', category: 'creative', icon: '🎨' },
    { id: 'exc4', title: 'Share the News', description: 'Tell someone about your excitement', duration: '15 min', category: 'social', icon: '📣' },
  ],
  tired: [
    { id: 'ti1', title: 'Power Nap', description: 'A quick 20-minute rest', duration: '20 min', category: 'relaxation', icon: '😴' },
    { id: 'ti2', title: 'Restorative Yoga', description: 'Gentle poses to restore energy', duration: '20 min', category: 'relaxation', icon: '🧘', youtubeId: 'SoN8LqVfmuw' },
    { id: 'ti3', title: 'Light Stretching', description: 'Wake up your body gently', duration: '10 min', category: 'relaxation', icon: '🤸', youtubeId: 'sTANio_2E0Q' },
    { id: 'ti4', title: 'Hydration Break', description: 'Drink water and have a healthy snack', duration: '10 min', category: 'relaxation', icon: '💧' },
    { id: 'ti5', title: 'Short Walk', description: 'A brief walk to get blood flowing', duration: '15 min', category: 'relaxation', icon: '🚶' },
  ],
  focused: [
    { id: 'fo1', title: 'Pomodoro Session', description: '25 min focus, 5 min break', duration: '30 min', category: 'focus', icon: '🍅' },
    { id: 'fo2', title: 'Deep Work Block', description: 'Uninterrupted focus time', duration: '90 min', category: 'focus', icon: '💻' },
    { id: 'fo3', title: 'Brain Training', description: 'Puzzles and mental exercises', duration: '15 min', category: 'focus', icon: '🧩' },
    { id: 'fo4', title: 'Mindful Focus Meditation', description: 'Sharpen concentration', duration: '10 min', category: 'meditation', icon: '🎯', youtubeId: 'ZEYuSRHgmCg' },
  ],
  romantic: [
    { id: 'ro1', title: 'Couple\'s Yoga', description: 'Yoga poses for two', duration: '30 min', category: 'relaxation', icon: '💑', youtubeId: 'ZB1LFvfRJzs' },
    { id: 'ro2', title: 'Cook Together', description: 'Prepare a romantic dinner', duration: '60 min', category: 'creative', icon: '👩‍🍳' },
    { id: 'ro3', title: 'Stargazing', description: 'Watch the stars together', duration: '45 min', category: 'relaxation', icon: '⭐' },
    { id: 'ro4', title: 'Write a Love Letter', description: 'Express your feelings on paper', duration: '20 min', category: 'creative', icon: '💌' },
    { id: 'ro5', title: 'Dance Together', description: 'Slow dance to romantic music', duration: '15 min', category: 'relaxation', icon: '💃' },
  ],
};

// Filter playlists by language
export const getPlaylistsByLanguage = (mood: Mood, language: Language): Playlist[] => {
  const playlists = moodPlaylists[mood] || [];
  if (language === 'all') return playlists;
  return playlists.filter(p => p.language === language);
};
