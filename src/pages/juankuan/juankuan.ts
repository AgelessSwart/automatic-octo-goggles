import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { NewprojectPage } from '../newproject/newproject';

@Component({
  selector: 'page-juankuan',
  templateUrl: 'juankuan.html'
})
export class JuankuanPage {


  constructor(public navCtrl: NavController,
  						public storage: Storage,
  						public modalCtrl: ModalController) {

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
  NewProject(){
  	let modal = this.modalCtrl.create(NewprojectPage);
  	modal.present();
  }

}
