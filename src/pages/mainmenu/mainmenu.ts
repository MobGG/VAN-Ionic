import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ChooseshopPage} from '../chooseshop/chooseshop';
import {PaymentPage} from '../payment/payment';
import {ShopPage} from '../shop/shop';

@Component({
  selector: 'page-mainmenu',
  templateUrl: 'mainmenu.html'
})
export class MainmenuPage {
  // ChooseshopPage = ChooseshopPage;
  PaymentPage = PaymentPage;
  ShopPage = ShopPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainmenuPage');
  }

}
