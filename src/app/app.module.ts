import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ItemsListPage } from '../pages/items-list/itemslist';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
