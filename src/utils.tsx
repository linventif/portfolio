export interface Category {
  name: string;
  icon: string;
  id: string;
  description?: string;
}
export enum ExperienceLevel {
  Professional = "Professional",
  SchoolProject = "School Project",
  HobbyProject = "Personal Project",
  InterestedLearning = "Interested / Learning",
}

export const ExperienceLevelDescription = {
  [ExperienceLevel.Professional]: {
    projects:
      "I have worked on projects in **professional environments**, including those deployed to production where performance, security, and availability are critical. I have effectively collaborated with multidisciplinary teams to achieve company objectives and meet client needs.",
    tools:
      "I have a **deep mastery** of this tool or technology, using it extensively in professional settings to ensure reliability, performance, and scalability for demanding end-users.",
  },
  [ExperienceLevel.SchoolProject]: {
    projects:
      "I have completed **academic projects** utilizing this tool or technology to solve concrete problems, often collaborating within a team setting.",
    tools:
      "I have gained a good grasp of this tool or technology through **academic use**, adhering to taught standards and methodologies.",
  },
  [ExperienceLevel.HobbyProject]: {
    projects:
      "I have initiated and developed **personal projects** using this tool or technology, showcasing my curiosity and initiative to deepen my knowledge.",
    tools:
      "I explore this tool or technology out of **personal interest**, which has allowed me to develop practical understanding and stay up-to-date with the latest trends.",
  },
  [ExperienceLevel.InterestedLearning]: {
    projects:
      "I have not yet applied this tool or technology in a project but am **interested in learning** it.",
    tools:
      "I am currently **interested in and learning** this tool or technology, investing time to understand its fundamental principles and potential applications.",
  },
};
