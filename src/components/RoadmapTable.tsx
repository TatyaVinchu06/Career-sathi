import React from 'react';
import { CareerRoadmap } from '../types';
import { Shield, Target, Award } from 'lucide-react';

interface RoadmapTableProps {
  roadmap: CareerRoadmap;
}

export default function RoadmapTable({ roadmap }: RoadmapTableProps) {
  return (
    <div className="space-y-6 animate-slideUp">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
        <div className="flex items-center gap-3 mb-3">
          <Shield className="w-8 h-8 animate-bounce-gentle" />
          <h2 className="text-2xl font-bold">{roadmap.title}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 animate-pulse" />
            <span><strong>Qualification:</strong> {roadmap.qualification}</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <span><strong>Interests:</strong> {roadmap.interests.join(', ')}</span>
          </div>
        </div>
      </div>

      {/* Roadmap Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-500">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
              <th className="text-left p-4 font-semibold text-gray-800 w-1/4">Step</th>
              <th className="text-left p-4 font-semibold text-blue-700 w-3/8">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 animate-pulse" />
                  Police Path Details
                </div>
              </th>
              <th className="text-left p-4 font-semibold text-green-700 w-3/8">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 animate-pulse" style={{ animationDelay: '0.3s' }} />
                  Army Path Details
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {roadmap.steps.map((step, index) => (
              <tr 
                key={index} 
                className={`border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-25 hover:to-green-25 transition-all duration-300 hover:shadow-md ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-25'
                }`}
              >
                <td className="p-4 font-medium text-gray-800 align-top">
                  <div className="flex items-start gap-2">
                    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-1 hover:scale-110 transition-transform duration-300 cursor-default">
                      {index + 1}
                    </div>
                    <span className="pt-1">{step.step.replace(/^\d+\.\s*/, '')}</span>
                  </div>
                </td>
                <td className="p-4 align-top hover:bg-blue-25 transition-colors duration-300">
                  <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {step.policeDetails}
                  </div>
                </td>
                <td className="p-4 align-top hover:bg-green-25 transition-colors duration-300">
                  <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {step.armyDetails}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}