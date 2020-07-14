import {
    trigger,
    state,
    style,
    animate,
    transition,
  } from '@angular/animations';

  export const MyAnimation = trigger('myAni',[  
    transition('* => void' ,[ animate('600ms ease-out', style({ opacity: 0 }))]),
    transition('void => *' ,[style({ opacity: 0 }), animate('600ms ease-in', style({ opacity: 1 }))])
 ])