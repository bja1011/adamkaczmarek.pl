import { Project, projectType } from '../models/project.model';

export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Gamification platform v4',
    type: projectType.commercial,
    shortDescription: 'A gamification platform with computer game to support the achievement of business goals.',
    description: ``,
    techDescription: `Built with Angular v2 and PhaserJS`,
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
    shortDescription: '',
    techDescription: ``,
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
    shortDescription: '',
    description: 'Dungeons of Fud',
    techDescription: ``,
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
    shortDescription: '',
    description: 'Lexus feel in',
    techDescription: ``,
    images: ['assets/images/lfi.jpg'],
    tags: [
      'Angular',
      'Ionic',
      'REST',
      'Hybrid'
    ]
  }
];
