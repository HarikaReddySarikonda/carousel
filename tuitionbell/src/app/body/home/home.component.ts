import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  // Services ts
  // public selectedIndex = 0;
  
  // public serviceData=[{title:"Product manager",data:"Write, share and update PRD | Add interactions and logic to transform prototypes | Manage design tasks.",img:"https://www.sattvagroup.in/wp-content/uploads/2018/05/Salarpuria-Sattva-Image-Tower.jpg"},
  //   {title:"Designer",data:"Upload designs from Sketch/PS/XD/Axure/Mockplus RP | Collaborate online - share and comment design decisions",img:"https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"},
  //   {title:"Front-end developer",data:"Get product requirements, specs, assets, interactions flows and CSS code snippets without a hitch.",img:"https://image.shutterstock.com/image-photo/beautiful-pink-flower-anemones-fresh-260nw-1028135845.jpg"}
  // ]

  // showTab(n,data){
  //   this.selectedIndex = n;
  //   data.isShow=false;
  // }
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
      img:"https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"
    },
    {
      title:"Front-end developer",
      data:"Get product requirements, specs, assets, interactions flows and CSS code snippets without a hitch.",
      img:"https://image.shutterstock.com/image-photo/beautiful-pink-flower-anemones-fresh-260nw-1028135845.jpg"
    }
]

showTab(n,data){

 this.selectedIndex = n;
 data.isShow=false;

}


// About Us
  itemsPerSlide = 3;
  singleSlideOffset = true;
  noWrap = true;
 
  slides = [
    // {image: '../../../assets/Images/bg33.jpg'},
    // {image: '../../../assets/Images/bg33.jpg'},
    // {image: '../../../assets/Images/bg35.jpg'},
    {image: '../../../assets/Images/Own1.jpg'},
    //  {image: '../../../assets/Images/Own1.jpg'},
    // {image: '../../../assets/Images/bg26.jpg'},
     {image: '../../../assets/Images/Own2.jpg'},
     {image: '../../../assets/Images/Own3.jpg'},
     {image: '..../../assets/Images/Own2.jpg'},
    {image: '../../../assets/Images/Own1.jpg'}
  ];
  //images = ['../../assets/bg26.jpg','../../assets/bg33.jpg','../../assets/bg35.jpg']
  clickfun (): void{
    console.log("click");
  }

}
