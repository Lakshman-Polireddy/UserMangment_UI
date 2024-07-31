import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../validators/password-match.directive';
import { AuthService } from '../services/auth.services';
import { User } from '../interface/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isSubmited: boolean = false;
  signupForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.fb.group({
      fName: ["", [Validators.required, Validators.pattern(/^([a-zA-Z ]){2,30}$/)]],
      lName: ["", [Validators.required, Validators.pattern(/^([a-zA-Z ]){2,30}$/)]],
      mobileNo: ["", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required], passwordMatchValidator]
    },
      {
        Validators: this.passwordMatchValidator,
      }
    );
  };


  get confirmpassword() {
    return this.signupForm.controls['confirmPassword']
  }

  passwordMatchValidator(control: FormGroup) {
    return control.get('password')?.value === control.get('confirmPassword')?.value ? false : { missmatch: true };
  }

  signUserDeatils() {
    const postData = { ...this.signupForm.value };
    delete postData.confirmPassword;
    // const { fName, lName, email, mobileNo } = this.signupForm.value;
    return this.authService.signupUserData(postData as User).subscribe(
      res => {
        //storing data into session storage
        // var JsonData = JSON.stringify(res);
        // console.log(JsonData);
        console.log(res)
        // sessionStorage.setItem('frist Name', postData.fName);
        // sessionStorage.setItem('last Name', postData.lName);
        // sessionStorage.setItem('email', postData.email);
        // sessionStorage.setItem('mobile no', postData.mobileNo);

        alert('Thanks, Your registration completed successfully!')
        this.router.navigate(['login']);

      },
      err => console.log(err)

    )
  }
}
