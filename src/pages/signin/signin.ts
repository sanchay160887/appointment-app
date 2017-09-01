import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from "@angular/http";
import { GlobalServices } from "../../services/globalservices";
import { SignUpPage } from "../signup/signup";
import { ForgotPassPage } from "../forgotp/forgotp";
import { Events } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
  providers: [GlobalServices]
})
export class SignInPage {

  phone: any;
  password: any;

  constructor(public navCtrl: NavController,
    private http: Http, private gb: GlobalServices, public events: Events) {

  }

  ngOnInit() {
    var response = this.http.post(this.gb.checkSessionUrl, {}).map(res => res.json())
      .subscribe(r => {
        this.gb.presentToast(r.message);
        if (r.IsSuccess) {
          this.gb.setUserInstance(JSON.stringify(r.user));
          this.navCtrl.setRoot(DashboardPage);
        } else {
          this.gb.setUserInstance('');
        }
      })
  }

  SignIn() {
    if (!this.phone) {
      this.gb.presentToast('Please enter Mobile Number');
      return;
    }

    if (!this.password) {
      this.gb.presentToast('Please enter Password');
      return;
    }

    var response = this.http.post(this.gb.signinUrl, {
      mobileNo: this.phone,
      password: this.password
    }).map(res => res.json())
      .subscribe(response => {
        this.gb.presentToast(response.message);
        if (response.IsSuccess) {
          setTimeout(() => {
            localStorage.setItem('currentUser', JSON.stringify(response.user))
            this.events.publish('user:login');
          }, 2000);
        }
      })
  }



  RedirectSignUp() {
    this.navCtrl.push(SignUpPage);
  }

  RedirectForgotPassword() {
    this.navCtrl.push(ForgotPassPage);
  }

}