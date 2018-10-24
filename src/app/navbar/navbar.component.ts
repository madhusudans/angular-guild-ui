import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../blog-post.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private blogPostService: BlogPostService) { }

  ngOnInit() {
  }

}
