import React, { useEffect, useState } from 'react';
import { Star, Sparkles, Zap, Compass, Target } from 'lucide-react';

export default function InteractiveBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-10 floating-animation opacity-30">
        <Star className="w-8 h-8 text-blue-400" />
      </div>
      <div className="absolute top-40 right-20 floating-animation opacity-25" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-10 h-10 text-purple-400" />
      </div>
      <div className="absolute bottom-32 left-20 floating-animation opacity-35" style={{ animationDelay: '4s' }}>
        <Zap className="w-6 h-6 text-pink-400" />
      </div>
      <div className="absolute top-60 left-1/2 floating-animation opacity-30" style={{ animationDelay: '1s' }}>
        <Compass className="w-7 h-7 text-cyan-400" />
      </div>
      <div className="absolute bottom-20 right-10 floating-animation opacity-25" style={{ animationDelay: '3s' }}>
        <Target className="w-8 h-8 text-indigo-400" />
      </div>
      
      {/* Large Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl pulse-slow" style={{ animationDelay: '4s' }}></div>
    </div>
  );
}