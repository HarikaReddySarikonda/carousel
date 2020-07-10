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

    toHome(){
    document.getElementById("home").scrollIntoView({behavior:"smooth",  block: "start", inline: "nearest"})
    var element=document.getElementsByClassName('nav-link');
   for(var y=0;y< document.getElementsByClassName("nav-link").length;y++){
      var element=document.getElementsByClassName("nav-link");
      element[y].classList.remove('highlight');
     }
     element[0].classList.add('highlight');
     this.bgColor = "";
     var x = document.getElementById("navbarSupportedContent");
     x.style.display = "none";
  }
  toAboutus(){
    document.getElementById("about-us").scrollIntoView({behavior:"smooth",  block: "start", inline: "nearest"})
    var element=document.getElementsByClassName('nav-link');
    for(var y=0;y< document.getElementsByClassName("nav-link").length;y++){
      var element=document.getElementsByClassName("nav-link");
      element[y].classList.remove('highlight');
     }
     element[2].classList.add('highlight');
     this.bgColor = "";
     var x = document.getElementById("navbarSupportedContent");
     x.style.display = "none";
    }
  toServices(){
    document.getElementById("services").scrollIntoView({behavior:"smooth",  block: "start", inline: "nearest"})
    var element=document.getElementsByClassName('nav-link');
    for(var y=0;y< document.getElementsByClassName("nav-link").length;y++){
      var element=document.getElementsByClassName("nav-link");
      element[y].classList.remove('highlight');
     }
     element[1].classList.add('highlight');
     this.bgColor = "";
     var x = document.getElementById("navbarSupportedContent");
     x.style.display = "none";
  }
  toContactUs(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth",  block: "start", inline: "nearest"})
    var element=document.getElementsByClassName('nav-link');
    for(var y=0;y< document.getElementsByClassName("nav-link").length;y++){
      var element=document.getElementsByClassName("nav-link");
      element[y].classList.remove('highlight');
     }
    
    element[4].classList.add('highlight');
    this.bgColor = "";
    var x = document.getElementById("navbarSupportedContent");
    x.style.display = "none";
  }
  toFaq(){
    document.getElementById("faq").scrollIntoView({behavior:"smooth",  block: "start", inline: "nearest"})
    var element=document.getElementsByClassName('nav-link');
    for(var y=0;y< document.getElementsByClassName("nav-link").length;y++){
      var element=document.getElementsByClassName("nav-link");
      element[y].classList.remove('highlight');
     }
     element[3].classList.add('highlight');
     this.bgColor = "";
     var x = document.getElementById("navbarSupportedContent");
     x.style.display = "none";
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
    console.log("In Header component")
  }

}
