import React from 'react';
import { Star, Sparkles, Zap, Compass, Target, Book, Laptop, Backpack } from 'lucide-react';

export default function InteractiveBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* New Animated Gradient Background with dark blue, violet, and electric cyan */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-violet-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/30 via-transparent to-violet-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>
        
        {/* Soft glowing patterns or grid overlays */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-10 floating-animation opacity-30">
        <Star className="w-8 h-8 text-cyan-400" />
      </div>
      <div className="absolute top-40 right-20 floating-animation opacity-25" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-10 h-10 text-violet-400" />
      </div>
      <div className="absolute bottom-32 left-20 floating-animation opacity-35" style={{ animationDelay: '4s' }}>
        <Zap className="w-6 h-6 text-orange-400" />
      </div>
      <div className="absolute top-60 left-1/2 floating-animation opacity-30" style={{ animationDelay: '1s' }}>
        <Compass className="w-7 h-7 text-cyan-300" />
      </div>
      <div className="absolute bottom-20 right-10 floating-animation opacity-25" style={{ animationDelay: '3s' }}>
        <Target className="w-8 h-8 text-indigo-400" />
      </div>
      
      {/* Animated floating shapes */}
      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-orange-400 rounded-full floating-animation opacity-40" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-green-400 rotate-45 floating-animation opacity-30" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full floating-animation opacity-50" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/4 right-1/4 w-5 h-5 bg-pink-400 floating-animation opacity-40" style={{ animationDelay: '4.5s' }}></div>
      
      {/* Large Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-full blur-3xl pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl pulse-slow" style={{ animationDelay: '4s' }}></div>
    </div>
  );
}