import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Chatbot() {
  const handleChatClick = () => {
    window.open('https://career-sathi.zapier.app/chat', '_blank');
  };

  return (
    <button
      onClick={handleChatClick}
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-2xl transition-all duration-500 z-50 flex items-center justify-center group bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-125 floating-animation neon-glow"
    >
      <div className="relative">
        <MessageCircle className="w-7 h-7 text-white" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
      </div>
    </button>
  );
}
