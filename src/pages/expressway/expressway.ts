import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { SubsucPage } from '../subsuc/subsuc';  

@Component({
  selector: 'page-expressway',
  templateUrl: 'expressway.html'
})
export class ExpresswayPage {

count_type: boolean = false;

  constructor(public navCtrl: NavController,
  						public storage: Storage,
  						public modalCtrl: ModalController) {

  }
  
  backbtn(){
  	console.log("back");
  	this.navCtrl.pop();
  }
  
  subsuc(){
  	let modal = this.modalCtrl.create(SubsucPage);
  	modal.present();
  }
  
  datetime(time){
  	console.log(time);
  }
  
}
