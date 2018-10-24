import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPostService } from '../blog-post.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  post: object = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogPostService: BlogPostService) {
    }

  ngOnInit() {
    if (this.blogPostService.getBlogPostById(this.route.snapshot.params.id).length > 0) {
      this.post = this.blogPostService.getBlogPostById(this.route.snapshot.params.id)[0];
    } else {
      this.router.navigate(['']);
    }
  }

}
