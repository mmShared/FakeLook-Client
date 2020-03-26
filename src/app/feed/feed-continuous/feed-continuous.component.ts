import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Observable, Subscription, from } from "rxjs";
import { FeedService } from "../feed.service";
import { post } from "../Models/post.model";

@Component({
  selector: "app-feed-continuous",
  templateUrl: "./feed-continuous.component.html",
  styleUrls: ["./feed-continuous.component.css"]
})
export class FeedContinuousComponent implements OnInit, OnDestroy {
  
  ngOnDestroy(): void {
    this.posts$.unsubscribe();
  }
  constructor(private feedService: FeedService) {}

  posts$: Subscription;
  posts: post[] = [];
  showFilterForm = false;

  ngOnInit() {
    this.feedService.getAllPosts();
    this.posts$ = this.feedService.post$.subscribe(list => {
      this.posts = list;
    });
  }
}
