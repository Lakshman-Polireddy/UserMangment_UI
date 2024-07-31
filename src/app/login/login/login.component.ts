import { Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, Route } from '@angular/router';
import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSubmited: boolean = false;
  loginForm: FormGroup;
  loggedUserName: string;

  // @Output() loggedUser = new EventEmitter<string>;

  // onLoggedUser() {
  //   this.loggedUser.emit(this.loggedUserName)
  // }

  @ViewChild('myEmail') myInputRef: ElementRef<HTMLInputElement>;

  getInputValue() {
    if (this.myInputRef) {
      const value = this.myInputRef.nativeElement.value;
      this.loggedUserName = value;
      // console.log(this.loggedUser);

    }
  }

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: new FormControl(" ", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    })
  };

  ngOnInit(): void {


  }

  onUserLogin() {
    const { email, password } = this.loginForm.value;
    return this.authService.getUserbyEmail(email as string).subscribe(
      res => {
        if (res.length > 0 && res[0].password === password) {
          sessionStorage.setItem('email', email);
          this.router.navigate(['/home'])
        } else {
          console.log(`${email} and ${password} is worning`);
          alert('Please enter valid credentials')
        }
      },
      err => {
        console.log('Something went wrong please trying again later', err);
      }
    )
  }

}
