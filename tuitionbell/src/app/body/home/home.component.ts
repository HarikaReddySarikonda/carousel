import { Component, OnInit } from '@angular/core';
import { MyAnimation } from '../../util/animationUtil';
// import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ContentReader } from '../../util/ContentReader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [MyAnimation]
})
export class HomeComponent implements OnInit {

  constructor(private  _contentReader : ContentReader) { }

  ngOnInit(): void {
  }  
  
   // Services
   show = false; 
   public selectedIndex = 0;
   public serviceData = this._contentReader.getserviceData();

   showTab(index,data){
    this.show = false;
    this.selectedIndex = index;
    this.show = true;
  }
   get stateName(){
    return this.show ? 'show' : 'hide'
  }
 

//  the team
slidesStore=[
  [
    {'header':'vedavyas','position':'CFO','discription':'Bussiness','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRK75yOImoF-jRTnx-OjQVl7By4alsTf11vg&usqp=CAU'},
    {'header':'Abishek Parasa','position':'CFO','discription':'Bussiness','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRK75yOImoF-jRTnx-OjQVl7By4alsTf11vg&usqp=CAU'},
    {'header':'Lalith Kumar','position':'CFO','discription':'Bussiness','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMndfEl9Hspt1UTfSThp4zNXOTqbL1-M-wwg&usqp=CAU'}
  ],
  [
    {'header':'Srusthee Chirame','position':'Front-End Enggineer','discription':'Devlopment','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRh2Oxp1RbEhhnFYlNNCg5WCjjsGVxiEF5K8Q&usqp=CAU'},
    {'header':'Arjit Roy','position':'CTO','discription':'Devlopment','img':'https://png.pngtree.com/png-clipart/20190516/original/pngtree-bank-securities-insurance-company-employee-official-business-png-image_3802223.jpg'},
    {'header':'Akanksha Thala','CTO':'Enggineer','discription':'Devlopment','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOQpvp5scL0Fh5HhTlBghBEolqO0vLXvpVZQ&usqp=CAU'}
  ],
  [
    {'header':'Harika Reddy','position':'Front End Enggineer','discription':'Devlopment','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRh2Oxp1RbEhhnFYlNNCg5WCjjsGVxiEF5K8Q&usqp=CAU'},
    {'header':'Tejasvini Kadam','position':'python Enggineer','discription':'Devlopment','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOQpvp5scL0Fh5HhTlBghBEolqO0vLXvpVZQ&usqp=CAU'},
    {'header':'vedavalli Alaparthi','position':'Front End Enggineer','discription':'Bussiness','img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMndfEl9Hspt1UTfSThp4zNXOTqbL1-M-wwg&usqp=CAU'}
  ]
];

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
