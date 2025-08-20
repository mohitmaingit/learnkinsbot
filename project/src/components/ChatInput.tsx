import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Sparkles } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled = false }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  return (
    <div className="border-t border-gray-700/60 bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-md shadow-2xl">
      <form onSubmit={handleSubmit} className="p-6">
        <div className="flex items-end space-x-4 max-w-4xl mx-auto">
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={disabled ? "LearnerBot is thinking..." : "Ask me anything... I'm here to help you learn! 🚀"}
              disabled={disabled}
              rows={1}
              className="w-full px-5 py-4 bg-gray-800/95 border border-gray-600/60 rounded-2xl text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:border-purple-400/60 resize-none min-h-[56px] max-h-36 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg backdrop-blur-sm hover:bg-gray-800 focus:bg-gray-800"
            />
            {message.trim() && (
              <div className="absolute bottom-3 right-3 text-xs text-gray-500 bg-gray-900/80 px-2 py-1 rounded">
                Shift + Enter for new line
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={!message.trim() || disabled}
            className="w-14 h-14 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-400 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-110 disabled:hover:scale-100 disabled:hover:shadow-none relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            {disabled ? (
              <Loader2 className="w-6 h-6 animate-spin relative z-10" />
            ) : (
              <div className="relative z-10 flex items-center justify-center">
                <Send className="w-6 h-6" />
                <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;