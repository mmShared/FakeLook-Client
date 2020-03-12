import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedLayoutComponent } from './feed-layout/feed-layout.component';
import { FeedFilterFormComponent } from './feed-filter-form/feed-filter-form.component';
import { FeedMapComponent } from './feed-map/feed-map.component';
import { AgmCoreModule } from '@agm/core';
import { FeedContinuousComponent } from './feed-continuous/feed-continuous.component';
import { PostFormComponent } from './post-form/post-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FeedRoutingModule } from './feedRouting.mudule';
import { PostCommentComponent } from './postComponents/post-comments/post-comment.component';
import { PostTagsComponent } from './postComponents/post-tags/post-tags.component';
import { PostLikeComponent } from './postComponents/post-likes/post-like.component';
import { PostUsersTagsComponent } from './postComponents/post-users-tags/post-users-tags.component';

@NgModule({
  declarations: [FeedLayoutComponent, FeedFilterFormComponent, FeedMapComponent, 
    FeedContinuousComponent, PostFormComponent,PostCommentComponent,
    PostTagsComponent, PostLikeComponent, PostUsersTagsComponent],
  exports:[
    FeedLayoutComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FeedRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAaJCbX9CGeDcU133HBoXO5UZWBXPZ6AsE"
    }),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FeedModule { }
