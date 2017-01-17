import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BillcashPage} from '../billcash/billcash';
import {BillchequePage} from '../billcheque/billcheque';
import {BillcreditPage} from '../billcredit/billcredit';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {
  BillcashPage = BillcashPage;
  BillchequePage = BillchequePage;
  BillcreditPage = BillcreditPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

}
