import { Component, OnInit } from '@angular/core';
import { MyAnimation } from '../../util/animationUtil'
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

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
       title:"Customized Educutional Packs",
       data:"",
       img:'../../../assets/Images/man.jpg'
       //'../../../assets/Images/man.jpg'
     },
     {
       title:"Tutoring Solutions",
       data:"",
       img:"../../../assets/Images/people.jpg"
     },
     {
       title:"Oportutinities for tutors in the City",
       data:"",
       img:"../../../assets/Images/computer.jpg"
     },
     {
      title:"Open Question Posting Fourm",
      data:"",
      img:"../../../assets/Images/people.jpg"
    },
    {
      title:"Live tracking of Educational Growth",
      data:"",
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

  sendEmail(e: Event) {
    console.log("email");
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_USER_ID')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
