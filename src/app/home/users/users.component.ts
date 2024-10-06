import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // Mat-table
  usersList: any;
  @Output() usersData: EventEmitter<any> = new EventEmitter<any>();

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
    this.usersData.emit('Users data')
  }

  isOpend: boolean = false;

  getToggleOn() {
    this.isOpend = !this.isOpend;
  }

}
