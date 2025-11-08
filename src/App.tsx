import React, { useState } from 'react';
import { StudentProfile, CareerSuggestion } from './types';
import { getCareerSuggestions } from './components/careerMatcher';
import { policeArmyRoadmap } from './data/roadmaps';
import RoadmapTable from './components/RoadmapTable';
import PreparationTips from './components/PreparationTips';
import InteractiveBackground from './components/InteractiveBackground';
import ExpertInsightsPage from './components/expert-insights/ExpertInsightsPage';
import { Chatbot } from '../chatbot';
import { Compass, Star, MessageSquare, Target, Shield } from 'lucide-react';
import StudentForm from './components/StudentForm';
import CareerResults from './components/CareerResults';

function App() {
  const [currentStep, setCurrentStep] = useState<'home' | 'form' | 'results' | 'roadmap' | 'expert-insights' | 'feedback'>('home');
  const [careerSuggestions, setCareerSuggestions] = useState<CareerSuggestion[]>([]);

  const handleFormSubmit = (profile: StudentProfile) => {
    const suggestions = getCareerSuggestions(profile);
    setCareerSuggestions(suggestions);
    setCurrentStep('results');
  };

  const handleBack = () => {
    setCurrentStep('home');
    setCareerSuggestions([]);
  };

  const handleBackToHome = () => setCurrentStep('home');
  const handleShowRoadmap = () => setCurrentStep('roadmap');
  const handleFeedback = () => window.open('https://forms.gle/vmsAgNUULiYgG8sC7', '_blank');
  const handleStartAssessment = () => setCurrentStep('form');
  const handleDefenseGuide = () => setCurrentStep('roadmap'); // Using existing roadmap for defense

  return (
    <div className="min-h-screen relative overflow-hidden">
      <InteractiveBackground />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {/* Main Content - Only render one home section */}
        {currentStep === 'home' && (
          <div className="relative overflow-hidden">
            {/* Enhanced Header - Clean Navigation Bar */}
            <div className="text-center mb-16 slide-up">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 rounded-full blur-2xl opacity-75 pulse-slow"></div>
                  <div className="relative bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 p-6 rounded-full neon-glow rotate-hover">
                    <Compass className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-7xl font-bold gradient-text mb-3">Career Compass</h1>
                  <div className="flex items-center justify-center gap-3">
                    <Star className="w-6 h-6 text-yellow-400 floating-animation" />
                    <span className="text-2xl text-gray-300 font-medium">Career Discovery for Indian Students</span>
                    <Star className="w-6 h-6 text-yellow-400 floating-animation" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Master the right skills to unlock your dream career.
              </p>
            </div>

            {/* Floating elements */}
            <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-16 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-16 left-20 w-20 h-20 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 right-24 w-12 h-12 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>

            {/* New Hero Section */}
            <div className="relative bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-16 neon-glow scale-hover slide-up border border-gray-700/50" style={{ animationDelay: '0.3s' }}>
              <div className="text-center">
                {/* Animated gradient text for main heading */}
                <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-violet-300 bg-clip-text text-transparent animate-pulse">
                    Master new <span className="text-orange-400">skills</span> to discover your perfect <span className="text-green-400">career</span>.
                  </span>
                </h2>
                
                <p className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                  Whether you're just starting your journey or planning your next step, Career Compass helps you unlock the best path forward with personalized AI career guidance.
                </p>

                {/* CTA Buttons - Added Defense Career Guide */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                  <button 
                    onClick={handleStartAssessment}
                    className="relative overflow-hidden bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white py-6 px-10 rounded-2xl font-bold text-2xl hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-2xl group"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <Target className="w-7 h-7" />
                      Get Started
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button 
                    onClick={handleDefenseGuide}
                    className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-6 px-10 rounded-2xl font-bold text-2xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl group"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <Shield className="w-7 h-7" />
                      Defense Guide
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>

                {/* Smaller Motivational Quotes Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-16">
                  <div className="bg-gradient-to-br from-blue-600/20 to-violet-700/20 rounded-xl p-4 border border-blue-500/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                    <div className="text-left">
                      <p className="text-lg font-bold text-white italic mb-2">"The future belongs to those who believe in the beauty of their dreams."</p>
                      <p className="text-blue-300 text-sm font-semibold">- Eleanor Roosevelt</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl p-4 border border-orange-500/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                    <div className="text-left">
                      <p className="text-lg font-bold text-white italic mb-2">"Success is not final, failure is not fatal: it is the courage to continue that counts."</p>
                      <p className="text-orange-300 text-sm font-semibold">- Winston Churchill</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/20 to-teal-600/20 rounded-xl p-4 border border-green-500/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                    <div className="text-left">
                      <p className="text-lg font-bold text-white italic mb-2">"Your time is limited, don't waste it living someone else's life."</p>
                      <p className="text-green-300 text-sm font-semibold">- Steve Jobs</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl p-4 border border-purple-500/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                    <div className="text-left">
                      <p className="text-lg font-bold text-white italic mb-2">"The only way to do great work is to love what you do."</p>
                      <p className="text-purple-300 text-sm font-semibold">- Steve Jobs</p>
                    </div>
                  </div>
                </div>

                {/* Feedback Card Only - Removed Expert Insights */}
                <div className="flex justify-center max-w-2xl mx-auto">
                  <div 
                    onClick={handleFeedback}
                    className="bg-gradient-to-br from-cyan-600/20 to-blue-700/20 rounded-2xl p-6 border border-cyan-500/30 backdrop-blur-sm cursor-pointer transform hover:scale-105 transition-all duration-300 w-full"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Share Feedback</h3>
                    </div>
                    <p className="text-gray-300 mb-4">Help us improve by sharing your experience with Career Compass</p>
                    <button className="text-cyan-300 font-semibold hover:text-cyan-200 transition-colors">
                      Give Feedback →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-16 fade-in" style={{ animationDelay: '1s' }}>
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 backdrop-blur-sm border border-blue-500/20">
                <p className="text-gray-300 text-lg font-medium mb-2">🌟 Empowering Indian Students to Make Informed Career Decisions</p>
                <p className="text-gray-400 text-sm">Your future starts with the right guidance • Made with ❤️ for Indian Students</p>
              </div>
            </div>
          </div>
        )}

        {currentStep === 'form' && (
          <div className="bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-slate-900/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 neon-glow scale-hover slide-up border border-gray-700/50" style={{ animationDelay: '0.3s' }}>
            <div>
              <div className="text-center mb-8">
                <button onClick={handleBack} className="mb-6 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 mx-auto backdrop-blur-sm border border-gray-600/30">← Back to Home</button>
                <h2 className="text-4xl font-bold text-white mb-4">Tell Us About Your Journey</h2>
                <p className="text-gray-300 text-lg">Share your background and aspirations to receive tailored career guidance designed for Indian students</p>
              </div>
              <StudentForm onSubmit={handleFormSubmit} onShowRoadmap={handleShowRoadmap} />
            </div>
          </div>
        )}

        {currentStep === 'results' && (
          <div className="bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-slate-900/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 neon-glow scale-hover slide-up border border-gray-700/50" style={{ animationDelay: '0.3s' }}>
            <CareerResults careers={careerSuggestions} onBack={handleBack} />
          </div>
        )}

        {currentStep === 'roadmap' && (
          <div className="bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-slate-900/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 neon-glow scale-hover slide-up border border-gray-700/50" style={{ animationDelay: '0.3s' }}>
            <div>
              <RoadmapTable roadmap={policeArmyRoadmap} />
              <PreparationTips />
              <div className="mt-12 text-center">
                <button onClick={handleBack} className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 px-12 rounded-2xl font-bold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl neon-glow shimmer">← Back to Career Assessment</button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 'expert-insights' && (
          <div className="bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-slate-900/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 neon-glow scale-hover slide-up border border-gray-700/50" style={{ animationDelay: '0.3s' }}>
            <ExpertInsightsPage onBack={handleBackToHome} />
          </div>
        )}
      </div>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}

export default App;