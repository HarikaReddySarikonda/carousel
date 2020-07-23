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
  }
  // Home Carousel
  public homeData = this._contentReader.getHomeData();


}
