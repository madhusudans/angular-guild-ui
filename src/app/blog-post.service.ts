import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  blogPosts = null;

  constructor(private restService: RestService) {
    this.refreshPostList();
  }


  getBlogPostById(id) {
    if (this.blogPosts != null) {
      const response = this.blogPosts.filter(post => {
        return post.id == id;
      });
      return response;
    }
    return false;
  }

  refreshPostList() {
    this.blogPosts = null;
    this.restService.getAllPosts()
    .subscribe(response => {
      this.blogPosts = response;
      this.blogPosts.reverse();
    });
  }

}
