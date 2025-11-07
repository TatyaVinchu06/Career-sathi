import React, { useState } from 'react';
import { CareerSuggestion } from '../types';
import CareerCard from './CareerCard';
import { ArrowLeft, Filter, TrendingUp, Award, Users, Search } from 'lucide-react';

interface CareerResultsProps {
  careers: CareerSuggestion[];
  onBack: () => void;
}

const CareerResults: React.FC<CareerResultsProps> = ({ careers, onBack }) => {
  const [sortBy, setSortBy] = useState<'match' | 'salary' | 'government'>('match');
  const [filterBy, setFilterBy] = useState<'all' | 'government' | 'private'>('all');

  const sortedAndFilteredCareers = careers
    .filter(career => {
      if (filterBy === 'government') {
        return career.governmentOpportunities && career.governmentOpportunities.length > 0;
      }
      if (filterBy === 'private') {
        return career.privateOpportunities && career.privateOpportunities.length > 0;
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'salary':
          // Extract numeric value from salary range for sorting
          const getSalaryValue = (range: string) => {
            const match = range.match(/₹(\d+(?:\.\d+)?)/);
            return match ? parseFloat(match[1]) : 0;
          };
          return getSalaryValue(b.salaryRange) - getSalaryValue(a.salaryRange);
        case 'government':
          const aGovCount = a.governmentOpportunities?.length || 0;
          const bGovCount = b.governmentOpportunities?.length || 0;
          return bGovCount - aGovCount;
        default:
          return b.matchScore - a.matchScore;
      }
    });

  const getMatchStats = () => {
    const excellent = careers.filter(c => c.matchScore >= 80).length;
    const good = careers.filter(c => c.matchScore >= 60 && c.matchScore < 80).length;
    const fair = careers.filter(c => c.matchScore >= 40 && c.matchScore < 60).length;
    return { excellent, good, fair };
  };

  const stats = getMatchStats();

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="mb-6 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 backdrop-blur-sm border border-gray-600/30"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Assessment
        </button>

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            🎯 Your Personalized Career Recommendations
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Based on your interests, qualifications, and preferences, here are the best career matches for you
          </p>
          
          {/* Match Statistics */}
          <div className="flex justify-center gap-6 mb-6">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400">{stats.excellent}</div>
              <div className="text-sm text-green-300">Excellent Matches</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-400">{stats.good}</div>
              <div className="text-sm text-blue-300">Good Matches</div>
            </div>
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-400">{stats.fair}</div>
              <div className="text-sm text-yellow-300">Fair Matches</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300 font-medium">Filter & Sort:</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {/* Filter Buttons */}
            <div className="flex gap-2">
              {[
                { key: 'all', label: 'All Careers', icon: Users },
                { key: 'government', label: 'Government', icon: Award },
                { key: 'private', label: 'Private', icon: TrendingUp }
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setFilterBy(key as any)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    filterBy === key
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
            >
              <option value="match">Sort by Match Score</option>
              <option value="salary">Sort by Salary Range</option>
              <option value="government">Sort by Government Opportunities</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-400 text-center">
          Showing {sortedAndFilteredCareers.length} career{sortedAndFilteredCareers.length !== 1 ? 's' : ''} 
          {filterBy !== 'all' && ` in ${filterBy} sector`}
        </p>
      </div>

      {/* Career Cards */}
      {sortedAndFilteredCareers.length > 0 ? (
        <div className="space-y-8">
          {sortedAndFilteredCareers.map((career, index) => (
            <CareerCard 
              key={career.title} 
              career={career} 
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No careers found</h3>
          <p className="text-gray-500">Try adjusting your filters to see more results.</p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-12 text-center space-y-4">
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-6 border border-blue-500/30">
          <h3 className="text-xl font-bold text-white mb-3">Ready to Take the Next Step?</h3>
          <p className="text-gray-300 mb-4">
            Get detailed preparation roadmaps, college recommendations, and entrance exam guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
              📚 Get Study Plan
            </button>
            <button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25">
              🏛️ Find Colleges
            </button>
            <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25">
              💬 Talk to Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerResults;