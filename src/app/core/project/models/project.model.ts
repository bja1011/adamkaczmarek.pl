export interface Project {
  id: number;
  name: string;
  type: projectType;
  images?: string[];
  description?: string;
  shortDescription: string;
  techDescription: string;
  tags?: string[];
}

export enum projectType {
  commercial,
  personal,
  playground
}
