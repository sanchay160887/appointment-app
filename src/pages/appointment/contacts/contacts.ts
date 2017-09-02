import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';
import { GlobalServices } from "../../../services/globalservices";
@Component({
    selector: 'page-contacts',
    templateUrl: 'contacts.html',
    providers: [Contacts, GlobalServices]
})

export class AppointmentContactPage {

    public allContacts: any[];

    constructor(public navCtrl: NavController, private contact: Contacts, public platform: Platform, private gb: GlobalServices) {
        /* this.allContacts = [{
            name: 'Sonu'
        },{
            name: 'Ali'
        },{
            name: 'Ram'
        },{
            name: 'Ravi'
        }]; */
         this.platform.ready().then(() => {
            var opts = {   
                    filter : "M",                                
                    multiple: true,        
                    hasPhoneNumber:true,                             
                    fields:  [ 'displayName', 'name' ]
                };
            this.contact.find([ 'displayName', 'name' ],opts).then((contacts) => {
                this.allContacts = contacts;
                this.gb.presentToast('Please enter Mobile Number');
            }, (error) => {
                this.gb.presentToast(error);
            })
        }) 
    }

    /* AddTestingContact() {
        let contact: Contact = this.contacts.create();

        contact.name = new ContactName(null, 'Smith', 'John');
        contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
        contact.save().then(
            () => console.log('Contact saved!', contact),
            (error: any) => console.error('Error saving contact.', error)
        );

        this.contacts.find(['displayName', 'name', 'phoneNumbers', 'emails'], { filter: "", multiple: true })
            .then(data => {
                this.allContacts = data
            });
    } */

}
