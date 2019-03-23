import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html'
})
export class ConfirmationPage {

  constructor(public navCtrl: NavController) {

  }

  private goToNextPage() {
    this.navCtrl.push(HomePage);
  }
}
