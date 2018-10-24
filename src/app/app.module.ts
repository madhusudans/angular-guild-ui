import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogPostSummaryComponent } from './blog-post-summary/blog-post-summary.component';
import { NewBlogPostFormComponent } from './new-blog-post-form/new-blog-post-form.component';

const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'blog/:id', component: BlogPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexPageComponent,
    BlogPageComponent,
    BlogPostSummaryComponent,
    NewBlogPostFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
