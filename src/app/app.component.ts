import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { SqllitePage } from '../pages/sqllite/sqllite';

import { UsersPage } from '../pages/users/users';

import { ChooseshopPage } from '../pages/chooseshop/chooseshop';
import { ChooseproductPage } from '../pages/chooseproduct/chooseproduct';
import { MainmenuPage } from '../pages/mainmenu/mainmenu';
import { BillcashPage } from '../pages/billcash/billcash';
import { BillchequePage } from '../pages/billcheque/billcheque';
import { BillcreditPage } from '../pages/billcredit/billcredit';
import {ShopPage} from '../pages/shop/shop';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = ChooseshopPage;
  // rootPage: any = ChooseproductPage;
  // rootPage: any = MainmenuPage;
  // rootPage: any = BillcashPage;
  // rootPage: any = BillchequePage;
  // rootPage: any = BillcreditPage;
  rootPage: any = ShopPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Sale Order', component: ChooseshopPage },
      { title: 'SQL Lite', component: SqllitePage },
      { title: 'Users', component: UsersPage },
      { title: 'Main Menu', component: MainmenuPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
