export const initialPersonal = {
  fullName: "Ray Hsu",
  email: "ray@example.com",
  phoneNumber: "(886) 912-786-023",
  location: "Taipei, Taiwan",
};

export const initialExperience = [
  {
    company: "Tech Corp Inc.",
    position: "Senior Frontend Developer",
    startDate: "2024",
    endDate: "Present",
    description:
      "Led a team of developers to rebuild the core application dashboard. Optimized rendering performance and established clean state management patterns.",
    id: crypto.randomUUID(),
  },
  {
    company: "Web Solutions Ltd.",
    position: "Frontend Developer",
    startDate: "2022",
    endDate: "2024",
    description:
      "Built responsive user interfaces for corporate client web applications. Collaborated closely with design teams to translate wireframes into clean, interactive code frameworks.",
    id: crypto.randomUUID(),
  },
];

export const initialEducation = [
  {
    school: "New York University Abu Dhabi",
    degree: "B.A. in Film and New Media",
    startDate: "2016",
    endDate: "2022",
    id: crypto.randomUUID(),
  },
  {
    school: "Taichung First Senior High School",
    degree: "Social Science and Humanity Curriculum",
    startDate: "2013",
    endDate: "2016",
    id: crypto.randomUUID(),
  },
];
