import { animate, style, transition, trigger } from '@angular/animations';

export const projectAnimations = [
  trigger('fadeIn', [
    transition(':enter', [
      style({opacity: '0'}),
      animate('.2s ease-out', style({opacity: '1'})),
    ]),
    transition(':leave', [
      style({opacity: '1'}),
      animate('.2s ease-out', style({opacity: '0'})),
    ]),
  ]),
];
