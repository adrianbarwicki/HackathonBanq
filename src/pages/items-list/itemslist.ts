import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Contacts, ContactFieldType } from '@ionic-native/contacts/ngx';
import { ContactPage } from '../contact/contact';
import axios from 'axios';

@Component({
  selector: 'page-itemslist',
  templateUrl: 'itemslist.html'
})
export class ItemsListPage {

  public allContacts: any;

  public items = [
    {
      name: "Zwarte Bonen",
      price: 2.28,
      selected: false,
    }, {
      name: "Frikandelbr",
      price: 0.81,
      selected: false,
    }, {
      name: "Tortilla C W",
      price: 2.25,
      selected: false,
    }, {
      name: "Sunfloweroil",
      price: 1.22,
      selected: false,
    }, {
      name: "AH Sour CR",
      price: 1.74,
      selected: false,
    }, {
      name: "GR Sour CR",
      price: 2.19,
      selected: false,
    }, {
      name: "GR Jala",
      price: 2.33,
      selected: false,
    }, {
      name: "Donuts",
      price: 3.55,
      selected: false,
    }, {
      name: "Cheddar Toph",
      price: 3.77,
      selected: false,
    }, {
      name: "UIEN",
      price: 3.14,
      selected: false,
    }, {
      name: "Avocado",
      price: 2.99,
      selected: false,
    }, {
      name: "Ahbio Banaan",
      price: 0.95,
      selected: false,
    }, {
      name: "Knoflook",
      price: 0.81,
      selected: false,
    }, {
      name: "Koriander",
      price: 1.74,
      selected: false,
    }, {
      name: "Rode Pepper",
      price: 0.39,
      selected: false,
    }
  ];


  constructor(public navCtrl: NavController, private contacts : Contacts, private modalController: ModalController) {
    console.log("test")
  }

  public async openModal() {
    const modal = await this.modalController.create({
      component: ContactPage,
    });
  }

  private goToNextPage() {
    this.contacts.pickContact().then((contact) => {
        try {
          const phoneNo = contact.phoneNumbers[0].value;
          const name = contact.name.formatted;
          const totalPrice = this.items.filter(item => item.selected).reduce((acc, item) => (acc + item.price), 0);
          if (confirm(`Sending a request for ${totalPrice} to ${name}`)) {
            axios.post('https://82d8fd4a.ngrok.io', {
              [phoneNo]: totalPrice
            }).then(res => {
              this.navCtrl.push("confirmation");
            }).catch(alert)
          }
        } catch (err) {
          alert("cant get a phone number")
        }
    }).catch((err) => {
        console.log('Error: ' + err);
    });
  }
}
