import { Component, HostBinding, Input } from '@angular/core';
import { AuthService } from "../auth.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginModel } from "../models/login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  @HostBinding('class') @Input('class') classList: string = 'container full-width';

  public loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required),
  });

  public get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  public get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  public isLoginFailed: boolean = false;

  constructor(
    private authService: AuthService
  ) {
  }

  public login(): void {
    let data = new LoginModel();
    data.email = this.email.value;
    data.password = this.password.value;
    this.authService.login(data).subscribe((result) => {
      this.isLoginFailed = !result;
    });
  }

}
