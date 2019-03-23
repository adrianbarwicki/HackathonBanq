import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contacts, ContactFieldType } from '@ionic-native/contacts/ngx';

@Component({
  selector: 'page-itemslist',
  templateUrl: 'itemslist.html'
})
export class ItemsListPage {

  public allContacts: any;

  constructor(public navCtrl: NavController, private contacts : Contacts) {
    console.log("test")
  }

  

  private goToNextPage() {
    this.navCtrl.push("confirmation");
  }
}
