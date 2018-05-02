import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { JuankuanPage } from '../pages/juankuan/juankuan';
import { LoginPage } from '../pages/login/login';
import { ConsultantPage } from '../pages/consultant/consultant';
import { SubsucPage } from '../pages/subsuc/subsuc';
import { NewprojectPage } from '../pages/newproject/newproject';
import { Invite_friendPage } from '../pages/invite_friend/invite_friend';
import { ExpresswayPage } from '../pages/expressway/expressway';
import { ProblemPage } from '../pages/problem/problem';
import { MessagePage } from '../pages/message/message';
import { Personal_centerPage } from '../pages/personal_center/personal_center';
import { My_fundraisingPage } from '../pages/my_fundraising/my_fundraising';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';
import { SQLite } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    JuankuanPage,
    LoginPage,
    ConsultantPage,
    SubsucPage,
    NewprojectPage,
    Invite_friendPage,
    ExpresswayPage,
    ProblemPage,
    MessagePage,
    Personal_centerPage,
    My_fundraisingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
    	backButtonText: '返回', iconMode: 'ios',
      mode: 'ios',
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    JuankuanPage,
    LoginPage,
    ConsultantPage,
    SubsucPage,
    NewprojectPage,
    Invite_friendPage,
    ExpresswayPage,
    ProblemPage,
    MessagePage,
    Personal_centerPage,
    My_fundraisingPage
  ],
  providers: [
    StatusBar,
    CallNumber,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
