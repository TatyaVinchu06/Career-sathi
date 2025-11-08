import { EnhancedCareerPath, StudentProfile, CareerSuggestion } from '../types';
import { careerDatabase } from '../data/careers';

export function getCareerSuggestions(profile: StudentProfile): CareerSuggestion[] {
  const suggestions = careerDatabase.map(career => {
    let matchScore = 0;
    const maxScore = 100;

    // Interest matching (40% weight) - Primary factor for modern students
    const interestMatches = profile.interests.filter(interest =>
      career.matchingInterests.some(careerInterest =>
        careerInterest.toLowerCase().includes(interest.toLowerCase()) ||
        interest.toLowerCase().includes(careerInterest.toLowerCase()) ||
        // Enhanced semantic matching
        (interest.toLowerCase().includes('tech') && careerInterest.toLowerCase().includes('technology')) ||
        (interest.toLowerCase().includes('money') && careerInterest.toLowerCase().includes('finance')) ||
        (interest.toLowerCase().includes('art') && careerInterest.toLowerCase().includes('creativity')) ||
        (interest.toLowerCase().includes('help') && careerInterest.toLowerCase().includes('helping-others')) ||
        (interest.toLowerCase().includes('government') && careerInterest.toLowerCase().includes('public-service')) ||
        (interest.toLowerCase().includes('business') && careerInterest.toLowerCase().includes('entrepreneurship')) ||
        (interest.toLowerCase().includes('gaming') && careerInterest.toLowerCase().includes('esports')) ||
        (interest.toLowerCase().includes('content') && careerInterest.toLowerCase().includes('content-creation')) ||
        (interest.toLowerCase().includes('video') && careerInterest.toLowerCase().includes('video-making')) ||
        (interest.toLowerCase().includes('youtube') && careerInterest.toLowerCase().includes('youtube')) ||
        (interest.toLowerCase().includes('editor') && careerInterest.toLowerCase().includes('editing'))
      )
    );

    const interestScore = profile.interests.length > 0
      ? (interestMatches.length / profile.interests.length) * 40
      : 0;
    matchScore += interestScore;

    // Stream matching (25% weight) - Important for eligibility
    const streamMatch = career.matchingStreams.some(stream =>
      stream.toLowerCase().includes(profile.stream.toLowerCase()) ||
      profile.stream.toLowerCase().includes(stream.toLowerCase()) ||
      // Flexible matching for Indian education system
      (profile.stream.toLowerCase().includes('computer') && stream.toLowerCase().includes('computer')) ||
      (profile.stream.toLowerCase().includes('commerce') && stream.toLowerCase().includes('business')) ||
      (profile.stream.toLowerCase().includes('science') && stream.toLowerCase().includes('engineering')) ||
      (profile.stream.toLowerCase().includes('pcm') && stream.toLowerCase().includes('engineering')) ||
      (profile.stream.toLowerCase().includes('pcb') && stream.toLowerCase().includes('medical')) ||
      stream.toLowerCase().includes('any')
    );
    if (streamMatch) matchScore += 25;

    // Qualification level matching (20% weight)
    const qualificationBonus = (() => {
      const profileLevel = profile.qualifications.toLowerCase();

      // High-demand modern careers
      if ((career.title.toLowerCase().includes('software') ||
           career.title.toLowerCase().includes('data') ||
           career.title.toLowerCase().includes('app') ||
           career.title.toLowerCase().includes('content') ||
           career.title.toLowerCase().includes('youtube') ||
           career.title.toLowerCase().includes('esports')) &&
          (profileLevel.includes('undergraduate') || profileLevel.includes('bachelor') || profileLevel.includes('12th'))) return 20;

      // Professional courses requiring specific qualifications
      if ((career.title.toLowerCase().includes('doctor') ||
           career.title.toLowerCase().includes('engineer')) &&
          profileLevel.includes('12th')) return 18;

      // Government services - any graduate
      if ((career.title.toLowerCase().includes('civil services') ||
           career.title.toLowerCase().includes('banking')) &&
          (profileLevel.includes('bachelor') || profileLevel.includes('graduate'))) return 20;

      // Professional qualifications
      if ((career.title.toLowerCase().includes('ca') ||
           career.title.toLowerCase().includes('chartered')) &&
          (profileLevel.includes('12th') || profileLevel.includes('commerce'))) return 18;

      // Creative and entrepreneurial fields
      if ((career.title.toLowerCase().includes('creator') ||
           career.title.toLowerCase().includes('entrepreneur') ||
           career.title.toLowerCase().includes('gaming') ||
           career.title.toLowerCase().includes('content') ||
           career.title.toLowerCase().includes('youtube') ||
           career.title.toLowerCase().includes('editor')) &&
          profileLevel.includes('12th')) return 15;

      return 10;
    })();
    matchScore += qualificationBonus;

    // Career preference bonus (10% weight)
    if (profile.careerPreference) {
      const preferenceBonus = (() => {
        const preference = profile.careerPreference.toLowerCase();

        if (preference.includes('government') &&
            (career.governmentOpportunities && career.governmentOpportunities.length > 0)) return 10;

        if (preference.includes('private') &&
            (career.privateOpportunities && career.privateOpportunities.length > 0)) return 10;

        if (preference.includes('entrepreneurship') &&
            career.title.toLowerCase().includes('entrepreneur')) return 10;

        if ((preference.includes('remote') || preference.includes('freelancing')) &&
            (career.title.toLowerCase().includes('content') ||
             career.title.toLowerCase().includes('youtube') ||
             career.title.toLowerCase().includes('freelance') ||
             career.title.toLowerCase().includes('creator') ||
             career.title.toLowerCase().includes('editor'))) return 10;

        if (preference.includes('international') &&
            career.title.toLowerCase().includes('software')) return 10;

        return 5;
      })();
      matchScore += preferenceBonus;
    }

    // Normalize score to percentage
    const normalizedScore = Math.min(matchScore, maxScore);

    return {
      ...career,
      matchScore: Math.round(normalizedScore)
    };
  });

  // Sort by match score
  const sortedSuggestions = suggestions.sort((a, b) => b.matchScore - a.matchScore);

  // Show all suggestions but ensure each interest has at least 2-3 with 80%+ match
  const highQualitySuggestions = sortedSuggestions.filter(s => s.matchScore >= 80);
  const otherSuggestions = sortedSuggestions.filter(s => s.matchScore < 80);

  // Group suggestions by matching interests
  const interestGroups: { [key: string]: CareerSuggestion[] } = {};

  // Create groups for each interest
  profile.interests.forEach(interest => {
    interestGroups[interest] = sortedSuggestions.filter(suggestion =>
      suggestion.matchingInterests.some(careerInterest =>
        careerInterest.toLowerCase().includes(interest.toLowerCase()) ||
        interest.toLowerCase().includes(careerInterest.toLowerCase())
      )
    ).sort((a, b) => b.matchScore - a.matchScore);
  });

  // Ensure each interest has at least 2-3 high quality matches (80%+)
  const guaranteedSuggestions: CareerSuggestion[] = [];
  const addedTitles = new Set<string>();

  // Add top 2-3 high quality matches for each interest
  Object.keys(interestGroups).forEach(interest => {
    const interestMatches = interestGroups[interest];
    const highQualityForInterest = interestMatches.filter(s => s.matchScore >= 80);

    // Add top 2-3 high quality matches for this interest (if available)
    highQualityForInterest.slice(0, 3).forEach(suggestion => {
      if (!addedTitles.has(suggestion.title)) {
        guaranteedSuggestions.push(suggestion);
        addedTitles.add(suggestion.title);
      }
    });
  });

  // Combine guaranteed suggestions with other high quality ones, up to 10
  const combinedSuggestions = [...guaranteedSuggestions];

  // Add remaining high quality suggestions to fill up to 10
  highQualitySuggestions.forEach(suggestion => {
    if (!addedTitles.has(suggestion.title) && combinedSuggestions.length < 10) {
      combinedSuggestions.push(suggestion);
      addedTitles.add(suggestion.title);
    }
  });

  // If we still need more suggestions, add some others
  if (combinedSuggestions.length < 8) {
    otherSuggestions.slice(0, 8 - combinedSuggestions.length).forEach(suggestion => {
      if (!addedTitles.has(suggestion.title)) {
        combinedSuggestions.push(suggestion);
        addedTitles.add(suggestion.title);
      }
    });
  }

  // Return top 10 suggestions
  return combinedSuggestions.slice(0, 10);
}