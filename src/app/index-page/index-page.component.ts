import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../blog-post.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  constructor(private blogPostService: BlogPostService) { }

  ngOnInit() {
  }

}
