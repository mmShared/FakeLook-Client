import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from '../../feed.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Comment } from '../../Models/comment.model';

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
    this.comment.Text = this.commentGroup.get('Text').value;
    this.comment.PostId = this.postId;
    this.feedService.insertCommentPost(this.comment);
    this.comments.push(this.comment);
  }
}
