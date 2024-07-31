import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserProfileDialogComponent } from '../user-profile-dialog/user-profile-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName: string;

  constructor(private router: Router, public dialog: MatDialog) { }
  onlogOut() {
    sessionStorage.clear();
    return this.router.navigate(['/login'])
  }

  //Setting Username in header
  ngOnInit(): void {
    let sStorageGetName = sessionStorage.getItem('email');
    console.log(sStorageGetName);
    this.userName = sStorageGetName;

  }

  //UserProfile-dialog
  openUserProfile(): void {
    const dialogRef = this.dialog.open(UserProfileDialogComponent, {
      width: '400px',

      data: {
        name: 'ramu',
        email: 'ramu@gmail.com',
        // Add more user data as needed
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  isOpend: boolean = false;

  getToggleOn() {
    this.isOpend = !this.isOpend;
  }


}
