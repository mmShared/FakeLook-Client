import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { post } from '../Models/post.model';
import { FeedMapComponent } from '../feed-map/feed-map.component';
import { FeedContinuousComponent } from '../feed-continuous/feed-continuous.component';
@Component({
  selector: 'app-feed-layout',
  templateUrl: './feed-layout.component.html',
  styleUrls: ['./feed-layout.component.css']
})
export class FeedLayoutComponent implements OnInit {

  constructor() { }

  // feedMap: FeedMapComponent;
  // feedContinuous: FeedContinuousComponent;

  showMapFeed = true;
  showContinuousFeed = true;

  ngOnInit() {
  }

  navLinks = [
    {
      path: 'map',
      label: 'Feed view'
    },
    {
      path: 'feed',
      label: 'Map View'
    }
  ];

  clickMapFeed(){
    this.showMapFeed = true;
    this.showContinuousFeed = false;
  }

  clickContinuousFeed(){
    this.showMapFeed = false;
    this.showContinuousFeed = true;
  }
}
