import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedContinuousComponent } from './feed-continuous.component';

describe('FeedContinuousComponent', () => {
  let component: FeedContinuousComponent;
  let fixture: ComponentFixture<FeedContinuousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedContinuousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedContinuousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
