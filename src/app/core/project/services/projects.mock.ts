import { Project, projectType } from '../models/project.model';

export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Sanville - Gamification platform v1',
    type: projectType.commercial,
    description: `Story line: a building-management game where players are striving to obtain a 100% BIO certificate
     for the products manufactured on the farm`,
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
