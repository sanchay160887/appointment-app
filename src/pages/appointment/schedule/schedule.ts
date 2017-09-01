import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { GlobalServices } from "../../../services/globalservices";
import { AppointmentRequestPage } from "../request/request";
import { Http } from "@angular/http";

@Component({
    selector: 'page-schedule',
    templateUrl: 'schedule.html',
    providers: [DatePipe, GlobalServices]
})

export class AppointmentSchedulePage {

    eventSource;
    viewTitle;
    requestedUser: any;
    requestedMobile: String;
    loggedInUser: any;

    manipulatedMonth: String;

    isToday: boolean;
    selectedMonth: Date;
    calendar = {
        mode: 'month',
        currentDate: new Date(),
        dateFormatter: {
            formatMonthViewDay: function (date: Date) {
                return date.getDate().toString();
            },
            formatMonthViewDayHeader: function (date: Date) {
                return 'MonMH';
            },
            formatMonthViewTitle: function (date: Date) {
                return 'testMT';
            },
            formatWeekViewDayHeader: function (date: Date) {
                return 'MonWH';
            },
            formatWeekViewTitle: function (date: Date) {
                return 'testWT';
            },
            formatWeekViewHourColumn: function (date: Date) {
                return 'testWH';
            },
            formatDayViewHourColumn: function (date: Date) {
                return 'testDH';
            },
            formatDayViewTitle: function (date: Date) {
                return 'testDT';
            }
        }
    };

    constructor(public navCtrl: NavController,
        private http: Http, private gb: GlobalServices) {
        this.requestedUser = new Object();
        this.requestedUser.mobileNo = '';
        this.loggedInUser = JSON.parse(this.gb.getUserInstance());

    }

    loadEvents() {
        this.eventSource = this.createRandomEvents();
    }

    onViewTitleChanged(title) {
        this.viewTitle = title;
    }

    onEventSelected(event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    }

    changeMode(mode) {
        this.calendar.mode = mode;
    }

    today() {
        this.calendar.currentDate = new Date();
    }

    onTimeSelected(ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    }

    onCurrentDateChanged(event: Date) {
        this.selectedMonth = event;
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
        this.loadAppointments();        
    }

    compareMonth(){
        var monthVal = this.calendar.currentDate.getMonth() + '-' + this.calendar.currentDate.getFullYear();
        if (!this.manipulatedMonth || this.manipulatedMonth != monthVal){
            this.manipulatedMonth = monthVal;
            return true;
        } else {
            return false;
        }
    }

    createRandomEvents() {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            } else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        console.log(events);
        return events;
    }

    onRangeChanged(ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    }

    markDisabled = (date: Date) => {
        var current = new Date();
        current.setHours(0, 0, 0);
        return date < current;
    };

    previousMonth() {
        this.calendar.currentDate = new Date(this.calendar.currentDate.setMonth(this.calendar.currentDate.getMonth() - 1));
    }

    nextMonth() {
        this.calendar.currentDate = new Date(this.calendar.currentDate.setMonth(this.calendar.currentDate.getMonth() + 1));
    }

    requestAppointment() {
        this.navCtrl.push(AppointmentRequestPage, {
            requestDate: this.calendar.currentDate,
            requestedUser: this.requestedUser
        });
    }

    loadUser() {
        this.http.post(this.gb.fetchUserByMobileUrl, {
            mobileNo: this.requestedMobile,
        }).map(res => res.json()).subscribe(response => {
            this.gb.presentToast(response.message);
            if (response.IsSuccess) {
                this.requestedUser = response.user;
                this.loadAppointments();
            }
        })
    }

    loadAppointments() {
        if (!this.compareMonth()){
            return;
        }
        var currDate = this.calendar.currentDate;
        var dateFrom = new Date(currDate.getFullYear() + '-' + currDate.getMonth() + '-01');
        var dateFromTime = dateFrom.getTime();

        var dateTo = new Date(currDate.getFullYear(), (currDate.getMonth() + 2), 0);
        var dateToTime = dateTo.getTime();

        this.http.post(this.gb.appointmentAllUrl, {
            requestedFrom: this.requestedUser._id,
            startFromTime: dateFromTime,
            endToTime: dateToTime
        }).map(res => res.json()).subscribe(response => {
            if (response.IsSuccess) {
                console.log(response.appointments);
            }

            var events = [], singleRow: any, personName : String;

             for(var a in response.appointments){
                singleRow = response.appointments[a];
                if (singleRow.requested_by._id == this.requestedUser._id && singleRow.requested_from._id == this.loggedInUser._id){
                    personName = 'You';
                } else if(singleRow.requested_from._id == this.requestedUser._id && singleRow.requested_by._id == this.loggedInUser._id){
                    personName = 'You';
                } else if (singleRow.privacy != 'public'){
                    personName = 'Hidden';
                } else if (singleRow.requested_by._id == this.requestedUser._id){
                    personName = (singleRow.requested_from.firstName + ' ' + singleRow.requested_from.lastName).trim();
                } else if (singleRow.requested_from._id == this.requestedUser._id) {
                    personName = (singleRow.requested_by.firstName + ' ' + singleRow.requested_by.lastName).trim();
                } else {
                    personName = 'Unknown';
                }
                
               events.push({
                    title: 'Appointment with ' +  personName,
                    startTime: new Date(singleRow.startTime),
                    endTime: new Date(singleRow.endTime),
                    allDay: false
                }); 
            }

            this.eventSource = events;
            
        })
    }
}