import { Project, projectType } from '../models/project.model';

export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'San Tropico',
    type: projectType.commercial,
    description: 'Grywalizacja',
    imageUrl: 'assets/images/farm.jpg',
    tags: [
      'Angular',
      'PhaserJS',
      'Websocket'
    ]
  },
  {
    id: 2,
    name: 'San Colombo',
    type: projectType.commercial,
    description: 'Grywalizacja',
    imageUrl: 'assets/images/sc.jpg',
    tags: [
      'React',
      'BabylonJS',
      'REST',
      'GameDev',
      'NgRx'
    ]
  }
];
