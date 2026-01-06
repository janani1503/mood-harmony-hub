import { Mood, Activity, Playlist, Language } from '@/types/mood';

export const moodPlaylists: Record<Mood, Playlist[]> = {
  happy: [
    // English
    { id: 'h1', title: 'Feel Good Vibes', description: 'Upbeat tracks to keep the good mood going', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 50, mood: 'happy', youtubeId: 'ZbZSe6N_BXs', language: 'english' },
    { id: 'h2', title: 'Happy Pop Hits', description: 'Chart-topping happy songs', imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300', trackCount: 35, mood: 'happy', youtubeId: '60ItHLz5WEA', language: 'english' },
    { id: 'h3', title: 'Dance Party', description: 'Get up and groove!', imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300', trackCount: 42, mood: 'happy', youtubeId: 'OPf0YbXqDm0', language: 'english' },
    { id: 'h8', title: 'Uptown Funk', description: 'Bruno Mars hit track', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300', trackCount: 1, mood: 'happy', youtubeId: 'OPf0YbXqDm0', language: 'english' },
    { id: 'h9', title: 'Happy - Pharrell', description: 'The ultimate happy song', imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300', trackCount: 1, mood: 'happy', youtubeId: 'ZbZSe6N_BXs', language: 'english' },
    // Tamil
    { id: 'h4', title: 'Vaathi Coming', description: 'Master - Vijay hit song', imageUrl: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=300', trackCount: 1, mood: 'happy', youtubeId: 'lkMpmQ3fZuE', language: 'tamil' },
    { id: 'h5', title: 'Kuthu Beats', description: 'High energy Tamil dance hits', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 40, mood: 'happy', youtubeId: 'BVqAz9BxwC8', language: 'tamil' },
    { id: 'h6', title: 'Jolly O Gymkhana', description: 'Beast - Thalapathy Vijay', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300', trackCount: 1, mood: 'happy', youtubeId: 'HUCsJjSGvqc', language: 'tamil' },
    { id: 'h10', title: 'Dheema Dheema', description: 'Petta - Rajinikanth song', imageUrl: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=300', trackCount: 1, mood: 'happy', youtubeId: 'VK8pEIFoaik', language: 'tamil' },
    { id: 'h11', title: 'Chellamma', description: 'Doctor - Sivakarthikeyan', imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300', trackCount: 1, mood: 'happy', youtubeId: 'xfLN4mzJh_0', language: 'tamil' },
    { id: 'h12', title: 'Jimikki Kammal', description: 'Velipadinte Pusthakam', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300', trackCount: 1, mood: 'happy', youtubeId: 'T2vJqPP3F7I', language: 'tamil' },
    { id: 'h13', title: 'Rakita Rakita', description: 'Jagame Thandhiram - Dhanush', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 1, mood: 'happy', youtubeId: 'g96-jWuHbbo', language: 'tamil' },
    { id: 'h14', title: 'Enjoy Enjaami', description: 'Dhee ft. Arivu', imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300', trackCount: 1, mood: 'happy', youtubeId: 'eYq7WapuDLU', language: 'tamil' },
    // Hindi
    { id: 'h7', title: 'Bollywood Party Mix', description: 'Dance hits from Bollywood', imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300', trackCount: 45, mood: 'happy', youtubeId: 'l_MyUGq7pgs', language: 'hindi' },
    { id: 'h15', title: 'Badtameez Dil', description: 'Yeh Jawaani Hai Deewani', imageUrl: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=300', trackCount: 1, mood: 'happy', youtubeId: 'II2EO3Nw4m0', language: 'hindi' },
    { id: 'h16', title: 'Gallan Goodiyaan', description: 'Dil Dhadakne Do', imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300', trackCount: 1, mood: 'happy', youtubeId: 'jCI76uTKq7w', language: 'hindi' },
    { id: 'h17', title: 'Lungi Dance', description: 'Chennai Express', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300', trackCount: 1, mood: 'happy', youtubeId: 'M5FGuBatbTg', language: 'hindi' },
    { id: 'h18', title: 'Kar Gayi Chull', description: 'Kapoor & Sons', imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300', trackCount: 1, mood: 'happy', youtubeId: 'NTHz9ephYTw', language: 'hindi' },
    { id: 'h19', title: 'Nachde Ne Saare', description: 'Baar Baar Dekho', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 1, mood: 'happy', youtubeId: 'KfBHh3Y-hL8', language: 'hindi' },
  ],
  sad: [
    // English
    { id: 's1', title: 'Mood Lifter', description: 'Songs to gently lift your spirits', imageUrl: 'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300', trackCount: 40, mood: 'sad', youtubeId: 'nfWlot6h_JM', language: 'english' },
    { id: 's2', title: 'Comforting Acoustics', description: 'Warm acoustic melodies for solace', imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300', trackCount: 30, mood: 'sad', youtubeId: 'RBumgq5yVrA', language: 'english' },
    { id: 's3', title: 'Hopeful Hearts', description: 'Inspirational tracks for brighter days', imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300', trackCount: 28, mood: 'sad', youtubeId: 'WA4iX5D9Z64', language: 'english' },
    // Tamil
    { id: 's4', title: 'Kannazhaga', description: '3 Movie - Anirudh soulful melody', imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300', trackCount: 1, mood: 'sad', youtubeId: 'cnrXBoQ9pPk', language: 'tamil' },
    { id: 's5', title: 'Nenjukkul Peidhidum', description: 'Vaaranam Aayiram - Harris Jayaraj', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 1, mood: 'sad', youtubeId: 'H4RHxrAdARA', language: 'tamil' },
    { id: 's20', title: 'Ennai Konjam', description: 'Kaakha Kaakha - Harris Jayaraj', imageUrl: 'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300', trackCount: 1, mood: 'sad', youtubeId: 'q0HNcaKdcEk', language: 'tamil' },
    { id: 's21', title: 'Venmathi Venmathiye', description: 'Minnale - Harris Jayaraj', imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300', trackCount: 1, mood: 'sad', youtubeId: 'pGOCG4G5Gkg', language: 'tamil' },
    { id: 's22', title: 'Po Nee Po', description: '3 Movie - Anirudh', imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300', trackCount: 1, mood: 'sad', youtubeId: 'U1kW3p7bk9U', language: 'tamil' },
    { id: 's23', title: 'Visiri', description: 'Enai Noki Paayum Thota', imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300', trackCount: 1, mood: 'sad', youtubeId: '9h3aW5PYwOk', language: 'tamil' },
    { id: 's24', title: 'Idhazhin Oram', description: '3 Movie - Anirudh', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 1, mood: 'sad', youtubeId: 'NTpnRn_8zLM', language: 'tamil' },
    // Hindi
    { id: 's6', title: 'Channa Mereya', description: 'Ae Dil Hai Mushkil - Arijit Singh', imageUrl: 'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300', trackCount: 1, mood: 'sad', youtubeId: 'EvMDuFNj26Y', language: 'hindi' },
    { id: 's25', title: 'Tujhe Bhula Diya', description: 'Anjaana Anjaani', imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300', trackCount: 1, mood: 'sad', youtubeId: 'PhQfeF8WMNY', language: 'hindi' },
    { id: 's26', title: 'Agar Tum Saath Ho', description: 'Tamasha - Arijit Singh', imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300', trackCount: 1, mood: 'sad', youtubeId: 'sK7riqg2mr4', language: 'hindi' },
    { id: 's27', title: 'Kabira', description: 'Yeh Jawaani Hai Deewani', imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300', trackCount: 1, mood: 'sad', youtubeId: 'jHNNMj5bNQw', language: 'hindi' },
    { id: 's28', title: 'Tum Hi Ho', description: 'Aashiqui 2 - Arijit Singh', imageUrl: 'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300', trackCount: 1, mood: 'sad', youtubeId: 'Umqb9KENgmk', language: 'hindi' },
  ],
  stressed: [
    // English
    { id: 'st1', title: 'Stress Relief', description: 'Calming sounds to ease your mind', imageUrl: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=300', trackCount: 45, mood: 'stressed', youtubeId: 'lFcSrYw-ARY', language: 'english' },
    { id: 'st2', title: 'Nature Sounds', description: 'Peaceful nature ambience', imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300', trackCount: 25, mood: 'stressed', youtubeId: 'eKFTSSKCzWA', language: 'english' },
    { id: 'st3', title: 'Spa & Wellness', description: 'Tranquil melodies for relaxation', imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300', trackCount: 38, mood: 'stressed', youtubeId: 'hlWiI4xVXKY', language: 'english' },
    // Tamil
    { id: 'st4', title: 'Kannukkul Pothivaippen', description: 'Thirumanam Ennum Nikkah', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300', trackCount: 1, mood: 'stressed', youtubeId: 'xyKlNE2oOiA', language: 'tamil' },
    { id: 'st30', title: 'Munbe Vaa', description: 'Sillunu Oru Kaadhal - AR Rahman', imageUrl: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=300', trackCount: 1, mood: 'stressed', youtubeId: 'xghQkHOPkcs', language: 'tamil' },
    { id: 'st31', title: 'Uyire Uyire', description: 'Bombay - AR Rahman', imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300', trackCount: 1, mood: 'stressed', youtubeId: 'QpmKi5JYpRQ', language: 'tamil' },
    { id: 'st32', title: 'Snehithane', description: 'Alaipayuthey - AR Rahman', imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300', trackCount: 1, mood: 'stressed', youtubeId: 'cL7s_4C0Zx4', language: 'tamil' },
    // Hindi
    { id: 'st5', title: 'Kun Faya Kun', description: 'Rockstar - AR Rahman', imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300', trackCount: 1, mood: 'stressed', youtubeId: 'T94PHkuydcw', language: 'hindi' },
    { id: 'st33', title: 'Iktara', description: 'Wake Up Sid', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300', trackCount: 1, mood: 'stressed', youtubeId: 'fSS_R91Nimw', language: 'hindi' },
    { id: 'st34', title: 'Tere Bina', description: 'Guru - AR Rahman', imageUrl: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=300', trackCount: 1, mood: 'stressed', youtubeId: 'P8ISV-qWPtU', language: 'hindi' },
  ],
  calm: [
    // English
    { id: 'c1', title: 'Zen Garden', description: 'Meditative tracks for inner peace', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300', trackCount: 55, mood: 'calm', youtubeId: '1ZYbU82GVz4', language: 'english' },
    { id: 'c2', title: 'Ambient Dreams', description: 'Ethereal soundscapes for tranquility', imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300', trackCount: 32, mood: 'calm', youtubeId: 'lE6RYpe9IT0', language: 'english' },
    { id: 'c3', title: 'Piano Serenity', description: 'Gentle piano pieces for relaxation', imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300', trackCount: 40, mood: 'calm', youtubeId: '4N3N1MlvVc4', language: 'english' },
    // Tamil
    { id: 'c4', title: 'Ilaiyaraaja Melodies', description: 'Timeless soft Tamil classics', imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300', trackCount: 50, mood: 'calm', youtubeId: 'bMvYLijDPKo', language: 'tamil' },
    { id: 'c5', title: 'Ennodu Nee Irundhaal', description: 'I - AR Rahman melody', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 1, mood: 'calm', youtubeId: 'Wmn4MoWm2Xc', language: 'tamil' },
    { id: 'c40', title: 'Vaseegara', description: 'Minnale - Harris Jayaraj', imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300', trackCount: 1, mood: 'calm', youtubeId: 'xthGCl9x1E0', language: 'tamil' },
    { id: 'c41', title: 'Kaadhal Rojave', description: 'Roja - AR Rahman', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300', trackCount: 1, mood: 'calm', youtubeId: 'xIfwNs7XhMk', language: 'tamil' },
    { id: 'c42', title: 'Thuli Thuli', description: 'Paiya - Yuvan Shankar Raja', imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300', trackCount: 1, mood: 'calm', youtubeId: 'qiDJN2qmSnc', language: 'tamil' },
    { id: 'c43', title: 'Mariyam Vannu', description: 'Katru Veliyidai - AR Rahman', imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300', trackCount: 1, mood: 'calm', youtubeId: 'oVDjVQdaWPE', language: 'tamil' },
    // Hindi
    { id: 'c44', title: 'Tum Se Hi', description: 'Jab We Met', imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300', trackCount: 1, mood: 'calm', youtubeId: 'mt9xg0mmt28', language: 'hindi' },
    { id: 'c45', title: 'Tera Ban Jaunga', description: 'Kabir Singh', imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300', trackCount: 1, mood: 'calm', youtubeId: 'Qs2ckLUFuwc', language: 'hindi' },
    { id: 'c46', title: 'Ae Dil Hai Mushkil', description: 'Title Track - Arijit Singh', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300', trackCount: 1, mood: 'calm', youtubeId: 'aJtQdKdwV9k', language: 'hindi' },
  ],
  energetic: [
    // English
    { id: 'e1', title: 'Power Workout', description: 'High-energy beats to fuel your workout', imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300', trackCount: 60, mood: 'energetic', youtubeId: 'gCYcHz2k5x0', language: 'english' },
    { id: 'e2', title: 'Morning Boost', description: 'Energizing tracks to start your day', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300', trackCount: 35, mood: 'energetic', youtubeId: 'fJ9rUzIMcZQ', language: 'english' },
    { id: 'e3', title: 'Running Mix', description: 'Keep your pace with these tracks', imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=300', trackCount: 45, mood: 'energetic', youtubeId: 'btPJPFnesV4', language: 'english' },
    // Tamil
    { id: 'e4', title: 'Aalaporaan Tamizhan', description: 'Mersal - Vijay anthem', imageUrl: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=300', trackCount: 1, mood: 'energetic', youtubeId: 'nqP78ESsKQ4', language: 'tamil' },
    { id: 'e5', title: 'Verithanam', description: 'Bigil - AR Rahman hit', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 1, mood: 'energetic', youtubeId: 'HejhKu3VH4E', language: 'tamil' },
    { id: 'e50', title: 'Marana Mass', description: 'Petta - Anirudh', imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300', trackCount: 1, mood: 'energetic', youtubeId: 'wCJsAflLHDI', language: 'tamil' },
    { id: 'e51', title: 'Singappenney', description: 'Bigil - AR Rahman', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300', trackCount: 1, mood: 'energetic', youtubeId: 'OY3ry_yqVRE', language: 'tamil' },
    { id: 'e52', title: 'Kutti Story', description: 'Master - Anirudh', imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=300', trackCount: 1, mood: 'energetic', youtubeId: 'cKmAxF1apGg', language: 'tamil' },
    { id: 'e53', title: 'Uppena Title Song', description: 'Uppena - Mass song', imageUrl: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=300', trackCount: 1, mood: 'energetic', youtubeId: 'A7qDuYYUhKU', language: 'tamil' },
    { id: 'e54', title: 'Bujji', description: 'Jagame Thandhiram', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 1, mood: 'energetic', youtubeId: 'pnsmLDj7OoQ', language: 'tamil' },
    // Hindi
    { id: 'e6', title: 'Zinda', description: 'Bhaag Milkha Bhaag', imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300', trackCount: 1, mood: 'energetic', youtubeId: 'cVdycSZCvU8', language: 'hindi' },
    { id: 'e55', title: 'Malhari', description: 'Bajirao Mastani', imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300', trackCount: 1, mood: 'energetic', youtubeId: 'l_MyUGq7pgs', language: 'hindi' },
    { id: 'e56', title: 'Khalibali', description: 'Padmaavat', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300', trackCount: 1, mood: 'energetic', youtubeId: 'v66FpXoVI8I', language: 'hindi' },
    { id: 'e57', title: 'Sultan Title Track', description: 'Sultan - Salman Khan', imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=300', trackCount: 1, mood: 'energetic', youtubeId: 'bCd9UXujGuY', language: 'hindi' },
  ],
  anxious: [
    // English
    { id: 'a1', title: 'Anxiety Relief', description: 'Calming sounds for peace of mind', imageUrl: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=300', trackCount: 40, mood: 'anxious', youtubeId: '2OEL4P1Rz04', language: 'english' },
    { id: 'a2', title: 'Deep Breathing Music', description: 'Music for guided breathing', imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300', trackCount: 25, mood: 'anxious', youtubeId: 'aEqlQvczMJQ', language: 'english' },
    // Tamil
    { id: 'a3', title: 'Ottagathai Kattiko', description: 'Gentleman - AR Rahman', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300', trackCount: 1, mood: 'anxious', youtubeId: 'X4d5PpylJek', language: 'tamil' },
    { id: 'a60', title: 'Ennai Thalatta Varuvala', description: 'Kadhalukku Mariyadhai', imageUrl: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=300', trackCount: 1, mood: 'anxious', youtubeId: 'o5sEF0Fhpas', language: 'tamil' },
    { id: 'a61', title: 'Pudhu Vellai Mazhai', description: 'Roja - AR Rahman', imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300', trackCount: 1, mood: 'anxious', youtubeId: '7A3P8GxmCVA', language: 'tamil' },
    // Hindi
    { id: 'a62', title: 'Nadaan Parindey', description: 'Rockstar - AR Rahman', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300', trackCount: 1, mood: 'anxious', youtubeId: 'LsPu3M-XPCE', language: 'hindi' },
    { id: 'a63', title: 'Khairiyat', description: 'Chhichhore - Arijit Singh', imageUrl: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=300', trackCount: 1, mood: 'anxious', youtubeId: 'hoNb6HuNmU0', language: 'hindi' },
  ],
  excited: [
    // English
    { id: 'ex1', title: 'Party Anthems', description: "Let's celebrate!", imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300', trackCount: 55, mood: 'excited', youtubeId: 'kJQP7kiw5Fk', language: 'english' },
    { id: 'ex2', title: 'EDM Bangers', description: 'Electronic dance music hits', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300', trackCount: 45, mood: 'excited', youtubeId: 'IcrbM1l_BoI', language: 'english' },
    // Tamil
    { id: 'ex3', title: 'Rowdy Baby', description: 'Maari 2 - Dhanush & Sai Pallavi', imageUrl: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=300', trackCount: 1, mood: 'excited', youtubeId: 'x6Q7c9RyMzk', language: 'tamil' },
    { id: 'ex4', title: 'Arabic Kuthu', description: 'Beast - Thalapathy Vijay', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 1, mood: 'excited', youtubeId: 'qFkU9hPPwg4', language: 'tamil' },
    { id: 'ex70', title: 'Oo Antava', description: 'Pushpa - Samantha', imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300', trackCount: 1, mood: 'excited', youtubeId: '-EE3cZKpLfY', language: 'tamil' },
    { id: 'ex71', title: 'Srivalli', description: 'Pushpa - Javed Ali', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300', trackCount: 1, mood: 'excited', youtubeId: 'gPoCa8eoNHo', language: 'tamil' },
    { id: 'ex72', title: 'Naatu Naatu', description: 'RRR - Oscar Winner', imageUrl: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=300', trackCount: 1, mood: 'excited', youtubeId: 'OsU0CGZoV8E', language: 'tamil' },
    { id: 'ex73', title: 'Private Party', description: 'Dont Worry Be Happy', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 1, mood: 'excited', youtubeId: 'q8L0cT1Zxg4', language: 'tamil' },
    // Hindi
    { id: 'ex74', title: 'Balam Pichkari', description: 'Yeh Jawaani Hai Deewani', imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300', trackCount: 1, mood: 'excited', youtubeId: '0WtRNGubWGA', language: 'hindi' },
    { id: 'ex75', title: 'First Class', description: 'Kalank', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300', trackCount: 1, mood: 'excited', youtubeId: 'p4RIY-oVhRE', language: 'hindi' },
    { id: 'ex76', title: 'London Thumakda', description: 'Queen', imageUrl: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=300', trackCount: 1, mood: 'excited', youtubeId: 'udra3Mfw2oo', language: 'hindi' },
  ],
  tired: [
    // English
    { id: 't1', title: 'Sleep Sounds', description: 'Drift off to dreamland', imageUrl: 'https://images.unsplash.com/photo-1455642305367-68834a1da7ab?w=300', trackCount: 30, mood: 'tired', youtubeId: 'aXItOY0sLRY', language: 'english' },
    { id: 't2', title: 'Lo-Fi Beats', description: 'Chill beats to relax', imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300', trackCount: 100, mood: 'tired', youtubeId: 'jfKfPfyJRdk', language: 'english' },
    // Tamil
    { id: 't3', title: 'Ennodu Nee Irundhaal', description: 'I - Soft melody', imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300', trackCount: 1, mood: 'tired', youtubeId: 'Wmn4MoWm2Xc', language: 'tamil' },
    { id: 't80', title: 'Neethane Neethane', description: 'Mersal - Soft version', imageUrl: 'https://images.unsplash.com/photo-1455642305367-68834a1da7ab?w=300', trackCount: 1, mood: 'tired', youtubeId: 'dNkCcd2e9Tk', language: 'tamil' },
    { id: 't81', title: 'Azhagiye', description: 'Kaatru Veliyidai', imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300', trackCount: 1, mood: 'tired', youtubeId: 'vqjnLq5o2ok', language: 'tamil' },
    { id: 't82', title: 'Yaen Ennai', description: 'Adirindhi', imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300', trackCount: 1, mood: 'tired', youtubeId: '24h_gq_Kw8k', language: 'tamil' },
    // Hindi
    { id: 't4', title: 'Kal Ho Naa Ho', description: 'Soft Hindi melodies', imageUrl: 'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300', trackCount: 1, mood: 'tired', youtubeId: 'g0eO74UmRBs', language: 'hindi' },
    { id: 't83', title: 'Raabta', description: 'Agent Vinod', imageUrl: 'https://images.unsplash.com/photo-1455642305367-68834a1da7ab?w=300', trackCount: 1, mood: 'tired', youtubeId: 'BXKQ64JC_6U', language: 'hindi' },
    { id: 't84', title: 'Kuch Kuch Hota Hai', description: 'Classic Bollywood', imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300', trackCount: 1, mood: 'tired', youtubeId: '7WF35-OwLTw', language: 'hindi' },
  ],
  focused: [
    // English
    { id: 'f1', title: 'Deep Focus', description: 'Concentration music for work', imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=300', trackCount: 50, mood: 'focused', youtubeId: 'jfKfPfyJRdk', language: 'english' },
    { id: 'f2', title: 'Study With Me', description: 'Background music for studying', imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300', trackCount: 40, mood: 'focused', youtubeId: 'TURbeWK2wwg', language: 'english' },
    // Tamil
    { id: 'f3', title: 'Instrumental Tamil', description: 'Focus with Tamil instrumentals', imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300', trackCount: 30, mood: 'focused', youtubeId: '3ZCDJkFozyg', language: 'tamil' },
    { id: 'f90', title: 'AR Rahman Instrumentals', description: 'Best of AR Rahman BGM', imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=300', trackCount: 40, mood: 'focused', youtubeId: 'Rg7A_JDxdCQ', language: 'tamil' },
    { id: 'f91', title: 'Ilaiyaraaja Instrumentals', description: 'Classical Tamil BGM', imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300', trackCount: 35, mood: 'focused', youtubeId: 'i7gVIHG8PvE', language: 'tamil' },
    // Hindi
    { id: 'f92', title: 'Bollywood Instrumentals', description: 'Hindi movie background scores', imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300', trackCount: 30, mood: 'focused', youtubeId: 'zrq1y8K4tB0', language: 'hindi' },
    { id: 'f93', title: 'Sufi Instrumentals', description: 'Peaceful Sufi music', imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=300', trackCount: 25, mood: 'focused', youtubeId: 'vGJTaP6anOU', language: 'hindi' },
  ],
  romantic: [
    // English
    { id: 'r1', title: 'Love Songs', description: 'Romantic melodies for two', imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300', trackCount: 45, mood: 'romantic', youtubeId: '450p7goxZqg', language: 'english' },
    { id: 'r2', title: 'Date Night', description: 'Perfect for a romantic evening', imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300', trackCount: 35, mood: 'romantic', youtubeId: '3JWTaaS7LdU', language: 'english' },
    // Tamil
    { id: 'r3', title: 'Nee Paartha Vizhigal', description: '3 Movie - Romantic hit', imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300', trackCount: 1, mood: 'romantic', youtubeId: 'wBglFYC-JUM', language: 'tamil' },
    { id: 'r4', title: 'Unna Pethavan', description: 'Gilli - Vijay classic', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 1, mood: 'romantic', youtubeId: 'KDkSkUqXeM4', language: 'tamil' },
    { id: 'r100', title: 'Kadhal En Kadhal', description: 'Mayakkam Enna', imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300', trackCount: 1, mood: 'romantic', youtubeId: 'EjIu2ItEXpQ', language: 'tamil' },
    { id: 'r101', title: 'Thaandavam', description: 'Naayak - Vijay romantic', imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300', trackCount: 1, mood: 'romantic', youtubeId: 'F3Y1A0_DXGI', language: 'tamil' },
    { id: 'r102', title: 'Megam Karukuthu', description: 'Thirumalai', imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300', trackCount: 1, mood: 'romantic', youtubeId: 'iHO6g7hQdLY', language: 'tamil' },
    { id: 'r103', title: 'Thalli Pogathey', description: 'Achcham Yenbadhu Madamaiyada', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 1, mood: 'romantic', youtubeId: 'X6Z6cAqx0N0', language: 'tamil' },
    { id: 'r104', title: 'Maruvaarthai', description: 'Enai Noki Paayum Thota', imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300', trackCount: 1, mood: 'romantic', youtubeId: 'k0OI9UWQPDU', language: 'tamil' },
    { id: 'r105', title: 'Naan Un', description: '24 - AR Rahman', imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300', trackCount: 1, mood: 'romantic', youtubeId: 'gPCfLs4ILNo', language: 'tamil' },
    // Hindi
    { id: 'r5', title: 'Tum Hi Ho', description: 'Aashiqui 2 - Arijit Singh', imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300', trackCount: 1, mood: 'romantic', youtubeId: 'Umqb9KENgmk', language: 'hindi' },
    { id: 'r106', title: 'Raataan Lambiyan', description: 'Shershaah', imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300', trackCount: 1, mood: 'romantic', youtubeId: 'gvyU__qD3N8', language: 'hindi' },
    { id: 'r107', title: 'Pehla Nasha', description: 'Jo Jeeta Wohi Sikandar', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 1, mood: 'romantic', youtubeId: 'BaBjbVMKsEY', language: 'hindi' },
    { id: 'r108', title: 'Tere Liye', description: 'Veer Zaara', imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300', trackCount: 1, mood: 'romantic', youtubeId: 'ZPqtIuGYxqc', language: 'hindi' },
    { id: 'r109', title: 'Kesariya', description: 'Brahmastra - Arijit Singh', imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300', trackCount: 1, mood: 'romantic', youtubeId: 'BddP6PYo2gs', language: 'hindi' },
  ],
  angry: [
    // English
    { id: 'an1', title: 'Rage Against Machine', description: 'Intense rock for anger release', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 30, mood: 'angry', youtubeId: '2Pwdq2mNUCA', language: 'english' },
    { id: 'an2', title: 'Heavy Metal Hits', description: 'Channel your anger', imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300', trackCount: 45, mood: 'angry', youtubeId: 'CSvFpBOe8eY', language: 'english' },
    { id: 'an3', title: 'Eminem Greatest', description: 'Rap your anger out', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300', trackCount: 35, mood: 'angry', youtubeId: '_Yhyp-_hX2s', language: 'english' },
    // Tamil
    { id: 'an4', title: 'Beast Mode', description: 'Beast - Intense BGM', imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300', trackCount: 1, mood: 'angry', youtubeId: 'qFkU9hPPwg4', language: 'tamil' },
    { id: 'an5', title: 'Vikram Mass', description: 'Vikram - Intense action music', imageUrl: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=300', trackCount: 1, mood: 'angry', youtubeId: '7FzL5w-lhPI', language: 'tamil' },
    { id: 'an6', title: 'Leo Naa Ready', description: 'Leo - Vijay Mass', imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=300', trackCount: 1, mood: 'angry', youtubeId: 'Zf3nDDJb8Pg', language: 'tamil' },
    { id: 'an7', title: 'Pathala Pathala', description: 'Vikram - Anirudh', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 1, mood: 'angry', youtubeId: 'T6iPYnXcOaM', language: 'tamil' },
    // Hindi
    { id: 'an8', title: 'Dangal Title', description: 'Dangal - Aamir Khan', imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300', trackCount: 1, mood: 'angry', youtubeId: 'ChkjMnCraWY', language: 'hindi' },
    { id: 'an9', title: 'Sadda Haq', description: 'Rockstar - Intense', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300', trackCount: 1, mood: 'angry', youtubeId: 'DGwCmhT-LsE', language: 'hindi' },
  ],
  bored: [
    // English
    { id: 'bo1', title: 'Upbeat Pop Mix', description: 'Fun songs to beat boredom', imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300', trackCount: 50, mood: 'bored', youtubeId: 'kJQP7kiw5Fk', language: 'english' },
    { id: 'bo2', title: 'Dance Pop Hits', description: 'Get moving and shake off boredom', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300', trackCount: 40, mood: 'bored', youtubeId: 'fRh_vgS2dFE', language: 'english' },
    { id: 'bo3', title: 'Fun Indie', description: 'Quirky songs for boring moments', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 35, mood: 'bored', youtubeId: '60ItHLz5WEA', language: 'english' },
    // Tamil
    { id: 'bo4', title: 'Rowdy Baby', description: 'Maari 2 - Fun dance number', imageUrl: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=300', trackCount: 1, mood: 'bored', youtubeId: 'x6Q7c9RyMzk', language: 'tamil' },
    { id: 'bo5', title: 'Kalyaana Vayasu', description: 'Kolamaavu Kokila', imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300', trackCount: 1, mood: 'bored', youtubeId: 'qEL5y9ejZ6Y', language: 'tamil' },
    { id: 'bo6', title: 'Don u Don u', description: 'Maari - Fun song', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300', trackCount: 1, mood: 'bored', youtubeId: 'jAJ4xJKl0H0', language: 'tamil' },
    { id: 'bo7', title: 'Why This Kolaveri', description: '3 Movie - Viral hit', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 1, mood: 'bored', youtubeId: 'YR12Z8f1Dh8', language: 'tamil' },
    // Hindi
    { id: 'bo8', title: 'Kar Gayi Chull', description: 'Kapoor & Sons', imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300', trackCount: 1, mood: 'bored', youtubeId: 'NTHz9ephYTw', language: 'hindi' },
    { id: 'bo9', title: 'Saturday Saturday', description: 'Humpty Sharma Ki Dulhania', imageUrl: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=300', trackCount: 1, mood: 'bored', youtubeId: 'UpJtzPH5LVk', language: 'hindi' },
  ],
  hopeful: [
    // English
    { id: 'ho1', title: 'Motivational Anthems', description: 'Songs to inspire hope', imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300', trackCount: 40, mood: 'hopeful', youtubeId: 'btPJPFnesV4', language: 'english' },
    { id: 'ho2', title: 'Uplifting Classics', description: 'Timeless inspiring songs', imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300', trackCount: 35, mood: 'hopeful', youtubeId: 'WA4iX5D9Z64', language: 'english' },
    { id: 'ho3', title: 'Rise Up Mix', description: 'Songs about overcoming', imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300', trackCount: 30, mood: 'hopeful', youtubeId: '3AtDnEC4zak', language: 'english' },
    // Tamil
    { id: 'ho4', title: 'Velaikkaran', description: 'Velaikkaran - Motivational', imageUrl: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=300', trackCount: 1, mood: 'hopeful', youtubeId: 'ToPAqk0KDLA', language: 'tamil' },
    { id: 'ho5', title: 'Mersal Arasan', description: 'Mersal - Inspiring', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300', trackCount: 1, mood: 'hopeful', youtubeId: 'nqP78ESsKQ4', language: 'tamil' },
    { id: 'ho6', title: 'Vaathi Coming', description: 'Master - Rise up anthem', imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300', trackCount: 1, mood: 'hopeful', youtubeId: 'lkMpmQ3fZuE', language: 'tamil' },
    { id: 'ho7', title: 'Verithanam', description: 'Bigil - Victory song', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 1, mood: 'hopeful', youtubeId: 'HejhKu3VH4E', language: 'tamil' },
    // Hindi
    { id: 'ho8', title: 'Zindagi Kuch Toh Bata', description: 'Bajrangi Bhaijaan', imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300', trackCount: 1, mood: 'hopeful', youtubeId: 'dNt9oCTG89M', language: 'hindi' },
    { id: 'ho9', title: 'Chak De India', description: 'Title song - SRK', imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300', trackCount: 1, mood: 'hopeful', youtubeId: 'De0MBVa8r6s', language: 'hindi' },
  ],
  nostalgic: [
    // English
    { id: 'no1', title: '90s Hits', description: 'Throwback to the golden era', imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300', trackCount: 60, mood: 'nostalgic', youtubeId: 'djV11Xbc914', language: 'english' },
    { id: 'no2', title: '2000s Pop', description: 'Remember the good old days', imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300', trackCount: 55, mood: 'nostalgic', youtubeId: 'LOZuxwVk7TU', language: 'english' },
    { id: 'no3', title: 'Acoustic Memories', description: 'Gentle acoustic throwbacks', imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300', trackCount: 40, mood: 'nostalgic', youtubeId: '0yW7w8F2TVA', language: 'english' },
    // Tamil
    { id: 'no4', title: 'Ilaiyaraaja Classics', description: 'Timeless Tamil melodies', imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300', trackCount: 50, mood: 'nostalgic', youtubeId: 'bMvYLijDPKo', language: 'tamil' },
    { id: 'no5', title: 'SPB Golden Hits', description: 'SP Balasubrahmanyam classics', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300', trackCount: 45, mood: 'nostalgic', youtubeId: 'i7gVIHG8PvE', language: 'tamil' },
    { id: 'no6', title: 'Old Tamil Melodies', description: '90s Tamil hits', imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300', trackCount: 40, mood: 'nostalgic', youtubeId: 'xIfwNs7XhMk', language: 'tamil' },
    { id: 'no7', title: 'AR Rahman 90s', description: 'Early AR Rahman magic', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', trackCount: 35, mood: 'nostalgic', youtubeId: '7A3P8GxmCVA', language: 'tamil' },
    // Hindi
    { id: 'no8', title: 'Old Hindi Gold', description: 'Classic Bollywood songs', imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300', trackCount: 50, mood: 'nostalgic', youtubeId: 'g0eO74UmRBs', language: 'hindi' },
    { id: 'no9', title: '90s Bollywood', description: 'SRK era classics', imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300', trackCount: 45, mood: 'nostalgic', youtubeId: '7WF35-OwLTw', language: 'hindi' },
  ],
};

export const moodActivities: Record<Mood, Activity[]> = {
  happy: [
    { id: 'ha1', title: 'Dance Session', description: 'Let loose and dance to your favorite tunes', duration: '20 min', category: 'workout', icon: '💃', youtubeId: 'FJpSZlSz8Gs' },
    { id: 'ha2', title: 'Creative Journaling', description: 'Capture your positive moments in writing', duration: '15 min', category: 'creative', icon: '📝' },
    { id: 'ha3', title: 'Gratitude Meditation', description: 'Reflect on the things that make you happy', duration: '10 min', category: 'meditation', icon: '🙏', youtubeId: 'ZToicYcHIOU' },
    { id: 'ha4', title: 'Call a Friend', description: 'Share your happiness with someone you love', duration: '30 min', category: 'social', icon: '📞' },
    { id: 'ha5', title: 'Photo Walk', description: 'Capture beautiful moments around you', duration: '45 min', category: 'creative', icon: '📸' },
    { id: 'ha6', title: 'Cook Something Fun', description: 'Try a new recipe you always wanted', duration: '60 min', category: 'creative', icon: '🍳' },
    { id: 'ha7', title: 'Play a Game', description: 'Board games or video games with friends', duration: '45 min', category: 'social', icon: '🎮' },
  ],
  sad: [
    { id: 'sa1', title: 'Gentle Yoga', description: 'Slow, nurturing movements to comfort your body', duration: '25 min', category: 'relaxation', icon: '🧘', youtubeId: 'v7AYKMP6rOE' },
    { id: 'sa2', title: 'Breathing Exercise', description: 'Deep breathing to release emotional tension', duration: '10 min', category: 'meditation', icon: '🌬️', youtubeId: 'tybOi4hjZFQ' },
    { id: 'sa3', title: 'Nature Walk', description: 'Get outside for some fresh air and sunshine', duration: '30 min', category: 'relaxation', icon: '🌳' },
    { id: 'sa4', title: 'Watch Comedy', description: 'Laughter is the best medicine', duration: '30 min', category: 'relaxation', icon: '😂', youtubeId: 'WQCmGnJFSPc' },
    { id: 'sa5', title: 'Comfort Cooking', description: 'Make your favorite comfort food', duration: '45 min', category: 'creative', icon: '🍲' },
    { id: 'sa6', title: 'Write Your Feelings', description: 'Express emotions through writing', duration: '20 min', category: 'creative', icon: '✍️' },
    { id: 'sa7', title: 'Pet Therapy', description: 'Spend time with a pet or watch cute animal videos', duration: '15 min', category: 'relaxation', icon: '🐶', youtubeId: 'pDm_na3Fxr0' },
  ],
  stressed: [
    { id: 'str1', title: 'Body Scan Meditation', description: 'Release tension from head to toe', duration: '15 min', category: 'meditation', icon: '🧠', youtubeId: 'z6X5oEIg6Ak' },
    { id: 'str2', title: 'Progressive Relaxation', description: 'Systematically relax your muscles', duration: '20 min', category: 'relaxation', icon: '😌', youtubeId: '86HUcX8ZtAk' },
    { id: 'str3', title: 'Quick HIIT', description: 'Release stress through intense movement', duration: '15 min', category: 'workout', icon: '🏃', youtubeId: 'ml6cT4AZdqI' },
    { id: 'str4', title: 'Aromatherapy Bath', description: 'Relax with essential oils and warm water', duration: '30 min', category: 'relaxation', icon: '🛁' },
    { id: 'str5', title: 'Coloring Therapy', description: 'Mindful coloring for stress relief', duration: '20 min', category: 'creative', icon: '🎨' },
    { id: 'str6', title: 'Punching Bag / Pillow', description: 'Physical release of frustration', duration: '10 min', category: 'workout', icon: '🥊' },
    { id: 'str7', title: 'Listen to Nature', description: 'Close eyes and listen to rain/ocean sounds', duration: '15 min', category: 'relaxation', icon: '🌧️', youtubeId: 'mPZkdNFkNps' },
  ],
  calm: [
    { id: 'ca1', title: 'Mindfulness Meditation', description: 'Deepen your sense of peace and presence', duration: '20 min', category: 'meditation', icon: '🕯️', youtubeId: 'inpok4MKVLM' },
    { id: 'ca2', title: 'Reading Session', description: 'Enjoy a good book in quiet comfort', duration: '30 min', category: 'focus', icon: '📚' },
    { id: 'ca3', title: 'Stretching Routine', description: 'Maintain your relaxed state with gentle stretches', duration: '15 min', category: 'relaxation', icon: '🤸', youtubeId: 'sTANio_2E0Q' },
    { id: 'ca4', title: 'Tea Ceremony', description: 'Mindful tea preparation and drinking', duration: '20 min', category: 'relaxation', icon: '🍵' },
    { id: 'ca5', title: 'Garden Time', description: 'Connect with nature through gardening', duration: '45 min', category: 'relaxation', icon: '🌱' },
    { id: 'ca6', title: 'Stargazing', description: 'Watch the night sky', duration: '30 min', category: 'relaxation', icon: '⭐' },
    { id: 'ca7', title: 'Painting/Sketching', description: 'Express calmness through art', duration: '40 min', category: 'creative', icon: '🖼️' },
  ],
  energetic: [
    { id: 'en1', title: 'HIIT Workout', description: 'Channel your energy into intense intervals', duration: '30 min', category: 'workout', icon: '💪', youtubeId: 'ml6cT4AZdqI' },
    { id: 'en2', title: 'Power Yoga', description: 'Dynamic flow to match your energy', duration: '25 min', category: 'workout', icon: '🔥', youtubeId: 'yL0I0f8gNfM' },
    { id: 'en3', title: 'Focused Work Sprint', description: 'Use your energy for productive deep work', duration: '45 min', category: 'focus', icon: '🎯' },
    { id: 'en4', title: 'Clean & Organize', description: 'Channel energy into tidying your space', duration: '30 min', category: 'focus', icon: '🧹' },
    { id: 'en5', title: 'Learn Something New', description: 'Take an online class or tutorial', duration: '60 min', category: 'focus', icon: '💡' },
    { id: 'en6', title: 'Jump Rope Challenge', description: 'Fun cardio workout', duration: '15 min', category: 'workout', icon: '⏭️', youtubeId: 'u3zgHI8QnqE' },
    { id: 'en7', title: 'Outdoor Run', description: 'Run or jog in your neighborhood', duration: '30 min', category: 'workout', icon: '🏃‍♂️' },
  ],
  anxious: [
    { id: 'ax1', title: '4-7-8 Breathing', description: 'Calming breath technique for anxiety', duration: '5 min', category: 'meditation', icon: '🌬️', youtubeId: 'YRPh_GaiL8s' },
    { id: 'ax2', title: 'Grounding Exercise', description: '5-4-3-2-1 sensory grounding', duration: '10 min', category: 'meditation', icon: '🌍' },
    { id: 'ax3', title: 'Anxiety Relief Yoga', description: 'Calming yoga for anxious minds', duration: '20 min', category: 'relaxation', icon: '🧘', youtubeId: 'bJJWArRfKa0' },
    { id: 'ax4', title: 'Journaling', description: 'Write down your worries', duration: '15 min', category: 'creative', icon: '📓' },
    { id: 'ax5', title: 'Talk to Someone', description: 'Share your feelings with a trusted person', duration: '30 min', category: 'social', icon: '💬' },
    { id: 'ax6', title: 'Squeeze a Stress Ball', description: 'Physical release for anxiety', duration: '5 min', category: 'relaxation', icon: '✊' },
    { id: 'ax7', title: 'Box Breathing', description: '4-4-4-4 breathing pattern', duration: '5 min', category: 'meditation', icon: '📦', youtubeId: 'tEmt1Znux58' },
  ],
  excited: [
    { id: 'exc1', title: 'Dance Workout', description: 'Dance your excitement out!', duration: '30 min', category: 'workout', icon: '🎉', youtubeId: 'FJpSZlSz8Gs' },
    { id: 'exc2', title: 'Plan Your Goals', description: 'Channel excitement into planning', duration: '20 min', category: 'focus', icon: '📋' },
    { id: 'exc3', title: 'Creative Project', description: "Start something you've been meaning to do", duration: '60 min', category: 'creative', icon: '🎨' },
    { id: 'exc4', title: 'Share the News', description: 'Tell someone about your excitement', duration: '15 min', category: 'social', icon: '📣' },
    { id: 'exc5', title: 'Karaoke Session', description: 'Sing your heart out!', duration: '30 min', category: 'creative', icon: '🎤', youtubeId: 'QDYfEBY9NM4' },
    { id: 'exc6', title: 'Celebrate with Music', description: 'Create a celebration playlist', duration: '20 min', category: 'creative', icon: '🎶' },
  ],
  tired: [
    { id: 'ti1', title: 'Power Nap', description: 'A quick 20-minute rest', duration: '20 min', category: 'relaxation', icon: '😴' },
    { id: 'ti2', title: 'Restorative Yoga', description: 'Gentle poses to restore energy', duration: '20 min', category: 'relaxation', icon: '🧘', youtubeId: 'SoN8LqVfmuw' },
    { id: 'ti3', title: 'Light Stretching', description: 'Wake up your body gently', duration: '10 min', category: 'relaxation', icon: '🤸', youtubeId: 'sTANio_2E0Q' },
    { id: 'ti4', title: 'Hydration Break', description: 'Drink water and have a healthy snack', duration: '10 min', category: 'relaxation', icon: '💧' },
    { id: 'ti5', title: 'Short Walk', description: 'A brief walk to get blood flowing', duration: '15 min', category: 'relaxation', icon: '🚶' },
    { id: 'ti6', title: 'Guided Sleep Story', description: 'Relaxing bedtime story', duration: '30 min', category: 'relaxation', icon: '📖', youtubeId: '1vx8iUvfyCY' },
    { id: 'ti7', title: 'Caffeine-Free Energy', description: 'Cold water splash and stretching', duration: '5 min', category: 'relaxation', icon: '❄️' },
  ],
  focused: [
    { id: 'fo1', title: 'Pomodoro Session', description: '25 min focus, 5 min break', duration: '30 min', category: 'focus', icon: '🍅' },
    { id: 'fo2', title: 'Deep Work Block', description: 'Uninterrupted focus time', duration: '90 min', category: 'focus', icon: '💻' },
    { id: 'fo3', title: 'Brain Training', description: 'Puzzles and mental exercises', duration: '15 min', category: 'focus', icon: '🧩' },
    { id: 'fo4', title: 'Focus Meditation', description: 'Train your attention', duration: '10 min', category: 'meditation', icon: '🎯', youtubeId: 'ZToicYcHIOU' },
    { id: 'fo5', title: 'Organize Workspace', description: 'Clear desk for clear mind', duration: '15 min', category: 'focus', icon: '🗂️' },
    { id: 'fo6', title: 'Learn a New Skill', description: 'Online course or tutorial', duration: '45 min', category: 'focus', icon: '📱' },
  ],
  romantic: [
    { id: 'ro1', title: 'Couple Meditation', description: 'Meditate together', duration: '15 min', category: 'meditation', icon: '💕', youtubeId: 'vDZ8ygzSBOE' },
    { id: 'ro2', title: 'Partner Yoga', description: 'Connect through movement', duration: '25 min', category: 'relaxation', icon: '🧘‍♀️', youtubeId: '4yGqtMVB-64' },
    { id: 'ro3', title: 'Write a Love Letter', description: 'Express your feelings in writing', duration: '20 min', category: 'creative', icon: '💌' },
    { id: 'ro4', title: 'Plan a Date', description: 'Create a special evening together', duration: '30 min', category: 'social', icon: '🌹' },
    { id: 'ro5', title: 'Cook Together', description: 'Make a romantic dinner', duration: '60 min', category: 'creative', icon: '👨‍🍳' },
    { id: 'ro6', title: 'Sunset Watch', description: 'Watch the sunset together', duration: '30 min', category: 'relaxation', icon: '🌅' },
    { id: 'ro7', title: 'Dance Together', description: 'Slow dance at home', duration: '15 min', category: 'social', icon: '💃' },
  ],
  angry: [
    { id: 'ag1', title: 'Punching Workout', description: 'Release anger through boxing moves', duration: '20 min', category: 'workout', icon: '🥊', youtubeId: '6lDkq_bAYdw' },
    { id: 'ag2', title: 'Scream Therapy', description: 'Controlled vocal release', duration: '5 min', category: 'relaxation', icon: '😤' },
    { id: 'ag3', title: 'Intense Cardio', description: 'Burn off that anger', duration: '30 min', category: 'workout', icon: '🏃', youtubeId: 'ml6cT4AZdqI' },
    { id: 'ag4', title: 'Journal Your Feelings', description: 'Write out your frustrations', duration: '15 min', category: 'creative', icon: '📝' },
    { id: 'ag5', title: 'Anger Meditation', description: 'Transform anger into calm', duration: '10 min', category: 'meditation', icon: '🧘', youtubeId: 'Q9lmLlMB4fQ' },
    { id: 'ag6', title: 'Cold Shower', description: 'Shock your system to calm down', duration: '5 min', category: 'relaxation', icon: '🚿' },
  ],
  bored: [
    { id: 'br1', title: 'Learn Something New', description: 'Watch an interesting documentary', duration: '45 min', category: 'focus', icon: '📺', youtubeId: 'PUv66718DII' },
    { id: 'br2', title: 'Creative Drawing', description: 'Sketch something random', duration: '30 min', category: 'creative', icon: '✏️' },
    { id: 'br3', title: 'Dance Workout', description: 'Fun dance to shake off boredom', duration: '20 min', category: 'workout', icon: '💃', youtubeId: 'FJpSZlSz8Gs' },
    { id: 'br4', title: 'Try a New Recipe', description: 'Cook something you never tried', duration: '60 min', category: 'creative', icon: '👨‍🍳' },
    { id: 'br5', title: 'Video Call Friends', description: 'Connect with someone', duration: '30 min', category: 'social', icon: '📱' },
    { id: 'br6', title: 'Explore Music', description: 'Discover new artists', duration: '30 min', category: 'creative', icon: '🎵' },
  ],
  hopeful: [
    { id: 'hp1', title: 'Vision Board', description: 'Create your dreams visually', duration: '45 min', category: 'creative', icon: '🎯' },
    { id: 'hp2', title: 'Gratitude Journaling', description: 'Write what you are grateful for', duration: '15 min', category: 'creative', icon: '📓' },
    { id: 'hp3', title: 'Goal Setting', description: 'Plan your next achievements', duration: '30 min', category: 'focus', icon: '🌟' },
    { id: 'hp4', title: 'Motivational Videos', description: 'Watch inspiring talks', duration: '20 min', category: 'focus', icon: '🎬', youtubeId: 'mgmVOuLgFB0' },
    { id: 'hp5', title: 'Plant Something', description: 'Nurture growth symbolically', duration: '20 min', category: 'relaxation', icon: '🌱' },
    { id: 'hp6', title: 'Help Someone', description: 'Random act of kindness', duration: '30 min', category: 'social', icon: '💝' },
  ],
  nostalgic: [
    { id: 'ns1', title: 'Photo Album', description: 'Browse old photos', duration: '30 min', category: 'relaxation', icon: '📸' },
    { id: 'ns2', title: 'Call Old Friends', description: 'Reconnect with the past', duration: '30 min', category: 'social', icon: '📞' },
    { id: 'ns3', title: 'Write Memories', description: 'Journal about good times', duration: '20 min', category: 'creative', icon: '✍️' },
    { id: 'ns4', title: 'Cook Childhood Dish', description: 'Make a dish from your past', duration: '45 min', category: 'creative', icon: '🍲' },
    { id: 'ns5', title: 'Watch Old Movies', description: 'Films from your childhood', duration: '120 min', category: 'relaxation', icon: '🎬' },
    { id: 'ns6', title: 'Visit Memory Lane', description: 'Walk through familiar places', duration: '60 min', category: 'relaxation', icon: '🚶' },
  ],
};

// Filter playlists by language
// - language === 'all' => mood-based recommendations
// - specific language (tamil/hindi/english) => show ALL songs in that language
export const getPlaylistsByLanguage = (mood: Mood, language: Language): Playlist[] => {
  if (language === 'all') {
    return moodPlaylists[mood] || [];
  }

  const allPlaylists = Object.values(moodPlaylists).flat();
  return allPlaylists.filter((p) => p.language === language);
};
