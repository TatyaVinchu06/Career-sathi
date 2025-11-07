import React, { useState } from 'react';
import { StudentProfile } from '../types';
import { User, BookOpen, Heart, Briefcase, ChevronRight } from 'lucide-react';

interface StudentFormProps {
  onSubmit: (profile: StudentProfile) => void;
  onShowRoadmap: () => void;
}

const StudentForm: React.FC<StudentFormProps> = ({ onSubmit, onShowRoadmap }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [profile, setProfile] = useState<StudentProfile>({
    qualifications: '',
    stream: '',
    interests: [],
    qualificationLevel: '',
    careerPreference: ''
  });

  const qualificationOptions = [
    '10th Standard',
    '12th Standard - Science (PCM)',
    '12th Standard - Science (PCB)', 
    '12th Standard - Commerce',
    '12th Standard - Arts/Humanities',
    'Undergraduate (Bachelor\'s)',
    'Postgraduate (Master\'s)',
    'Professional Course (CA/CS/CMA)',
    'Diploma/ITI'
  ];

  const streamOptions = [
    'Computer Science',
    'Information Technology', 
    'Electronics & Communication',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electrical Engineering',
    'Chemical Engineering',
    'Commerce & Accounting',
    'Business Studies',
    'Economics',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology/Life Sciences',
    'Medical Science',
    'Arts & Humanities',
    'Political Science',
    'History',
    'Psychology',
    'Mass Communication',
    'Fine Arts',
    'Agriculture',
    'Law'
  ];

  const interestOptions = [
    'coding', 'technology', 'artificial-intelligence', 'data-science', 'cybersecurity',
    'finance', 'accounting', 'business', 'entrepreneurship', 'investing', 'economics',
    'healthcare', 'helping-others', 'medical-science', 'research', 'psychology',
    'teaching', 'education', 'mentoring', 'knowledge-sharing', 'online-learning',
    'public-service', 'governance', 'leadership', 'social-work', 'ngo', 'policy-making',
    'creativity', 'design', 'art', 'writing', 'photography', 'graphic-design', 'fashion',
    'engineering', 'problem-solving', 'innovation', 'building', 'architecture', 'robotics',
    'marketing', 'communication', 'social-media', 'branding', 'digital-marketing', 'content-creation',
    'gaming', 'entertainment', 'video-making', 'streaming', 'esports',
    'environment', 'sustainability', 'agriculture', 'renewable-energy', 'climate-change',
    'sports', 'fitness', 'travel', 'adventure', 'music', 'dance', 'acting',
    'law', 'justice', 'human-rights', 'criminology',
    'journalism', 'media', 'reporting', 'broadcasting',
    'aviation', 'pilot', 'aerospace', 'defense',
    'culinary', 'cooking', 'hotel-management', 'tourism'
  ];

  const careerPreferenceOptions = [
    'Government Job (Stability & Security)',
    'Private Sector (Growth & Innovation)', 
    'Entrepreneurship (Own Business)',
    'Freelancing (Flexibility)',
    'Research & Academia',
    'Social Service (NGO/Non-profit)',
    'International Opportunities',
    'Remote Work',
    'No Preference'
  ];

  const handleInterestToggle = (interest: string) => {
    setProfile(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {  // Changed from 4 to 3 since we removed one step
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    onSubmit(profile);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return profile.qualifications && profile.stream;
      case 2:
        return profile.interests.length >= 3;
      case 3:
        return profile.careerPreference;
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <User className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Educational Background</h3>
              </div>
              <p className="text-gray-300">Tell us about your current education level and stream</p>
            </div>

            <div>
              <label className="block text-white font-semibold mb-3">Current Qualification Level</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {qualificationOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setProfile(prev => ({ ...prev, qualifications: option }))}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                      profile.qualifications === option
                        ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                        : 'border-gray-600 bg-gray-800/30 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-3">Academic Stream/Field</label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {streamOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setProfile(prev => ({ ...prev, stream: option }))}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 text-left ${
                      profile.stream === option
                        ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                        : 'border-gray-600 bg-gray-800/30 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="w-8 h-8 text-pink-400" />
                <h3 className="text-2xl font-bold text-white">Interests & Passions</h3>
              </div>
              <p className="text-gray-300">Select at least 3 areas that genuinely interest you</p>
              <p className="text-sm text-blue-400 mt-2">Selected: {profile.interests.length}/∞</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {interestOptions.map((interest) => (
                <button
                  key={interest}
                  onClick={() => handleInterestToggle(interest)}
                  className={`p-3 rounded-lg border-2 transition-all duration-300 text-center capitalize ${
                    profile.interests.includes(interest)
                      ? 'border-pink-500 bg-pink-500/20 text-pink-300 scale-105'
                      : 'border-gray-600 bg-gray-800/30 text-gray-300 hover:border-gray-500 hover:scale-105'
                  }`}
                >
                  {interest.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Briefcase className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Career Preferences</h3>
              </div>
              <p className="text-gray-300">What type of career environment appeals to you most?</p>
            </div>

            <div className="space-y-4">
              {careerPreferenceOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setProfile(prev => ({ ...prev, careerPreference: option }))}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                    profile.careerPreference === option
                      ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                      : 'border-gray-600 bg-gray-800/30 text-gray-300 hover:border-gray-500'
                  }`}
                >
                  <div className="font-semibold">{option.split(' (')[0]}</div>
                  {option.includes('(') && (
                    <div className="text-sm opacity-75 mt-1">
                      {option.split('(')[1].replace(')', '')}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-400">Step {currentStep} of 3</span>
          <span className="text-sm text-gray-400">{Math.round((currentStep / 3) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Form Content */}
      <div className="min-h-[500px]">
        {renderStep()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-700">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            currentStep === 1
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-gray-600 text-white hover:bg-gray-500'
          }`}
        >
          Previous
        </button>

        <div className="flex gap-3">
          <button
            onClick={onShowRoadmap}
            className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
          >
            🎯 Defense Career Guide
          </button>

          {currentStep < 3 ? ( // Changed from 4 to 3 since we removed one step
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                isStepValid()
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:shadow-lg'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
              }`}
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isStepValid()}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                isStepValid()
                  ? 'bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white hover:shadow-lg hover:shadow-green-500/25'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
              }`}
            >
              🚀 Get My Career Recommendations
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentForm;