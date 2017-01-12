import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Shop} from '../../models/shop';
import {ChooseproductPage} from '../chooseproduct/chooseproduct';
@Component({
  selector: 'page-chooseshop',
  templateUrl: 'chooseshop.html'
})
export class ChooseshopPage {

  shops: Array<Shop> = [
    {
      id: 'id001',
      shopCode: 'shop001',
      shopName: 'ร้านเจ๊เจ๊ก',
      shopAddress: '333/3 ถนนวิภาวดีรังสิต แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900',
      shopType: 'R',
    },
    {
      id: 'id002',
      shopCode: 'shop002',
      shopName: 'ร้านเจ๊หนอ',
      shopAddress: '99 หมู่ 14 ถนน วิภาวดี-รังสิต แขวงจอมพล เขตจตุจักร กรุงเทพ 10900',
      shopType: 'R',
    },
    {
      id: 'id003',
      shopCode: 'shop003',
      shopName: 'ร้านเจ๊ซา',
      shopAddress: '173 ถนนดินสอ แขวงเสาชิงช้า เขตพระนคร กรุงเทพฯ 10200',
      shopType: 'R',
    },
    {
      id: 'id004',
      shopCode: 'shop004',
      shopName: 'ร้านเจ๊สี่',
      shopAddress: 'เลขที่ 17 ถนนพระรามที่ 1 เขตปทุมวัน กรุงเทพมหานคร 10330',
      shopType: 'R',
    },
  ];//init Shops
  shopSelectedId: string;
  shopSelectedDetailId: string;
  shopSelectedDetailShopCode: string;
  shopSelectedDetailShopName: string;
  shopSelectedDetailShopAddress: string;
  shopSelectedDetailShopType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getShopDetail() {
    console.log("shop changed");
    console.log("shopSelectedId = " + this.shopSelectedId);
    for (let i = 0; i < this.shops.length; i++) {
      if (this.shops[i].id == this.shopSelectedId) {
        this.shopSelectedDetailId = this.shops[i].id;
        this.shopSelectedDetailShopCode = this.shops[i].shopCode;
        this.shopSelectedDetailShopName = this.shops[i].shopName;
        this.shopSelectedDetailShopAddress = this.shops[i].shopAddress;
        this.shopSelectedDetailShopType = this.shops[i].shopType;
      }
    }
  }

  chooseProduct() {
    console.log("chooseProduct");

    this.navCtrl.push(ChooseproductPage, {
      id: this.shopSelectedDetailId,
      shopCode: this.shopSelectedDetailShopCode,
      shopName: this.shopSelectedDetailShopName,
      shopAddress: this.shopSelectedDetailShopAddress,
      shopType: this.shopSelectedDetailShopType,
    });
  }
}
