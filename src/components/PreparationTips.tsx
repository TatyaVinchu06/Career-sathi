import React from 'react';
import { additionalTips } from '../data/roadmaps';
import { Dumbbell, BookOpen, Heart, CheckCircle } from 'lucide-react';

export default function PreparationTips() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8 animate-slideUp" style={{ animationDelay: '0.3s' }}>
      {/* Physical Preparation */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover-lift group">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-100 p-2 rounded-lg group-hover:bg-red-200 group-hover:scale-110 transition-all duration-300">
            <Dumbbell className="w-5 h-5 text-red-600" />
          </div>
          <h3 className="font-bold text-gray-800">Physical Preparation</h3>
        </div>
        <ul className="space-y-3">
          {additionalTips.physical.map((tip, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Academic Preparation */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover-lift group" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
            <BookOpen className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="font-bold text-gray-800">Academic Preparation</h3>
        </div>
        <ul className="space-y-3">
          {additionalTips.academic.map((tip, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Personal Development */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover-lift group" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-purple-100 p-2 rounded-lg group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
            <Heart className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="font-bold text-gray-800">Personal Development</h3>
        </div>
        <ul className="space-y-3">
          {additionalTips.personal.map((tip, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}