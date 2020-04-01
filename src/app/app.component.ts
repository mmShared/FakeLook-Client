import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FakeLook-Client';

  loggedUser : {} = {};
  ngOnInit() {
    var stringUserStorage = sessionStorage.getItem("storageCurrentUser");
    this.loggedUser = JSON.parse(stringUserStorage); 
  }
}