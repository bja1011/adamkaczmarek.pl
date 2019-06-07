export interface Project {
  id: number;
  name: string;
  type: projectType;
  imageUrl: string;
  description: string;
}

export enum projectType {
  commercial,
  personal
}
