import { PlatformLocation } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'UserManagement';

  userNameToDisplay: string = '';
  // constructor(private platformLocation: PlatformLocation) {
  //   history.pushState(null, '', location.href);
  //   this.platformLocation.onPopState(() => {
  //     history.pushState(null, '', location.href);
  //   })
  // }

  // loggedUserData(eve: string) {
  //   this.userNameToDisplay = eve
  //   // console.log(eve);
  // }
}
