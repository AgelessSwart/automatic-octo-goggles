import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {

count_type: boolean = false;

  constructor(public navCtrl: NavController,
  						public storage: Storage) {

  }
  
  backbtn(){
  	console.log("back");
  	this.navCtrl.pop();
  }
  

}
