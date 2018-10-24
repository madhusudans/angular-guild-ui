import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { BlogPostService } from '../blog-post.service';

@Component({
  selector: 'app-new-blog-post-form',
  templateUrl: './new-blog-post-form.component.html',
  styleUrls: ['./new-blog-post-form.component.css']
})
export class NewBlogPostFormComponent implements OnInit {

  newBlogPostForm = this.fb.group({
    title: ['', Validators.required],
    creator: ['', Validators.required],
    content: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private restService: RestService,
    private blogPostService: BlogPostService
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Form submitted!');
    if (this.newBlogPostForm.valid) {
      this.restService.savePost(this.newBlogPostForm.value)
      .subscribe(response => {
        console.log(response);
        this.blogPostService.refreshPostList();
        this.newBlogPostForm.reset();
      });
    }
  }

}
