import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-juankuan',
  templateUrl: 'juankuan.html'
})
export class JuankuanPage {


  constructor(public navCtrl: NavController,
  						public storage: Storage) {

  }
  
	ionViewWillEnter(){
		this.storage.ready().then(() => {
//			this.storage.set('flag', 1);
		})
	}
  backbtn(){
  	console.log("back");
  	this.navCtrl.pop();
  }
  

}
