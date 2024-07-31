import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../interface/auth";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }
    signupUserData(userDeatils: User) {
        return this.http.post('http://localhost:3000/users', userDeatils);
    }

    getUserbyEmail(email: string): Observable<User[]> {
        return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
    }

    // getUserbyfName(fName: string): Observable<User[]> {
    //     return this.http.get<User[]>(`${this.baseUrl}/users?email=${fName}`);
    // }

    getUserDataFromDB() {
        return this.http.get('http://localhost:3000/users');
    }
}