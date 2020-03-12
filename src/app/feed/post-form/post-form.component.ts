import { Component,OnInit,EventEmitter,Output } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { from } from "rxjs";
import { post } from "../Models/post.model";
import { FeedService } from "../feed.service";
import { FeedMapComponent } from "../feed-map/feed-map.component";

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

  postFormGroup = new FormGroup({
    Photo: new FormControl("", [Validators.required]),
    Text: new FormControl(""),
    TagUsers: new FormControl(""),
    Tag: new FormControl("")
  });

  constructor(
    private modalService: NgbModal,
    private feedService: FeedService
  ) {}

  ngOnInit() {
    if (!this.tempPost) {
      this.createNewPost();
    }
    this.findPosition();
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
    //console.log(file);
  }

  addTagTolist() {
    this.listTags.push(this.postFormGroup.get("Tag").value);
    this.postFormGroup.get("Tag").patchValue("");
  }

  save() {
    debugger;
    var formData = new FormData();
    formData.append("Photo", this.images);
    this.feedService.uploadeImage(formData);
    var json = JSON.stringify(this.listTags);
    this.tempPost.Tags = json;
    this.tempPost.Text = this.postFormGroup.get("Text").value;
    this.tempPost.Photo = this.images.name;
    this.tempPost.PublishDate = new Date(Date.now());
    this.tempPost.UserId = 1;
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
