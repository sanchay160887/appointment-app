import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from "@angular/http";
import { GlobalServices } from "../../services/globalservices";
import { SignInPage } from "../signin/signin";
import 'rxjs/Rx';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [GlobalServices]
})

export class SignUpPage {

  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  password: String;
  confirmPassword: String;

  constructor(public navCtrl: NavController,
    private http: Http, private gb: GlobalServices) {
  }

  registerUser(formInstance: any) {

    if (!this.firstName) {
      this.gb.presentToast('Please enter First Name');
      return;
    }

    if (!this.email) {
      this.gb.presentToast('Please enter Email');
      return;
    }

    if (!this.phone) {
      this.gb.presentToast('Please enter Mobile Number');
      return;
    }

    if (!this.password) {
      this.gb.presentToast('Please enter Password');
      return;
    }

    if (!this.confirmPassword) {
      this.gb.presentToast('Please enter Confirm Password');
      return;
    }

    if (this.password != this.confirmPassword) {
      this.gb.presentToast('Password not matched with Confirm Password');
      return;
    }

    this.http.post(this.gb.registerUserUrl, {
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      mobileNo: this.phone,
      password: this.password
    }).map(res => res.json()).subscribe(response => {
      this.gb.presentToast(response.message);
      if (response.IsSuccess) {
        setTimeout(() => {
          this.navCtrl.push(SignInPage);
        }, 2000);
      }
    })
  }
}
