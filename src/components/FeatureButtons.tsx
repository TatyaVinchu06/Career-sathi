import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

interface FeatureButtonsProps {
  onExpertInsights: () => void;
  onFeedback: () => void;
}

export default function FeatureButtons({ onExpertInsights, onFeedback }: FeatureButtonsProps) {
  return (
    <div className="flex items-center justify-center gap-6 text-gray-400 mb-12">
      <button
        onClick={onExpertInsights}
        className="flex items-center gap-3 glass-morphism px-6 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
      >
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-2 rounded-xl group-hover:scale-105 transition-transform duration-300 overflow-hidden">
          <Star className="w-5 h-5 text-white" />
        </div>
        <span className="text-lg font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300">
          Expert Insights
        </span>
      </button>

      <button
        onClick={onFeedback}
        className="flex items-center gap-3 glass-morphism px-6 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
      >
        <div className="bg-gradient-to-r from-green-400 to-emerald-400 p-2 rounded-xl group-hover:scale-105 transition-transform duration-300 overflow-hidden">
          <MessageSquare className="w-5 h-5 text-white" />
        </div>
        <span className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
          Feedback
        </span>
      </button>
    </div>
  );
}