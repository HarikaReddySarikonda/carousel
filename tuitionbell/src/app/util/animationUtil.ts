import {
    trigger,
    state,
    style,
    animate,
    transition,
  } from '@angular/animations';

  export const MyAnimation = trigger('myAni',[
    state('show', style({
      opacity: 1
    })),
    state('hide', style({
      opacity: 0.25
    })),
     transition('show => hide' , animate('600ms ease-out')) ,
     transition('hide => show' , animate('600ms ease-in'))
  ])