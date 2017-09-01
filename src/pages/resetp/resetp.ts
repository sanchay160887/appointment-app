import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalServices } from "../../services/globalservices";
import { DashboardPage } from "../dashboard/dashboard";
import { Http } from "@angular/http";

@Component({
  selector: 'page-resetp',
  templateUrl: 'resetp.html',
  providers: [GlobalServices]
})
export class ResetPassPage {

  oldPassword: any;
  newpassword: any;
  confirmPassword: any;

  constructor(public navCtrl: NavController,
    private http: Http, private gb: GlobalServices) {

  }

  resetPassword() {

    if (!this.oldPassword) {
      this.gb.presentToast('Please enter Password');
      return;
    }

    if (!this.confirmPassword) {
      this.gb.presentToast('Please enter Confirm Password');
      return;
    }

    if (this.newpassword != this.confirmPassword) {
      this.gb.presentToast('Password not matched with Confirm Password');
      return;
    }

    var loggedInUser = JSON.parse(this.gb.getUserInstance());

    var response = this.http.post(this.gb.updatePasswordUrl, {
      mobileNo: loggedInUser.mobileNo,
      oldPassword: this.oldPassword,
      password: this.newpassword,
    }).map(res => res.json())
      .subscribe(response => {
        this.gb.presentToast(response.message);
        if (response.IsSuccess) {
          setTimeout(() => {
            this.navCtrl.push(DashboardPage);
          }, 2000);
        }
      })
  }
}
