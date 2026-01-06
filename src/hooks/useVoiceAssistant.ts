import { useState, useCallback, useRef, useEffect } from 'react';
import { Mood } from '@/types/mood';

interface VoiceAssistantState {
  isListening: boolean;
  transcript: string;
  isSpeaking: boolean;
  error: string | null;
}

// Voice responses for each mood
const moodVoiceResponses: Record<Mood, string> = {
  happy: "That's wonderful! I can hear the joy in your voice. Let me find some uplifting music to keep those good vibes going!",
  sad: "I understand you're feeling down. Don't worry, I'm here for you. Let me find some comforting music to lift your spirits.",
  stressed: "I can sense you're stressed. Take a deep breath. Let me find some calming music to help you relax.",
  calm: "You sound peaceful and centered. Let me find some ambient music to maintain your tranquility.",
  energetic: "Wow, you're full of energy! Let me find some high-energy tracks to match your vibe!",
  anxious: "I hear you're feeling anxious. It's okay, let me find some soothing music to calm your nerves.",
  excited: "Your excitement is contagious! Let me find some celebration music for you!",
  tired: "I understand you're feeling tired. Let me find some gentle, relaxing music to help you rest.",
  focused: "You're in the zone! Let me find some concentration music to help you stay productive.",
  romantic: "Feeling romantic today? Let me set the perfect mood with some love songs.",
  angry: "I can hear your frustration. Let me find some music to help you release that energy constructively.",
  bored: "Feeling bored? Let me find something exciting to spark your interest!",
  hopeful: "Your optimism is inspiring! Let me find some uplifting tracks to fuel your hope.",
  nostalgic: "Taking a trip down memory lane? Let me find some timeless classics for you.",
};

