import { Component, OnInit, Input, SimpleChanges, OnDestroy } from "@angular/core";
import { Observable, Subject, Subscription } from "rxjs";
import { post } from "../Models/post.model";
import { FeedService } from "../feed.service";

@Component({
  selector: "app-feed-map",
  templateUrl: "./feed-map.component.html",
  styleUrls: ["./feed-map.component.css"]
})
export class FeedMapComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.posts$.unsubscribe();
  }
  constructor(private feedService: FeedService) {}
  latitude; //32.09719978760402;
  longitude; //34.826273918151855;
  //המיקום שלי (המכללה) זה המספרים האלה
  radiusLocation = 4;
  posts$: Subscription;
  posts: post[] = [];

  @Input() postUpdated: post;

  onMapClick(event) {
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }
  count = 0;
  ngOnInit() {
      this.feedService.getAllPosts();
      this.posts$ = this.feedService.post$.subscribe(list => {
      this.posts = list;
    });
    this.findPosition();
  }
  findPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    } 
    else {
      alert("not support!");
    }
  }
  test(){
    debugger
  }
}
