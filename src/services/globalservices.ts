import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { SignInPage } from '../pages/signin/signin';

@Injectable()
export class GlobalServices {

  public baseUrl = 'http://localhost:4200/';
  //public baseUrl = 'http://appntscheduler.herokuapp.com/';  
  public registerUserUrl = this.baseUrl + 'users/register';
  public signinUrl = this.baseUrl + 'users/signin';
  public checkSessionUrl = this.baseUrl + 'users/checkSession';
  public signOutUrl = this.baseUrl + 'users/signout';
  public updatePasswordUrl = this.baseUrl + 'users/updatepassword';
  public fetchUserByMobileUrl = this.baseUrl + 'users/fetchByMobile';
  public requestAppointmentUrl = this.baseUrl + 'appointments/request';
  public appointmentAllUrl = this.baseUrl + 'appointments/all';
  

  constructor(private toastCtrl: ToastController) {}
  
  presentToast(message, duration = 4000, position = 'bottom') {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position,
    });

    toast.present();
  }

  getUserInstance(){
    return localStorage.getItem('currentUser');
  }

  setUserInstance(userVal){
    localStorage.setItem('currentUser', userVal);
  }
}
