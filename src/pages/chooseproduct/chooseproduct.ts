import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-chooseproduct',
  templateUrl: 'chooseproduct.html'
})
export class ChooseproductPage {
  shopSelectedDetailId: string;
  shopSelectedDetailShopCode: string;
  shopSelectedDetailShopName: string;
  shopSelectedDetailShopAddress: string;
  shopSelectedDetailShopType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.shopSelectedDetailId = navParams.get('id');
    this.shopSelectedDetailShopCode = navParams.get('shopCode');
    this.shopSelectedDetailShopName = navParams.get('shopName');
    this.shopSelectedDetailShopAddress = navParams.get('shopAddress');
    this.shopSelectedDetailShopType = navParams.get('shopType');
  }

}
