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

    for (let i = 0; i < this.blogsContent.length; i++) {
      this.blogs[i] = this.blogsContent[i].description.substring(0,450) + "..";      
    }     
  }

  // Home Carousel
  public homeData = this._contentReader.getHomeData();

  width = window.innerWidth;
  mobile=false;
  desktop=false;

  // Blog Content
  blogsContent = this._contentReader.getBlogData();
  blogs = [];
}
