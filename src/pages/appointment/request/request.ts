import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { GlobalServices } from "../../../services/globalservices";
import { Http } from "@angular/http";

@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
  providers: [DatePipe]
})

export class AppointmentRequestPage {

  requestedDate: any;
  requestedUser: any;
  loggedInUser: any;

  startFrom: any;
  endsOn: any;
  description: any;
  privacy: any;

  constructor(public navCtrl: NavController, public params: NavParams,
    private dtPipe: DatePipe, private http: Http, private gb: GlobalServices) {
    var paramDate = new Date(params.get('requestDate'));
    this.requestedDate = this.dtPipe.transform(paramDate, "yyyy-MM-dd");
    this.requestedUser = params.get('requestedUser')
    this.loggedInUser = JSON.parse(this.gb.getUserInstance());
  }

  requestAppointment() {
    var response = this.http.post(this.gb.requestAppointmentUrl, {
      requestedBy: this.loggedInUser._id,
      requestedFrom: this.requestedUser._id,
      requestDate: this.requestedDate,
      startTime: this.startFrom,
      endTime: this.endsOn,
      privacy: this.privacy
    }).map(res => res.json())
      .subscribe(response => {
        this.gb.presentToast(response.message);
        if (response.IsSuccess) {
          this.navCtrl.pop();
        }
      })
  }

}
