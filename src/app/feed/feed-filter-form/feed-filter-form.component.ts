import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { dateTime } from '../Models/dateTime.model';
import { FeedService } from '../feed.service';
import { post } from '../Models/post.model';
import { Observable, Subscription } from 'rxjs';
import { users } from '../Models/users.model';

@Component({
  selector: 'app-feed-filter-form',
  templateUrl: './feed-filter-form.component.html',
  styleUrls: ['./feed-filter-form.component.css']
})
export class FeedFilterFormComponent implements OnInit {

  newDate: dateTime;
  users$ : Subscription;
  users: users[] = [];

  constructor(private feedService: FeedService) { }

  filterFormGroup = new FormGroup({
    DateFrom: new FormControl(''),
    DateTo : new FormControl(''),
    Radius: new FormControl(''),
    Tag: new FormControl(''),
    TaggedUsers: new FormControl('')
  })

  ngOnInit() {
    debugger
    this.createNewDateTime();
    this.users$ = this.feedService.getAllUsers().subscribe(list =>{
      this.users = list;
      console.log(this.users);
    })
  }
  serachByTime(){
    this.newDate.dateFrom = this.filterFormGroup.get('DateFrom').value;
    this.newDate.dateTo = this.filterFormGroup.get('DateTo').value;
    this.feedService.getAllPostsByDateTime(this.newDate);
  }
  serachByTags(){
    var tag = this.filterFormGroup.get('Tag').value;
    console.log(tag)
    this.feedService.getAllPostsByTags(tag);
  }
  createNewDateTime(){
    this.newDate = {
      dateFrom: null,
      dateTo: null
    }
  }
}
