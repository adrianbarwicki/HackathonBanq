import { AboutPage } from './../pages/about/about';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Camera } from '@ionic-native/camera/ngx';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ItemsListPage } from '../pages/items-list/itemslist';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Contacts } from '@ionic-native/contacts/ngx';
import { ConfirmationPage } from '../pages/confirmation/confirmation';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ItemsListPage,
    ConfirmationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(
      MyApp, {}, {
        links: [
          { component: HomePage, name: 'Home', segment: '' },
          { component: AboutPage, name: 'about', segment: 'about' },
          { component: ItemsListPage, name: 'itemslist', segment: 'itemslist' },
          { component: ConfirmationPage, name: 'confirmation', segment: 'confirmation' },
        ]
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ItemsListPage,
    ConfirmationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Contacts,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
