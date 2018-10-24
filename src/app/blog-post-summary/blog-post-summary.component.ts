import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post-summary',
  templateUrl: './blog-post-summary.component.html',
  styleUrls: ['./blog-post-summary.component.css']
})
export class BlogPostSummaryComponent implements OnInit {

  @Input() id: number = null;
  @Input() creator: string = null;
  @Input() title: string = null;
  @Input() content: string = null;

  constructor() { }

  ngOnInit() {
  }

}
