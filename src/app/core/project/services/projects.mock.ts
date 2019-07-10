import { Project, projectType } from '../models/project.model';

export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Gamification platform (v2)',
    type: projectType.commercial,
    shortDescription: 'A gamification platform with a computer game to support the achievement of business goals.',
    description:
      `Platform uses computer games to support the achievement of business objectives. <br>
      The key element of the platform is to lure users into the game virtual world, 
      where the progress depends entirely on the gamers and their business achievements.
      The better the users fulfil their sales, efficiency, quality and training plans, the more virtual currency,
      which enables them to develop in the game world, they obtain.
      A motivational strategy constructed in such a way contributes to an increase between 10% and 20% in the sales, 
      promotes regular monitoring of business reports and supports long-term commitment of the users of a gamification platform. <br>
      See more at <a href="https://oskarwegner.pl/en/index.html#strategy" target="_blank">Oskar Wegner</a> website.
      `,
    techDescription: `
        Platform needed to be available from browser and also distributed as native mobile applications on AppStore and Google Play. <br>
        Because of complexity of the UI views and elements, after research, I decided to use Angular as state manager, UI layer and build system (from CLI). 
        The game module was built with PhaserJS game engine. <br>
        First version of the platform was using AngularJS. Second version was completly rewitten in Angular 2 (starting from RC4) and is constantly 
        updating to the newest version (currently v7). <br><br>
        Using Angular as state manager, UI layer and splitting code into multiple, separate modules allows non-game-developers to develop and maintain business features without touching game code. 
        <br> 
        With NgRx store implementation it was even possible to switch between game engines (PhaserCE, Phaser3 or BabylonJS) without changing app state structure or other features code.   
        <br>
    `,
    images: [
      'assets/images/sc1.jpg',
      'assets/images/farm.jpg',
      'assets/images/rt.jpg',
      'assets/images/st1.jpg',
      'assets/images/st2.jpg',
    ],
    tags: [
      'Angular',
      'PhaserJS',
      'Websocket',
      'NgRx'
    ]
  },
  {
    id: 2,
    name: 'San Colombo',
    type: projectType.commercial,
    description: 'Grywalizacja',
    shortDescription: '',
    techDescription: ``,
    images: ['assets/images/sc1.jpg'],
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
    shortDescription: 'Browser game ',
    description: 'Dungeons of Fud',
    techDescription: `Built with Angular 6 and Phaser3`,
    images: ['assets/images/dof.jpg'],
    tags: [
      'Angular',
      'Phaser3',
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
