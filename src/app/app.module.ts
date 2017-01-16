import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {SqllitePage} from '../pages/sqllite/sqllite';

import {UsersPage} from '../pages/users/users';
import {UserDetailsPage} from '../pages/user-details/user-details';

import {ChooseshopPage} from '../pages/chooseshop/chooseshop';
import {ChooseproductPage} from '../pages/chooseproduct/chooseproduct';
import {MainmenuPage} from '../pages/mainmenu/mainmenu';
import {PaymentPage} from '../pages/payment/payment';
import {BillcashPage} from '../pages/billcash/billcash';
import {BillchequePage} from '../pages/billcheque/billcheque';
import {BillcreditPage} from '../pages/billcredit/billcredit';
import {ShopPage} from '../pages/shop/shop';

import {GithubUsers} from '../providers/github-users';

@NgModule({
  declarations: [
    MyApp,
    SqllitePage,
    UsersPage,
    UserDetailsPage,
    ChooseshopPage,
    ChooseproductPage,
    MainmenuPage,
    PaymentPage,
    BillcashPage,
    BillchequePage,
    BillcreditPage,
    ShopPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SqllitePage,
    UsersPage,
    UserDetailsPage,
    ChooseshopPage,
    ChooseproductPage,
    MainmenuPage,
    PaymentPage,
    BillcashPage,
    BillchequePage,
    BillcreditPage,
    ShopPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, GithubUsers]

})
export class AppModule {
}
