export interface CollegeInfo {
  name: string;
  location: string;
  type: 'Government' | 'Private' | 'Deemed';
  ranking: number;
  fees: string;
  placements: string;
  specializations: string[];
}

export const topCollegesData: { [key: string]: CollegeInfo[] } = {
  engineering: [
    {
      name: "IIT Bombay",
      location: "Mumbai, Maharashtra",
      type: "Government",
      ranking: 1,
      fees: "₹2.5 LPA",
      placements: "₹15-50 LPA average",
      specializations: ["Computer Science", "Electrical", "Mechanical", "Chemical", "Civil"]
    },
    {
      name: "IIT Delhi",
      location: "New Delhi",
      type: "Government", 
      ranking: 2,
      fees: "₹2.5 LPA",
      placements: "₹12-45 LPA average",
      specializations: ["Computer Science", "Electronics", "Mechanical", "Chemical", "Mathematics"]
    },
    {
      name: "BITS Pilani",
      location: "Pilani, Rajasthan",
      type: "Private",
      ranking: 15,
      fees: "₹4.5 LPA",
      placements: "₹8-30 LPA average", 
      specializations: ["Computer Science", "Electronics", "Mechanical", "Chemical", "Civil"]
    }
  ],
  medical: [
    {
      name: "AIIMS Delhi",
      location: "New Delhi",
      type: "Government",
      ranking: 1,
      fees: "₹1,500 per year",
      placements: "Government service + Private practice",
      specializations: ["General Medicine", "Surgery", "Pediatrics", "Gynecology", "Orthopedics"]
    },
    {
      name: "CMC Vellore",
      location: "Vellore, Tamil Nadu", 
      type: "Private",
      ranking: 5,
      fees: "₹8 LPA",
      placements: "Excellent hospital placements",
      specializations: ["Medicine", "Surgery", "Pediatrics", "Cardiology", "Neurology"]
    }
  ],
  commerce: [
    {
      name: "Shri Ram College of Commerce",
      location: "Delhi University, Delhi",
      type: "Government",
      ranking: 1,
      fees: "₹25,000 per year",
      placements: "₹6-25 LPA",
      specializations: ["Commerce", "Economics", "Business Studies"]
    },
    {
      name: "Christ University",
      location: "Bangalore, Karnataka",
      type: "Deemed",
      ranking: 8,
      fees: "₹2 LPA",
      placements: "₹4-15 LPA",
      specializations: ["Commerce", "Management", "Economics", "Finance"]
    }
  ]
};