import { Component,OnInit,EventEmitter,Output } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { from, Subscription } from "rxjs";
import { post } from "../Models/post.model";
import { FeedService } from "../feed.service";
import { FeedMapComponent } from "../feed-map/feed-map.component";
import { User } from "../../authentication/models/user.model";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { users } from '../Models/users.model';

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  tempPost: post;
  @Output() newPost = new EventEmitter<post>();
  images;
  listTags: string[] = [];
  users$: Subscription;
  listUsers: users[] = [];
  formData = new FormData();
  loggedUser: User;
  stringUserStorage = sessionStorage.getItem("storageCurrentUser");

  postFormGroup = new FormGroup({
    Photo: new FormControl("", [Validators.required]),
    Text: new FormControl(""),
    TagUsers: new FormControl(""),
    Tag: new FormControl("")
  });

  constructor(private modalService: NgbModal,private feedService: FeedService) {}

  ngOnInit() {
    if (!this.tempPost) {
      this.createNewPost();
    }
    this.findPosition();
    this.loggedUser = JSON.parse(this.stringUserStorage); 
    this.users$ = this.feedService.getAllUsers().subscribe(res =>{
      this.listUsers = res;
    });
  }

  open(content) {
    this.modalService.open(content);
  }

  findPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.tempPost.LocationX = position.coords.latitude;
        this.tempPost.LocationY = position.coords.longitude;
      });
    }
  }

  selectImage(event) {
    const file = event.target.files[0];
    this.images = file;
  }

  addTagTolist() {
    this.listTags.push(this.postFormGroup.get("Tag").value);
    this.postFormGroup.get("Tag").patchValue("");
  }

  save() {
    this.formData.append("Photo", this.images);
    this.feedService.uploadeImage(this.formData);
    var json = JSON.stringify(this.listTags);
    this.tempPost.Tags = json;
    this.tempPost.Text = this.postFormGroup.get("Text").value;
    this.tempPost.Photo = this.images.name;
    this.tempPost.PublishDate = new Date(Date.now());
    this.tempPost.UserId = this.loggedUser.Id;
    this.feedService.insertPost(this.tempPost);
    this.postFormGroup.reset();
    this.modalService.dismissAll();
  }

  createNewPost() {
    this.tempPost = {
      Photo: null,
      LocationX: null,
      LocationY: null,
      Text: "",
      PublishDate: null,
      UserId: null,
      Tags: {}
    };
  }
}
