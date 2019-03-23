import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contacts, ContactFieldType } from '@ionic-native/contacts/ngx';

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
    }, {
      name: "Frikandelbr",
      price: 0.81,
    }, {
      name: "Tortilla C W",
      price: 2.25,
    }, {
      name: "Sunfloweroil",
      price: 1.22,
    }, {
      name: "AH Sour CR",
      price: 1.74,
    }, {
      name: "GR Sour CR",
      price: 2.19,
    }, {
      name: "GR Jala",
      price: 2.33,
    }, {
      name: "Donuts",
      price: 3.55,
    }, {
      name: "Cheddar Toph",
      price: 3.77,
    }, {
      name: "UIEN",
      price: 3.14,
    }, {
      name: "Avocado",
      price: 2.99,
    }, {
      name: "Ahbio Banaan",
      price: 0.95,
    }, {
      name: "Knoflook",
      price: 0.81,
    }, {
      name: "Koriander",
      price: 1.74,
    }, {
      name: "Rode Pepper",
      price: 0.39
    }
  ];


  constructor(public navCtrl: NavController, private contacts : Contacts) {
    console.log("test")
  }

  

  private goToNextPage() {
    this.navCtrl.push("confirmation");
  }
}
