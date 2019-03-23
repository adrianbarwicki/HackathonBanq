import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-itemslist',
  templateUrl: 'itemslist.html'
})
export class ItemsListPage {
  constructor(public navCtrl: NavController) {
  }

  private goToNextPage() {
    this.navCtrl.push("confirmation");
  }
}
