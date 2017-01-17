import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Shop_Model} from '../../models/shop_model';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})

export class ShopPage {
  shopToday: Array<Shop_Model> = [
    {
      shopId: 'id001',
      shopCode: 'sh001',
      shopName: 'ร้านเจ๊เจ๊ก',
      shopAddress: '333/3 ถนนวิภาวดีรังสิต แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900',
      shopType: 'R',
    },
    {
      shopId: 'id002',
      shopCode: 'sh002',
      shopName: 'ร้านเจ๊หนอ',
      shopAddress: '99 หมู่ 14 ถนน วิภาวดี-รังสิต แขวงจอมพล เขตจตุจักร กรุงเทพ 10900',
      shopType: 'R',
    },
    {
      shopId: 'id003',
      shopCode: 'sh003',
      shopName: 'ร้านเจ๊ซา',
      shopAddress: '173 ถนนดินสอ แขวงเสาชิงช้า เขตพระนคร กรุงเทพฯ 10200',
      shopType: 'R',
    },
    {
      shopId: 'id004',
      shopCode: 'sh004',
      shopName: 'ร้านเจ๊สี่',
      shopAddress: 'เลขที่ 17 ถนนพระรามที่ 1 เขตปทุมวัน กรุงเทพมหานคร 10330',
      shopType: 'R',
    },
  ];//init Shops
  shopTodayOriginal: Array<Shop_Model> = [
    {
      shopId: 'id001',
      shopCode: 'sh001',
      shopName: 'ร้านเจ๊เจ๊ก',
      shopAddress: '333/3 ถนนวิภาวดีรังสิต แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900',
      shopType: 'R',
    },
    {
      shopId: 'id002',
      shopCode: 'sh002',
      shopName: 'ร้านเจ๊หนอ',
      shopAddress: '99 หมู่ 14 ถนน วิภาวดี-รังสิต แขวงจอมพล เขตจตุจักร กรุงเทพ 10900',
      shopType: 'R',
    },
    {
      shopId: 'id003',
      shopCode: 'sh003',
      shopName: 'ร้านเจ๊ซา',
      shopAddress: '173 ถนนดินสอ แขวงเสาชิงช้า เขตพระนคร กรุงเทพฯ 10200',
      shopType: 'R',
    },
    {
      shopId: 'id004',
      shopCode: 'sh004',
      shopName: 'ร้านเจ๊สี่',
      shopAddress: 'เลขที่ 17 ถนนพระรามที่ 1 เขตปทุมวัน กรุงเทพมหานคร 10330',
      shopType: 'R',
    },
  ];//init Shops

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  searchInToday(searchEvent) {
    let term = searchEvent.target.value
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached users
      this.shopToday = this.shopTodayOriginal;
    } else {
      for(let i=0;i<this.shopTodayOriginal.length;i++){
        if(term == this.shopTodayOriginal[i].shopCode){
          console.log("this.shopToday = "+ i + " " + this.shopTodayOriginal[i]);
          console.log("this.shopToday = " + this.shopTodayOriginal);
          this.shopToday = [];
          this.shopToday.push(this.shopTodayOriginal[i]);
          return true;
        }else{
          this.shopToday = [];
        }
      }
      // this.githubUsers.searchUsers(term).subscribe(users => {
      //   this.users = users
      // });
    }
  }

}
