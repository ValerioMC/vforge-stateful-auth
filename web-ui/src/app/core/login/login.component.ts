import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private loginService: LoginService, private router: Router) {

  }

  login(): void {
    this.loginService.login(this.username, this.password).subscribe(
      () => {
        this.router.navigate([ 'success' ]);
      }, () => console.log('error')
    );
  }
}
