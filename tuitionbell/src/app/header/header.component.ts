import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  bgLight = false;
  bgColor : string = '';

  toggleClick(){
    this.bgColor="rgb(2, 46, 82)";
    var x = document.getElementById("navbarSupportedContent");
    if(x.style.display == "none") x.style.display='block';
  }
  //navigation
  


  public currentActive = 1;
  public homeOffset: Number = null;
  public aboutusOffset: Number = null;
  public servicesOffset: Number = null;
  public aboutteamOffset: Number = null;
  public faqOffset: Number = null;
  public contactusOffset: Number = null;
  public navbarheight;
  comVar;


  ngAfterViewChecked() {
    this.homeOffset = document.getElementById("home").offsetTop;
    this.aboutusOffset = document.getElementById("about-us").offsetTop;
    this.servicesOffset = document.getElementById("services").offsetTop;
    this.aboutteamOffset = document.getElementById("about-team").offsetTop;
    this.faqOffset = document.getElementById("faq").offsetTop;
    this.contactusOffset = document.getElementById("contact-us").offsetTop;
    this.aboutusOffset = document.getElementById("about-us").offsetTop;
    this.navbarheight = document.getElementById("navbarheight").offsetHeight;


  }
  scrollToElement(target){
   // alert(target)
    document.getElementById(target).scrollIntoView({behavior:"smooth",  block: "start", inline: "nearest"});
   // alert(this.currentActive);
  }
  @HostListener('window:scroll', ['$event'])
checkOffsetTop() {
  console.log(window.pageYOffset); // this will console log our scroll position
  console.log(window.pageYOffset +"+ "+this.navbarheight);
  console.log( window.pageYOffset +this.navbarheight);
 // console.log("this.homeOffset"+this.homeOffset);
 //// console.log("aboutusOffset "+this.aboutusOffset);
 // console.log("this.servicesOffset"+this.servicesOffset);
 // console.log("this.aboutteamOffset"+this.aboutteamOffset);
  this.navbarheight = parseInt(this.navbarheight);
  this.comVar =  window.pageYOffset + this.navbarheight;


  if (this.comVar >= this.homeOffset && this.comVar < this.aboutusOffset) {
    this.currentActive = 1;
  } else if (this.comVar >= this.aboutusOffset && this.comVar < this.servicesOffset) {
    this.currentActive = 2;
  } else if (this.comVar >= this.servicesOffset && this.comVar < this.aboutteamOffset) {
    this.currentActive = 3;
  } else if (this.comVar >= this.aboutteamOffset && this.comVar < this.faqOffset) {
    this.currentActive = 4;
  } else if (this.comVar >= this.faqOffset && this.comVar < this.contactusOffset){
    this.currentActive = 5;
  } else if (this.comVar >= this.contactusOffset){
    this.currentActive = 6;
  } else { this.currentActive = 0; }
//alert(document.getElementById("home").offsetTop+"gggg"+document.getElementById("about-us").offsetTop);
//alert(this.homeOffset+"ggfhg"+this.aboutusOffset);
// alert(this.homeOffset);
//alert(this.homeElement.nativeElement.offsetTop+"hb");
//alert(document.getElementById("harika").offsetTop);
}
   
    
    
 
  toElem(elem){
console.log(elem);

  }
  // toHome(){
  //   document.getElementById("home").scrollIntoView({behavior:"smooth",  block: "start", inline: "nearest"})
  // }
  // toAboutus(){
  //   document.getElementById("about-us").scrollIntoView({behavior:"smooth",  block: "start", inline: "nearest"})
  // }
  // toServices(){
  //   document.getElementById("services").scrollIntoView({behavior:"smooth",  block: "start", inline: "nearest"})
  // }
  // toContactUs(){
  //   document.getElementById("contact").scrollIntoView({behavior:"smooth",  block: "start", inline: "nearest"})
  // }
  // toFaq(){
  //   document.getElementById("faq").scrollIntoView({behavior:"smooth",  block: "start", inline: "nearest"})
  // }

  constructor() { }
  @HostListener('document:scroll') scrollFunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop>0){
      this.bgLight = true
    }
    else{
      this.bgLight = false
    }
  }
  ngOnInit(): void {
    console.log("In Header component");
    console.log(window.pageYOffset);
  }

}
