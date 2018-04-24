import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-subsuc',
  templateUrl: 'subsuc.html'
})
export class SubsucPage {

countdown: any = "发送验证码";

  constructor(public navCtrl: NavController,
  						public storage: Storage) {

  }
  
  backbtn(){
  	console.log("back");
  	this.navCtrl.setRoot(TabsPage);
  }
  

}
