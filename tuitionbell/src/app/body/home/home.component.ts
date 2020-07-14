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

   // Home Carousel
   public homeData = this._contentReader.getHomeData();
  
   // Services
   
   public selectedIndex = 0;
   public serviceData = this._contentReader.getserviceData();
   showTab(index,data){ 
    this.selectedIndex = index; 
  }
  
 

//  the team
slidesStore=this._contentReader.getTeamData();;
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
