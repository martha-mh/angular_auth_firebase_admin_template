import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import {AuthenticateService} from '../../../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [SharedModule]
})
export class LoginComponent {
  //Para login
  public email: string = '';
  public password: string = '';
  public message: string = '';
  public type: string = '';
  public loadinglogin: boolean = false;

  //Para forgot
  public visible = false;
  public emailforgot: string = '';
  public messagemodal: string = '';
  public typemodal: string = '';
  public loadingforgot: boolean = false;


  constructor(private authService: AuthenticateService, private router: Router) { }

  login() {
    if (this.email === '' || this.password === '') {
      this.message = "Error: Enter a valid email address or password.";
      this.type = "danger";
    }
    else {
      this.loadinglogin = true;
      this.authService.login(this.email, this.password)
        .then(() => {
          this.loadinglogin = false;
          this.router.navigate(['/dashboard']);
        })
        .catch((error) => {
          if (error.message === 'auth/email-not-verified') {
            this.message = "Your email isn't confirmed. Please verify your email to confirm your account.";
            this.type = "warning";
          }
          else {
            this.message = "Error: " + error.message;
            this.type = "danger";
          }
          this.loadinglogin = false;
        });
    }
  }

  toggleModal() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  forgotpassword() {
    if (this.emailforgot === '') {
      this.messagemodal = "Error: Enter a valid email address";
      this.typemodal = "danger";
    }
    else {
      this.loadingforgot = true;
      this.authService.forgotPassword(this.emailforgot)
        .then(() => {
          this.messagemodal = "Password reset email sent.";
          this.typemodal = "success";
          this.loadingforgot = false;
        })
        .catch((error) => {
          this.messagemodal = 'Error: ' + error.message;
          this.typemodal = "danger";
          this.loadingforgot = false;
        });
    }
  }

}
