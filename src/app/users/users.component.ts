import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth.services';
import { User } from '../interface/auth';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // Mat-table
  usersList: any;
  columns: ['id', 'fName', 'lName', 'email', 'mobileNo']

  constructor(private authService: AuthService) {
    this.authService.getUserDataFromDB().subscribe(
      res => {
        console.log(res);
        this.usersList = res;

      }
    )
  }

  ngOnInit(): void {
    this.usersList;
  }

  isOpend: boolean = false;

  getToggleOn() {
    this.isOpend = !this.isOpend;
  }

}
