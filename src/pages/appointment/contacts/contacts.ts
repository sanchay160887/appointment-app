import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Component({
    selector: 'page-contacts',
    templateUrl: 'contacts.html',
    providers: [Contacts]
})

export class AppointmentContactPage {

    public allContacts: any

    constructor(public navCtrl: NavController, private contacts: Contacts, public platform: Platform) {
        this.platform.ready().then(() => {
       var opts = {   
          filter : "M",                                
          multiple: true,        
          hasPhoneNumber:true,                             
          fields:  [ 'displayName', 'name' ]
        };
        contacts.find([ 'displayName', 'name' ],opts).then((contacts) => {
          this.allContacts = contacts;
          console.log(contacts);
        }, (error) => {
          console.log(error);
        })
    })
        /* this.contacts = contacts;
        contacts.find(['displayName', 'name', 'phoneNumbers', 'emails'], { filter: "", multiple: true })
            .then(data => {
                this.allContacts = data
            }); */

    }

    AddTestingContact() {
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
    }

}
