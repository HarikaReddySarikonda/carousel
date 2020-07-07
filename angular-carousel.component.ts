import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate,state,query,group } from "@angular/animations";
const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '200px' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-200px)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(200px)' }))], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '200px' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(200px)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-200px)' }))], {
      optional: true,
    }),
  ]),
];

@Component({
  selector: 'app-angular-carousel',
  templateUrl: './angular-carousel.component.html',
  styleUrls: ['./angular-carousel.component.css'],
  animations: [
    trigger('animImageSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ]
})
export class AngularCarouselComponent implements OnInit {

  slidesStore=[[{'header':'Srusthee','position':'Engg','discription':'Devlopment','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTC35tvDjD0xhe9K1NiPBM4iLqaM0gfOVGjQ&usqp=CAU'},
  {'header':'Arjith','position':'Engg','discription':'Devlopment','img':'https://png.pngtree.com/png-clipart/20190516/original/pngtree-bank-securities-insurance-company-employee-official-business-png-image_3802223.jpg'},
  {'header':'Harika','position':'Engg','discription':'Devlopment','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRh2Oxp1RbEhhnFYlNNCg5WCjjsGVxiEF5K8Q&usqp=CAU'}],
  [{'header':'Teju','position':'Engg','discription':'Devlopment','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOQpvp5scL0Fh5HhTlBghBEolqO0vLXvpVZQ&usqp=CAU'},
  {'header':'Abishek','position':'MBA','discription':'Bussiness','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRK75yOImoF-jRTnx-OjQVl7By4alsTf11vg&usqp=CAU'},
  {'header':'Lalith','position':'MBA','discription':'Bussiness','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMndfEl9Hspt1UTfSThp4zNXOTqbL1-M-wwg&usqp=CAU'}],
 [{'header':'Akanksha','position':'Engg','discription':'Devlopment','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOQpvp5scL0Fh5HhTlBghBEolqO0vLXvpVZQ&usqp=CAU'},
  {'header':'vedavyas','position':'MBA','discription':'Bussiness','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRK75yOImoF-jRTnx-OjQVl7By4alsTf11vg&usqp=CAU'},
  {'header':'vedavalli','position':'Engg','discription':'Bussiness','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMndfEl9Hspt1UTfSThp4zNXOTqbL1-M-wwg&usqp=CAU'}]];



  public slides = [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMndfEl9Hspt1UTfSThp4zNXOTqbL1-M-wwg&usqp=CAU" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMndfEl9Hspt1UTfSThp4zNXOTqbL1-M-wwg&usqp=CAU" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMndfEl9Hspt1UTfSThp4zNXOTqbL1-M-wwg&usqp=CAU" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMndfEl9Hspt1UTfSThp4zNXOTqbL1-M-wwg&usqp=CAU" }
  ];
  currentSlide = 0;

  num= 0;
  subslide=this.slidesStore[this.num];
  constructor() { }

 

  ngOnInit(): void {
  }



  onPreviousClick() {
    if(this.num>0){  
    this.num--; 
    this.subslide=this.slidesStore[this.num]; 
        console.log("previous clicked, new current slide is: ", this.currentSlide);
  }}

  onNextClick() {
    if(this.num<this.slidesStore.length-1){
   this.num++;
   this.subslide=this.slidesStore[this.num];
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }}

  get stateName(){
  //  return this.view;
  return 'jj';
  }
}


