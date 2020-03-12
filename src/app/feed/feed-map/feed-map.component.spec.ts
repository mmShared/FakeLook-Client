import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedMapComponent } from './feed-map.component';

describe('FeedMapComponent', () => {
  let component: FeedMapComponent;
  let fixture: ComponentFixture<FeedMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
