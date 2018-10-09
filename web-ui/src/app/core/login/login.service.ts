import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(username: String, password: String) {

    const data =
      'username=' +
      encodeURIComponent(username.toString()) +
      '&password=' +
      encodeURIComponent(password.toString());


    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post('http://localhost:8080/api/authentication', data, { headers });
  }
}
