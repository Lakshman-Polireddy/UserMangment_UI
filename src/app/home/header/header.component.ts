import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserProfileDialogComponent } from 'src/app/user-profile-dialog/user-profile-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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




}
