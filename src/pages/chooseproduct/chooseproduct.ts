import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Store} from '../../models/store';
import {GroupProduct} from '../../models/groupProduct';

@Component({
  selector: 'page-chooseproduct',
  templateUrl: 'chooseproduct.html'
})
export class ChooseproductPage {
  stores: Array<Store> = [
    {
      storeId: 'stid001',
      storeCode: 'stcd001',
      storeName: 'R001',
    },
    {
      storeId: 'stid002',
      storeCode: 'stcd002',
      storeName: 'R002',
    },
    {
      storeId: 'stid003',
      storeCode: 'stcd003',
      storeName: 'R003',
    },
    {
      storeId: 'stid004',
      storeCode: 'stcd004',
      storeName: 'R004',
    },
  ];//init Store
  groupProduct: Array<GroupProduct> = [
    {
      groupProductId: 'gpid001',
      groupProductCode: 'gpcd001',
      groupProductName: 'มาม่า',
    },
    {
      groupProductId: 'gpid002',
      groupProductCode: 'gpcd002',
      groupProductName: 'ซื่อสัตย์',
    },
    {
      groupProductId: 'gpid003',
      groupProductCode: 'gpcd003',
      groupProductName: 'มองต์ เฟลอ',
    },
    {
      groupProductId: 'gpid004',
      groupProductCode: 'gpcd004',
      groupProductName: 'ยูนิฟ',
    },
  ];//init GroupProduct
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

  getStore(){
    console.log("getStore");
  }

}
