import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUsersTagsComponent } from './post-users-tags.component';

describe('PostUsersTagsComponent', () => {
  let component: PostUsersTagsComponent;
  let fixture: ComponentFixture<PostUsersTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostUsersTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostUsersTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
