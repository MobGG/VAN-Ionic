import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import { Page1 } from '../pages/page1/page1';
//import { Page2 } from '../pages/page2/page2';
import { LoginPage } from '../pages/login/login';
import { SellingPage } from '../pages/selling/selling';
import { TotalSalesPage } from '../pages/total-sales/total-sales';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { ReportProblemPage } from '../pages/report-problem/report-problem';
import { SqllitePage } from '../pages/sqllite/sqllite';

@NgModule({
  declarations: [
    MyApp,
//    Page1,
//    Page2
    LoginPage,
    SellingPage,
    TotalSalesPage,
    ContactUsPage,
    ReportProblemPage,
    SqllitePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
//    Page1,
//    Page2
    LoginPage,
    SellingPage,
    TotalSalesPage,
    ContactUsPage,
    ReportProblemPage,
    SqllitePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
