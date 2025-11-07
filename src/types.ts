export interface StudentProfile {
  qualifications: string;
  stream: string;
  interests: string[];
  qualificationLevel?: string;
  location?: string;
  familyIncome?: string;
  careerPreference?: string;
}

export interface CareerPath {
  title: string;
  description: string;
  requiredSkills: string[];
  certification: string;
  matchingStreams: string[];
  matchingInterests: string[];
}

export interface EnhancedCareerPath extends CareerPath {
  salaryRange: string;
  topColleges: string[];
  entranceExams: string[];
  eligibility: string;
  courseDuration: string;
  jobOpportunities: string[];
  governmentOpportunities?: string[];
  privateOpportunities?: string[];
  futureScope: string;
  workEnvironment: string;
}

export interface CareerSuggestion extends EnhancedCareerPath {
  matchScore: number;
}

export interface RoadmapStep {
  step: string;
  policeDetails: string;
  armyDetails: string;
}

export interface CareerRoadmap {
  title: string;
  qualification: string;
  interests: string[];
  steps: RoadmapStep[];
}

export interface CollegeInfo {
  name: string;
  location: string;
  type: 'Government' | 'Private' | 'Deemed';
  ranking: number;
  fees: string;
  placements: string;
  specializations: string[];
}

export interface ExamInfo {
  name: string;
  fullForm: string;
  conductedBy: string;
  frequency: string;
  eligibility: string;
  syllabus: string[];
  preparationTime: string;
  topBooks: string[];
  coachingInstitutes: string[];
  applicationFee: string;
  examPattern: string;
}