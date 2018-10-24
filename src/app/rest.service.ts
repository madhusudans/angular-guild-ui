import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get(this.baseUrl + '/api/posts');
  }

  savePost(formData) {
    return this.http.post(this.baseUrl + '/api/posts', formData);
  }

  getCommentsByPostId(id) {
    return this.http.get(this.baseUrl + '/api/comments', id);
  }

  saveComment(formData) {
    return this.http.post(this.baseUrl + '/api/comments', formData);
  }
}
