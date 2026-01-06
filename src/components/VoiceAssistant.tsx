import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useVoiceAssistant } from '@/hooks/useVoiceAssistant';
import { Mood, moodEmojis } from '@/types/mood';

interface VoiceAssistantProps {
  onMoodDetected?: (mood: Mood) => void;
}

const allMoods: Mood[] = ['happy', 'sad', 'stressed', 'calm', 'energetic', 'anxious', 'excited', 'tired', 'focused', 'romantic', 'angry', 'bored', 'hopeful', 'nostalgic'];

export function VoiceAssistant({ onMoodDetected }: VoiceAssistantProps) {
  const {
    isListening,
    transcript,
    isSpeaking,
    error,
    startListening,
    stopListening,
  } = useVoiceAssistant(onMoodDetected);

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center gap-6">
        <motion.div
          className="relative"
          animate={isListening ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {/* Pulsing rings when listening */}
          <AnimatePresence>
            {isListening && (
              <>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-primary/30"
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.3, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  className="absolute inset-0 rounded-full bg-primary/40"
                />
              </>
            )}
          </AnimatePresence>

          <Button
            onClick={isListening ? stopListening : startListening}
            size="lg"
            className={`relative w-24 h-24 rounded-full transition-all duration-300 ${
              isListening
                ? 'bg-primary shadow-lg shadow-primary/50'
                : 'bg-gradient-to-br from-primary to-secondary'
            }`}
          >
            {isListening ? (
              <MicOff className="w-10 h-10" />
            ) : (
              <Mic className="w-10 h-10" />
            )}
          </Button>
        </motion.div>

        <div className="text-center">
          <p className="text-lg font-medium">
            {isListening ? 'Listening...' : 'Tap to speak'}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Tell me how you're feeling — happy, sad, stressed, excited, and more!
          </p>
        </div>

        {isSpeaking && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-full"
          >
            <Volume2 className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-medium">Speaking...</span>
          </motion.div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {transcript && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-card p-4"
          >
            <p className="text-sm text-muted-foreground mb-1">You said:</p>
            <p className="text-lg font-medium">{transcript}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-destructive/20 text-destructive px-4 py-3 rounded-xl text-sm text-center"
        >
          {error}
        </motion.div>
      )}

      <div className="glass-card p-4 space-y-4">
        <h4 className="font-semibold text-sm">Voice Commands — Say how you feel!</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
          {allMoods.map((mood) => (
            <motion.div 
              key={mood}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2"
            >
              <span className="text-lg">{moodEmojis[mood]}</span>
              <span className="text-muted-foreground capitalize">{mood}</span>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-4">
          Try saying: "I feel happy", "I'm stressed", "Play calm music", "I'm feeling nostalgic"
        </p>
      </div>
    </div>
  );
}