export function useVoiceAssistant(onMoodDetected?: (mood: Mood) => void) {
  const [state, setState] = useState<VoiceAssistantState>({
    isListening: false,
    transcript: '',
    isSpeaking: false,
    error: null,
  });
  
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      synthRef.current = window.speechSynthesis;
      
      const SpeechRecognitionAPI = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognitionAPI) {
        recognitionRef.current = new SpeechRecognitionAPI();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = 'en-US';
      }
    }
  }, []);

  // Comprehensive mood keywords for all 14 emotions
  const moodKeywords: Record<string, Mood> = {
    // Happy keywords
    'happy': 'happy',
    'joyful': 'happy',
    'excited': 'happy',
    'great': 'happy',
    'amazing': 'happy',
    'good': 'happy',
    'wonderful': 'happy',
    'fantastic': 'happy',
    'cheerful': 'happy',
    'delighted': 'happy',
    'pleased': 'happy',
    'content': 'happy',
    
    // Sad keywords
    'sad': 'sad',
    'down': 'sad',
    'depressed': 'sad',
    'unhappy': 'sad',
    'blue': 'sad',
    'gloomy': 'sad',
    'miserable': 'sad',
    'heartbroken': 'sad',
    'upset': 'sad',
    'crying': 'sad',
    'tears': 'sad',
    
    // Stressed keywords
    'stressed': 'stressed',
    'pressure': 'stressed',
    'overwhelmed': 'stressed',
    'tense': 'stressed',
    'strain': 'stressed',
    'burden': 'stressed',
    'overworked': 'stressed',
    
    // Calm keywords
    'calm': 'calm',
    'relaxed': 'calm',
    'peaceful': 'calm',
    'serene': 'calm',
    'tranquil': 'calm',
    'mellow': 'calm',
    'zen': 'calm',
    'chill': 'calm',
    
    // Energetic keywords
    'energetic': 'energetic',
    'pumped': 'energetic',
    'motivated': 'energetic',
    'active': 'energetic',
    'workout': 'energetic',
    'dynamic': 'energetic',
    'hyper': 'energetic',
    'lively': 'energetic',
    'vibrant': 'energetic',
    
    // Anxious keywords
    'anxious': 'anxious',
    'worried': 'anxious',
    'nervous': 'anxious',
    'uneasy': 'anxious',
    'fearful': 'anxious',
    'panic': 'anxious',
    'restless': 'anxious',
    'apprehensive': 'anxious',
    
    // Excited keywords
    'thrilled': 'excited',
    'elated': 'excited',
    'enthusiastic': 'excited',
    'eager': 'excited',
    'pumped up': 'excited',
    'stoked': 'excited',
    'ecstatic': 'excited',
    'hyped': 'excited',
    
    // Tired keywords
    'tired': 'tired',
    'exhausted': 'tired',
    'sleepy': 'tired',
    'fatigued': 'tired',
    'drained': 'tired',
    'weary': 'tired',
    'drowsy': 'tired',
    'worn out': 'tired',
    
    // Focused keywords
    'focused': 'focused',
    'concentrated': 'focused',
    'productive': 'focused',
    'determined': 'focused',
    'attentive': 'focused',
    'studying': 'focused',
    'working': 'focused',
    
    // Romantic keywords
    'romantic': 'romantic',
    'love': 'romantic',
    'loving': 'romantic',
    'passionate': 'romantic',
    'affectionate': 'romantic',
    'tender': 'romantic',
    'in love': 'romantic',
    
    // Angry keywords
    'angry': 'angry',
    'mad': 'angry',
    'furious': 'angry',
    'irritated': 'angry',
    'annoyed': 'angry',
    'frustrated': 'angry',
    'rage': 'angry',
    'pissed': 'angry',
    'livid': 'angry',
    'enraged': 'angry',
    
    // Bored keywords
    'bored': 'bored',
    'boring': 'bored',
    'dull': 'bored',
    'uninterested': 'bored',
    'monotonous': 'bored',
    'nothing to do': 'bored',
    
    // Hopeful keywords
    'hopeful': 'hopeful',
    'optimistic': 'hopeful',
    'positive': 'hopeful',
    'confident': 'hopeful',
    'encouraged': 'hopeful',
    'inspired': 'hopeful',
    'aspirational': 'hopeful',
    
    // Nostalgic keywords
    'nostalgic': 'nostalgic',
    'memories': 'nostalgic',
    'reminiscing': 'nostalgic',
    'missing': 'nostalgic',
    'old times': 'nostalgic',
    'past': 'nostalgic',
    'remember': 'nostalgic',
    'throwback': 'nostalgic',
  };

  const parseMoodFromText = (text: string): Mood | null => {
    const lowerText = text.toLowerCase();
    
    for (const [keyword, mood] of Object.entries(moodKeywords)) {
      if (lowerText.includes(keyword)) {
        return mood;
      }
    }
    return null;
  };

  const speak = useCallback((text: string) => {
    if (!synthRef.current) return;

    // Cancel any ongoing speech
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    // Try to get a more natural voice
    const voices = synthRef.current.getVoices();
    const preferredVoice = voices.find(v => v.name.includes('Google') || v.name.includes('Natural')) || voices[0];
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }
    
    utterance.onstart = () => {
      setState(prev => ({ ...prev, isSpeaking: true }));
    };
    
    utterance.onend = () => {
      setState(prev => ({ ...prev, isSpeaking: false }));
    };

    synthRef.current.speak(utterance);
  }, []);

  const startListening = useCallback(() => {
    if (!recognitionRef.current) {
      setState(prev => ({
        ...prev,
        error: 'Speech recognition not supported in this browser',
      }));
      return;
    }

    setState(prev => ({ ...prev, isListening: true, transcript: '', error: null }));

    recognitionRef.current.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0].transcript)
        .join('');
      
      setState(prev => ({ ...prev, transcript }));

      // Check if we can detect a mood
      const detectedMood = parseMoodFromText(transcript);
      if (detectedMood && event.results[0].isFinal) {
        onMoodDetected?.(detectedMood);
        // Use the custom voice response for the detected mood
        speak(moodVoiceResponses[detectedMood]);
      }
    };

    recognitionRef.current.onerror = (event: any) => {
      setState(prev => ({
        ...prev,
        isListening: false,
        error: event.error === 'no-speech' ? 'No speech detected. Please try again.' : 'Error occurred during speech recognition.',
      }));
    };

    recognitionRef.current.onend = () => {
      setState(prev => ({ ...prev, isListening: false }));
    };

    recognitionRef.current.start();
  }, [onMoodDetected, speak]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setState(prev => ({ ...prev, isListening: false }));
  }, []);

  return {
    ...state,
    startListening,
    stopListening,
    speak,
  };
}

// Web Speech API types handled inline with 'any' for cross-browser compatibility
