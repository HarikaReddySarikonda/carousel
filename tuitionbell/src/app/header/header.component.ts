import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  bgLight = false;
  bgColor : string = '';
  toggleclicked=false;
  toggleClick(){
    this.toggleclicked=!this.toggleclicked;
    if(this.toggleclicked){
    this.bgColor = "white";
    }
    else{
    this.bgColor='';
    }
  }
  toHome(){
    document.getElementById("home").scrollIntoView({behavior:"smooth",  block: "start", inline: "nearest"})
  }
  toAboutus(){
    document.getElementById("about-us").scrollIntoView({behavior:"smooth",  block: "start", inline: "nearest"})
  }
  toServices(){
    document.getElementById("services").scrollIntoView({behavior:"smooth",  block: "start", inline: "nearest"})
  }
  toContactUs(){
    // document.getElementById("carouselContainer").scrollIntoView({behavior:"smooth",  block: "start", inline: "nearest"})
  }
  toFaq(){
    document.getElementById("faq").scrollIntoView({behavior:"smooth",  block: "start", inline: "nearest"})
  }

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
    console.log("In Header component")
  }

}
