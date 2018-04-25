import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-invite_friend',
  templateUrl: 'invite_friend.html'
})
export class Invite_friendPage {

count_type: boolean = false;

  constructor(public navCtrl: NavController,
  						public storage: Storage) {

  }
  
  backbtn(){
  	console.log("back");
  	this.navCtrl.pop();
  }
  
}
