import { Component, OnInit } from '@angular/core';
import { ContentReader } from '../util/ContentReader';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor(private _contentReader: ContentReader) { }

  ngOnInit(): void {

    if(this.width <= 768){
        this.mobile=true; 
        console.log("mobile");
    }else  if (this.width > 768 && this.width <= 992) {
      this.tablet=true;
     } else {
      this.desktop=true;
      console.log("Desktop");
     }
     
  }

  // Home Carousel
  public homeData = this._contentReader.getHomeData();

  width = window.innerWidth;
  mobile=false;
  tablet=false;
  desktop=false;

  // Blog Content
  blogs = this._contentReader.getBlogData();

}
