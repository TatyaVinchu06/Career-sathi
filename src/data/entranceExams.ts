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

export const entranceExamsData: { [key: string]: ExamInfo } = {
  "JEE Main": {
    name: "JEE Main",
    fullForm: "Joint Entrance Examination Main",
    conductedBy: "National Testing Agency (NTA)",
    frequency: "Twice a year (January & April)",
    eligibility: "12th with PCM, 75% marks (65% for SC/ST)",
    syllabus: ["Physics", "Chemistry", "Mathematics"],
    preparationTime: "2-3 years",
    topBooks: ["HC Verma Physics", "NCERT", "RD Sharma Maths", "OP Tandon Chemistry"],
    coachingInstitutes: ["Allen", "Aakash", "FIITJEE", "Resonance", "Unacademy"],
    applicationFee: "₹650 (General), ₹325 (SC/ST/PwD)",
    examPattern: "90 questions, 3 hours, Online CBT"
  },
  "NEET": {
    name: "NEET",
    fullForm: "National Eligibility cum Entrance Test",
    conductedBy: "National Testing Agency (NTA)",
    frequency: "Once a year (May)",
    eligibility: "12th with PCB, 50% marks (40% for SC/ST/OBC)",
    syllabus: ["Physics", "Chemistry", "Biology (Botany & Zoology)"],
    preparationTime: "2-3 years",
    topBooks: ["NCERT", "HC Verma Physics", "Trueman's Biology", "OP Tandon Chemistry"],
    coachingInstitutes: ["Allen", "Aakash", "FIITJEE", "Resonance", "Unacademy"],
    applicationFee: "₹1,600 (General), ₹800 (SC/ST/OBC/PwD)",
    examPattern: "180 questions, 3 hours, Offline OMR"
  },
  "UPSC CSE": {
    name: "UPSC CSE",
    fullForm: "Union Public Service Commission Civil Services Examination",
    conductedBy: "Union Public Service Commission",
    frequency: "Once a year",
    eligibility: "Graduate in any discipline, Age: 21-32 years",
    syllabus: ["General Studies", "Optional Subject", "Essay", "Ethics"],
    preparationTime: "1-3 years",
    topBooks: ["Laxmikanth Polity", "Spectrum History", "Ramesh Singh Economics", "NCERT"],
    coachingInstitutes: ["Vajiram & Ravi", "Chanakya IAS", "Drishti IAS", "Vision IAS"],
    applicationFee: "₹100 (General), No fee (SC/ST/PwD/Women)",
    examPattern: "Prelims (2 papers) + Mains (9 papers) + Interview"
  },
  "CAT": {
    name: "CAT",
    fullForm: "Common Admission Test",
    conductedBy: "IIMs (Rotational)",
    frequency: "Once a year (November)",
    eligibility: "Graduate with 50% marks (45% for SC/ST)",
    syllabus: ["Quantitative Ability", "Verbal Ability", "Data Interpretation", "Logical Reasoning"],
    preparationTime: "1-2 years",
    topBooks: ["Arun Sharma QA", "Nishit Sinha LR", "RC99", "How to Prepare for CAT"],
    coachingInstitutes: ["TIME", "IMS", "Career Launcher", "Unacademy", "BYJU'S"],
    applicationFee: "₹2,300 (General), ₹1,150 (SC/ST/PwD)",
    examPattern: "100 questions, 3 hours, Online CBT"
  },
  "GATE": {
    name: "GATE",
    fullForm: "Graduate Aptitude Test in Engineering",
    conductedBy: "IITs/IISc (Rotational)",
    frequency: "Once a year (February)",
    eligibility: "B.Tech/BE or equivalent",
    syllabus: ["Engineering Mathematics", "Subject-specific topics", "General Aptitude"],
    preparationTime: "6 months to 1 year",
    topBooks: ["Made Easy Publications", "ACE Academy Notes", "Previous Year Papers"],
    coachingInstitutes: ["Made Easy", "ACE Engineering Academy", "The GATE Academy"],
    applicationFee: "₹1,700 (General), ₹850 (SC/ST/PwD)",
    examPattern: "65 questions, 3 hours, Online CBT"
  }
};