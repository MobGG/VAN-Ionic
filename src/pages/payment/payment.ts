import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BillcashPage} from '../billcash/billcash';
import {BillchequePage} from '../billcheque/billcheque';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {
  BillcashPage = BillcashPage;
  BillchequePage = BillchequePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

}
