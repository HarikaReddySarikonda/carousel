import { Component, OnInit } from '@angular/core';
import { MyAnimation } from '../../util/animationUtil';
import { howItWorksAni } from '../../util/animationUtil';

// import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ContentReader } from '../../util/ContentReader';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [MyAnimation,howItWorksAni]
})
export class HomeComponent implements OnInit {

  constructor(private _contentReader: ContentReader) { }

  ngOnInit(): void {
   if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
       this.mobile=true;
  }
  //if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
   // this.mobile=false;  
  //}
  }
  //About Us
  aboutUs = this._contentReader.getAboutUsData();

  //how-It-Works
  public howItWorks =  this._contentReader.getHowItWorksData();

  // Home Carousel
  public homeData = this._contentReader.getHomeData();
mobile=false;
    //menu goes away on click
    gomenu(){
      var a = document.getElementById("menuButton").getAttribute("aria-expanded");
      if(a == 'true'){
       document.getElementById("menuButton").setAttribute("aria-expanded","false");
       document.getElementById("menuButton").classList.add("collapsed");
       document.getElementById("navbarSupportedContent").classList.remove("show");
      // console.log(document.getElementById("menuButton"));
      // console.log(document.getElementById("navbarSupportedContent"));
      }
     }

  // Services

  public selectedIndex = 0;
  public serviceData = this._contentReader.getserviceData();
  showTab(index, data) {
    this.selectedIndex = index;
  }

  //  the team
  slidesStore = this._contentReader.getTeamData();;
  num = 0;
  subslide = this.slidesStore[this.num];

  onPreviousClick() {
    if (this.num > 0) {
      this.num--;
      this.subslide = this.slidesStore[this.num];
    }
  }

  onNextClick() {
    if (this.num < this.slidesStore.length - 1) {
      this.num++;
      this.subslide = this.slidesStore[this.num];
    }
  }

  // faq

  student_faq = this._contentReader.getFaqData()[0];
  tutor_faq = this._contentReader.getFaqData()[1];

  //contact Us
  onSubmit(f: NgForm) {
    console.log(f.value);  
  }

  // sendEmail(e: Event) {
  //   console.log("email");
  //   e.preventDefault();
  //   // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_USER_ID')
  //   //   .then((result: EmailJSResponseStatus) => {
  //   //     console.log(result.text);
  //   //   }, (error) => {
  //   //     console.log(error.text);
  //   //   });
  // }

  // how it works
  tutor=true;
  student=true;
  positionStu="center";
  arrow=false;
  step=false;
  positiontutor="center";


  showStudent(){
    this.tutor=false;
    this.positionStu="left";
    this.arrow=true;
    this.step=true;
  }

  showtutor(){
   this.student=false;
    this.positiontutor="left";
    this.arrow=true;
    this.step=true;
  }

}
