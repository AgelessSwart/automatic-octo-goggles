import { Component, ViewChild } from '@angular/core';
import { NavController, Events, Tabs, ModalController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { JuankuanPage } from '../juankuan/juankuan';

@Component({
	selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

@ViewChild('myTabs') tabRef: Tabs;

  tabHome = HomePage;
  tabJk: any = AboutPage;
  tabMy = ContactPage;

  constructor(public navCtrl: NavController,
			  public events: Events,
  			  public modalCtrl: ModalController,) {
  }
  backTabs(idx = 0){
  	this.tabRef.select(idx);
  }
  
  selectFriend() {
  	// 声明一个modal
  	let modal = this.modalCtrl.create(JuankuanPage);
  	// 弹出modal
  	modal.present();
  }
  
}
