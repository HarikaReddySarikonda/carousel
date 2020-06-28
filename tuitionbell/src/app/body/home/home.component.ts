import { Component, OnInit } from '@angular/core';
import { MyAnimation } from '../../util/animationUtil'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [MyAnimation]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  // Services ts
   // Services
   show = false; 
   public selectedIndex = 0;
   public serviceData=[
     {
       title:"Product manager",
       data:"Write, share and update PRD | Add interactions and logic to transform prototypes | Manage design tasks.",
       img:'../../../assets/Images/man.jpg'
       //'../../../assets/Images/man.jpg'
     },
     {
       title:"Designer",
       data:"Upload designs from Sketch/PS/XD/Axure/Mockplus RP | Collaborate online - share and comment design decisions",
       img:"../../../assets/Images/people.jpg"
     },
     {
       title:"Front-end developer",
       data:"Get product requirements, specs, assets, interactions flows and CSS code snippets without a hitch.",
       img:"../../../assets/Images/computer.jpg"
     }
 ]
 
 async showTab(n,data){
   this.show = false;
   // await this.delay(150);
   this.selectedIndex = n;
   this.show = true;
 }
 get stateName(){
   return this.show ? 'show' : 'hide'
 }
 toggle(){
   //this.show = !this.show;
 }
 delay(ms: number) {
   return new Promise( resolve => setTimeout(resolve, ms) );
 }
 
 

// About Us
  itemsPerSlide = 3;
  singleSlideOffset = true;
  noWrap = true;
 
  slides = [
    {image: '../../../assets/Images/Own1.jpg'},
    {image: '../../../assets/Images/Own2.jpg'},
    {image: '../../../assets/Images/Own3.jpg'},
    {image: '..../../assets/Images/Own2.jpg'},
    {image: '../../../assets/Images/Own1.jpg'}
  ];
  //images = ['../../assets/bg26.jpg','../../assets/bg33.jpg','../../assets/bg35.jpg']
  clickfun (): void{
    console.log("click");
  }
    // owl = document.getElementById("#owl-demo");
 
  // owl.owlCarousel({
  //     items : 10, //10 items above 1000px browser width
  //     itemsDesktop : [1000,5], //5 items between 1000px and 901px
  //     itemsDesktopSmall : [900,3], // betweem 900px and 601px
  //     itemsTablet: [600,2], //2 items between 600 and 0
  //     itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  // });
 
  // // Custom Navigation Events
  // $(".next").click(function(){
  //   owl.trigger('owl.next');
  // })
  // $(".prev").click(function(){
  //   owl.trigger('owl.prev');
  // })
  // $(".play").click(function(){
  //   owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  // })
  // $(".stop").click(function(){
  //   owl.trigger('owl.stop');
  // })

}
