import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import {AuthenticateService} from '../../../services/authenticate.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [SharedModule]
})
export class RegisterComponent {
  public email: string = '';
  public password: string = '';
  public repeatpassword: string = '';
  public message: string = '';
  public type: string = '';
  public loadingregister: boolean = false;

  constructor(private authService: AuthenticateService) { }

  register() {
    if (this.email === '' || this.password === '' || this.repeatpassword === '') {
      this.message = "Error: Enter a valid email address or password.";
      this.type = "danger";
    } else if (this.password !== this.repeatpassword) {
      this.message = "Error: Password and Confirm Password Field do not match.";
      this.type = "danger";
    } else {
      this.loadingregister = true;
      this.authService.register(this.email, this.password)
        .then(() => {
          this.message = "The user was registered successfully! Please verify your email to confirm your account.";
          this.type = "success";
          this.loadingregister = false;
        })
        .catch((error) => {
          this.message = "Error: " + error.message;
          this.type = "danger";
          this.loadingregister = false;
        });
    }
  }

}
