import { Component, OnInit } from '@angular/core';
import { MyAnimation } from '../../util/animationUtil'
// import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

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
slidesStore=[[{'header':'Srusthee','position':'Engg','discription':'Devlopment','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTC35tvDjD0xhe9K1NiPBM4iLqaM0gfOVGjQ&usqp=CAU'},
{'header':'Arjith','position':'Engg','discription':'Devlopment','img':'https://png.pngtree.com/png-clipart/20190516/original/pngtree-bank-securities-insurance-company-employee-official-business-png-image_3802223.jpg'},
{'header':'Harika','position':'Engg','discription':'Devlopment','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRh2Oxp1RbEhhnFYlNNCg5WCjjsGVxiEF5K8Q&usqp=CAU'}],
[{'header':'Teju','position':'Engg','discription':'Devlopment','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOQpvp5scL0Fh5HhTlBghBEolqO0vLXvpVZQ&usqp=CAU'},
{'header':'Abishek','position':'MBA','discription':'Bussiness','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRK75yOImoF-jRTnx-OjQVl7By4alsTf11vg&usqp=CAU'},
{'header':'Lalith','position':'MBA','discription':'Bussiness','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMndfEl9Hspt1UTfSThp4zNXOTqbL1-M-wwg&usqp=CAU'}],
[{'header':'Akanksha','position':'Engg','discription':'Devlopment','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOQpvp5scL0Fh5HhTlBghBEolqO0vLXvpVZQ&usqp=CAU'},
{'header':'vedavyas','position':'MBA','discription':'Bussiness','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRK75yOImoF-jRTnx-OjQVl7By4alsTf11vg&usqp=CAU'},
{'header':'vedavalli','position':'Engg','discription':'Bussiness','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMndfEl9Hspt1UTfSThp4zNXOTqbL1-M-wwg&usqp=CAU'}]];

num= 0;
subslide=this.slidesStore[this.num];

onPreviousClick() {
  if(this.num>0){  
  this.num--; 
  this.subslide=this.slidesStore[this.num];      
}}

onNextClick() {
  if(this.num<this.slidesStore.length-1){
 this.num++;
 this.subslide=this.slidesStore[this.num];
}}
  
//contact Us
  sendEmail(e: Event) {
    console.log("email");
    e.preventDefault();
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_USER_ID')
    //   .then((result: EmailJSResponseStatus) => {
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });
  }
}
