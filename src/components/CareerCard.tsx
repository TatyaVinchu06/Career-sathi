import React, { useState } from 'react';
import { CareerSuggestion } from '../types';
import { 
  GraduationCap, 
  Building2, 
  TrendingUp, 
  MapPin, 
  Clock, 
  DollarSign,
  BookOpen,
  Users,
  Award,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';

interface CareerCardProps {
  career: CareerSuggestion;
  index: number;
}

const CareerCard: React.FC<CareerCardProps> = ({ career, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getMatchColor = (score: number) => {
    if (score >= 80) return 'from-green-500 to-emerald-600';
    if (score >= 60) return 'from-blue-500 to-cyan-600';
    if (score >= 40) return 'from-yellow-500 to-orange-600';
    return 'from-red-500 to-pink-600';
  };

  const getMatchText = (score: number) => {
    if (score >= 80) return 'Excellent Match';
    if (score >= 60) return 'Good Match';
    if (score >= 40) return 'Fair Match';
    return 'Consider Exploring';
  };

  return (
    <div 
      className="bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-purple-500/20 group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header Section */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              {career.title}
            </h3>
            <div className="flex items-center gap-2 mb-3">
              <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getMatchColor(career.matchScore)} text-white text-sm font-semibold`}>
                {career.matchScore}% {getMatchText(career.matchScore)}
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-300 text-base leading-relaxed mb-4">
          {career.description}
        </p>

        {/* Key Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
            <DollarSign className="w-5 h-5 text-green-400" />
            <div>
              <p className="text-gray-400 text-sm">Salary Range</p>
              <p className="text-white font-semibold">{career.salaryRange}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
            <Clock className="w-5 h-5 text-blue-400" />
            <div>
              <p className="text-gray-400 text-sm">Duration</p>
              <p className="text-white font-semibold">{career.courseDuration}</p>
            </div>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="mb-4">
          <p className="text-gray-400 text-sm mb-2">Key Skills Required:</p>
          <div className="flex flex-wrap gap-2">
            {career.requiredSkills.slice(0, 4).map((skill, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
              >
                {skill}
              </span>
            ))}
            {career.requiredSkills.length > 4 && (
              <span className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded-full text-sm">
                +{career.requiredSkills.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/30 hover:to-blue-600/30 rounded-lg border border-purple-500/30 text-purple-300 hover:text-white transition-all duration-300"
        >
          {isExpanded ? 'Show Less' : 'View Complete Details'}
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-700/50">
          <div className="pt-6 space-y-6">
            
            {/* Top Colleges */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <h4 className="text-lg font-semibold text-white">Top Colleges</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {career.topColleges.slice(0, 6).map((college, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-gray-800/30 rounded-lg p-3">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">{college}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Entrance Exams */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-green-400" />
                <h4 className="text-lg font-semibold text-white">Entrance Exams</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {career.entranceExams.map((exam, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-2 bg-green-600/20 text-green-300 rounded-lg text-sm border border-green-500/30 hover:bg-green-600/30 transition-colors cursor-pointer"
                  >
                    {exam}
                  </span>
                ))}
              </div>
            </div>

            {/* Job Opportunities */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-purple-400" />
                <h4 className="text-lg font-semibold text-white">Career Opportunities</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {career.governmentOpportunities && career.governmentOpportunities.length > 0 && (
                  <div>
                    <p className="text-blue-400 font-medium mb-2">🏛️ Government Sector</p>
                    <div className="space-y-1">
                      {career.governmentOpportunities.slice(0, 4).map((opp, idx) => (
                        <p key={idx} className="text-gray-300 text-sm">• {opp}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {career.privateOpportunities && career.privateOpportunities.length > 0 && (
                  <div>
                    <p className="text-green-400 font-medium mb-2">🏢 Private Sector</p>
                    <div className="space-y-1">
                      {career.privateOpportunities.slice(0, 4).map((opp, idx) => (
                        <p key={idx} className="text-gray-300 text-sm">• {opp}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Eligibility & Future Scope */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <h4 className="text-lg font-semibold text-white">Eligibility</h4>
                </div>
                <p className="text-gray-300 text-sm bg-gray-800/30 rounded-lg p-3">
                  {career.eligibility}
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-lg font-semibold text-white">Future Scope</h4>
                </div>
                <p className="text-gray-300 text-sm bg-gray-800/30 rounded-lg p-3">
                  {career.futureScope}
                </p>
              </div>
            </div>

            {/* Work Environment */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-5 h-5 text-indigo-400" />
                <h4 className="text-lg font-semibold text-white">Work Environment</h4>
              </div>
              <p className="text-gray-300 text-sm bg-gray-800/30 rounded-lg p-3">
                {career.workEnvironment}
              </p>
            </div>

            {/* All Skills */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Complete Skill Set</h4>
              <div className="flex flex-wrap gap-2">
                {career.requiredSkills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                Get Preparation Roadmap
              </button>
              <button className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2">
                Find Colleges <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerCard;