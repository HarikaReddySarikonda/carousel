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
    }
     
  }

  // Home Carousel
  public homeData = this._contentReader.getHomeData();

  width = window.innerWidth;
  mobile=false;
  desktop=false;

  // Blog Content
  blogs = this._contentReader.getBlogData();

}
