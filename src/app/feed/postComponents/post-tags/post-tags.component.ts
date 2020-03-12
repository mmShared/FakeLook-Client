import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from 'src/app/feed/feed.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-post-tags',
  templateUrl: './post-tags.component.html',
  styleUrls: ['./post-tags.component.css']
})
export class PostTagsComponent implements OnInit {

  @Input() postId: number;
  tags: any[] = [];

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedService.getTagsPost(this.postId).subscribe(list => {
      this.tags = list;
    });
  }
}
