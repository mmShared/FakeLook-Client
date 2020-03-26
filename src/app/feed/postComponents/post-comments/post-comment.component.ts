import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from '../../feed.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Comment } from '../../Models/comment.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  constructor(private feedService: FeedService) { }

  @Input() postId: number;
  comments: any[] = [];
  comment: Comment;
  newComment: Subscription;
  
  commentGroup = new FormGroup({
    Text: new FormControl("")
  });

  ngOnInit() {
    this.feedService.getCommentsPost(this.postId).subscribe(list => {
      this.comments = list;
    });
    this.comment = {
      PostId: null,
      Text: null
    }
  }
  addComment(){
    debugger
    this.comment.Text = this.commentGroup.get('Text').value;
    this.comment.PostId = this.postId;
    this.feedService.insertCommentPost(this.comment);
    this.newComment = this.feedService.getCommentsPost(this.postId).subscribe(list =>{
      this.comments = list;
    });
  }
}
