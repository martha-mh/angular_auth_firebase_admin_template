import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail
} from "firebase/auth";
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  //Inicialización del servicio
  private app = initializeApp(environment.firebase);
  private auth = getAuth(this.app);

  constructor(private router: Router) { }

  register(email: string, password: string): Promise<void> {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        sendEmailVerification(result.user);
      });
  }

  login(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        if (!result.user.emailVerified) {
          sendEmailVerification(result.user);
          this.logout();
          throw new Error('auth/email-not-verified');
        }
      });
  }

  logout(){
    this.auth.signOut();
  }

  forgotPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(this.auth, email);
  }

  isAuthenticated(): boolean {
    const user = this.auth.currentUser;
    console.log(user?.uid);
    console.log(user?.email);
    return user !== null;
  }
}
