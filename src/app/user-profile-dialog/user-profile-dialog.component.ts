import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
import { AuthService } from '../services/auth.services';


@Component({
  selector: 'app-user-profile-dialog',
  templateUrl: './user-profile-dialog.component.html',
  styleUrls: ['./user-profile-dialog.component.css']
})
export class UserProfileDialogComponent implements OnInit {

  userData: any;

  constructor(
    public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public user: any, private authService: AuthService
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }



}
