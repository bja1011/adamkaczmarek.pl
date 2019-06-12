import { Project, projectType } from '../models/project.model';

export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'San Tropico',
    type: projectType.commercial,
    description: 'Grywalizacja',
    images: ['assets/images/farm.jpg'],
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
    images: ['assets/images/sc.png'],
    tags: [
      'React',
      'BabylonJS',
      'REST',
      'GameDev',
      'NgRx'
    ]
  },
  {
    id: 3,
    name: 'Dungeons of Fud',
    type: projectType.personal,
    description: 'Dungeons of Fud',
    images: ['assets/images/dof.png'],
    tags: [
      'Angular',
      'PhaserJS',
      'REST',
      'GameDev',
    ]
  },
  {
    id: 4,
    name: 'Lexus FeelIn',
    type: projectType.commercial,
    description: 'Lexus feel in',
    images: ['assets/images/lfi.jpg'],
    tags: [
      'Angular',
      'Ionic',
      'REST',
      'Hybrid'
    ]
  }
];
