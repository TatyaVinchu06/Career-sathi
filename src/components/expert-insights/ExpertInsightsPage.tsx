import React, { useState } from 'react';
import { Star, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

interface ExpertInsightsPageProps {
  onBack: () => void;
}

function ExpertInsightsPage({ onBack }: ExpertInsightsPageProps) {
  const [currentCard, setCurrentCard] = useState(0);

  const insights = [
    {
      title: "Career Growth Strategy",
      content: "Focus on developing both technical and soft skills. The most successful professionals combine domain expertise with strong communication and leadership abilities.",
      expert: "Dr. Sarah Johnson",
      role: "Career Development Specialist"
    },
    {
      title: "Industry Trends 2024",
      content: "AI and automation are reshaping job markets. Embrace continuous learning and focus on skills that complement technology rather than compete with it.",
      expert: "Mark Chen",
      role: "Industry Analyst"
    },
    {
      title: "Networking Essentials",
      content: "Build genuine relationships, not just connections. Quality networking is about mutual value creation and long-term professional relationships.",
      expert: "Lisa Rodriguez",
      role: "Executive Coach"
    },
    {
      title: "Interview Success",
      content: "Prepare stories that demonstrate your problem-solving abilities. Use the STAR method (Situation, Task, Action, Result) to structure your responses.",
      expert: "James Wilson",
      role: "HR Director"
    }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % insights.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + insights.length) % insights.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-8 h-8 text-yellow-500" />
            <h1 className="text-3xl font-bold text-gray-800">Expert Insights</h1>
          </div>
          <p className="text-gray-600">Professional advice from industry experts</p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-xl shadow-lg p-8 min-h-[400px] flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {insights[currentCard].title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {insights[currentCard].content}
              </p>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    {insights[currentCard].expert}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {insights[currentCard].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevCard}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            <div className="flex gap-2">
              {insights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCard(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentCard ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextCard}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center mt-4 text-gray-500">
            {currentCard + 1} of {insights.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertInsightsPage;