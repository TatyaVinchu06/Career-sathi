import React, { useState } from 'react';
import { StudentProfile, CareerSuggestion } from './types';
import { getCareerSuggestions } from './components/careerMatcher';
import { policeArmyRoadmap } from './data/roadmaps';
import RoadmapTable from './components/RoadmapTable';
import PreparationTips from './components/PreparationTips';
import InteractiveBackground from './components/InteractiveBackground';
import FeatureButtons from './components/FeatureButtons';
import ExpertInsightsPage from './components/expert-insights/ExpertInsightsPage';
import { Chatbot } from '../chatbot';
import { Compass, Sparkles } from 'lucide-react';
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
  const handleExpertInsights = () => setCurrentStep('expert-insights');
  const handleFeedback = () => window.open('https://forms.gle/vmsAgNUULiYgG8sC7', '_blank');
  const handleStartAssessment = () => setCurrentStep('form');

  return (
    <div className="min-h-screen relative overflow-hidden">
      <InteractiveBackground />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {/* Enhanced Header */}
        <div className="text-center mb-16 slide-up">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-75 pulse-slow"></div>
              <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6 rounded-full neon-glow rotate-hover">
                <Compass className="w-12 h-12 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-7xl font-bold gradient-text mb-3">Career Compass</h1>
              <div className="flex items-center justify-center gap-3">
                <Sparkles className="w-6 h-6 text-yellow-400 floating-animation" />
                <span className="text-2xl text-gray-300 font-medium">Career Discovery for Indian Students</span>
                <Sparkles className="w-6 h-6 text-yellow-400 floating-animation" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            🚀 Discover your perfect career path with our advanced system designed specifically for Indian students. Get personalized recommendations with entrance exam guidance.
          </p>

          {currentStep === 'home' && (
            <FeatureButtons onExpertInsights={handleExpertInsights} onFeedback={handleFeedback} />
          )}
        </div>

        {/* Main Content */}
        {currentStep === 'home' && (
          <div className="relative overflow-hidden">
            <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-16 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-16 left-20 w-20 h-20 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 right-24 w-12 h-12 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>

            <div className="relative bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-16 neon-glow scale-hover slide-up border border-gray-700/50" style={{ animationDelay: '0.3s' }}>
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Ready to Discover Your Perfect Career?</h2>
                <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">Take our comprehensive AI-powered assessment to get personalized career recommendations with detailed information about:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30">
                    <h3 className="text-xl font-bold text-blue-300 mb-2">📚 Complete Academic Guidance</h3>
                    <p className="text-gray-300">Top colleges, entrance exams, eligibility criteria, and course duration</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-xl p-6 border border-green-500/30">
                    <h3 className="text-xl font-bold text-green-300 mb-2">💰 Salary & Opportunities</h3>
                    <p className="text-gray-300">Realistic salary ranges, government vs private sector opportunities</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30">
                    <h3 className="text-xl font-bold text-purple-300 mb-2">🎯 Personalized Matching</h3>
                    <p className="text-gray-300">AI-powered recommendations based on interests and background</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-orange-500/30">
                    <h3 className="text-xl font-bold text-orange-300 mb-2">🚀 Future-Ready Careers</h3>
                    <p className="text-gray-300">Emerging fields, future scope, and industry growth prospects</p>
                  </div>
                </div>

                <button onClick={handleStartAssessment} className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-6 px-16 rounded-2xl font-bold text-2xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl neon-glow group">
                  <span className="relative z-10">🚀 Start Your Career Journey</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
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

        {currentStep === 'home' && (
          <div className="text-center mt-16 fade-in" style={{ animationDelay: '1s' }}>
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 backdrop-blur-sm border border-blue-500/20">
              <p className="text-gray-300 text-lg font-medium mb-2">🌟 Empowering Indian Students to Make Informed Career Decisions</p>
              <p className="text-gray-400 text-sm">Your future starts with the right guidance • Made with ❤️ for Indian Students</p>
            </div>
          </div>
        )}
      </div>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}

export default App;