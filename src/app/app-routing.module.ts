import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './home/header/header.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: "", redirectTo: '/login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'header', component: HeaderComponent },
  // { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
