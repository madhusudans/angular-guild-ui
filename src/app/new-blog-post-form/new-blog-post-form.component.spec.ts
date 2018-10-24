import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBlogPostFormComponent } from './new-blog-post-form.component';

describe('NewBlogPostFormComponent', () => {
  let component: NewBlogPostFormComponent;
  let fixture: ComponentFixture<NewBlogPostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBlogPostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBlogPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
