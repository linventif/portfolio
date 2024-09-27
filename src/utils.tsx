export interface Category {
  name: string;
  icon: string;
  id: string;
  description?: string;
}

export enum ExperienceLevel {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
  Expert = "Expert",
  Daily = "Daily",
}
