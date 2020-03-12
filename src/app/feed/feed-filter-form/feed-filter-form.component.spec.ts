import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedFilterFormComponent } from './feed-filter-form.component';

describe('FeedFilterFormComponent', () => {
  let component: FeedFilterFormComponent;
  let fixture: ComponentFixture<FeedFilterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedFilterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
