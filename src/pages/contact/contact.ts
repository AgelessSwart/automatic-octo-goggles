import { Component } from '@angular/core';
import { NavController, Platform, ModalController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

import { LoginPage } from '../login/login';
import { Invite_friendPage } from '../invite_friend/invite_friend';
import { ProblemPage } from '../problem/problem';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

login_type: boolean = false;

  constructor(public navCtrl: NavController,
  						public platform: Platform,
  						private callNumber: CallNumber,
  						public modalCtrl: ModalController,) {

  }
  
  userlist(data){
  	console.log("123");
  	if(data == 1){
//		let modal = this.modalCtrl.create(Invite_friendPage);
//		modal.present();
  		this.navCtrl.push(Invite_friendPage)
  	}else if(data == 2){
  		
  	}else if(data == 3){
//		let modal = this.modalCtrl.create(ProblemPage);
//		modal.present();
  		this.navCtrl.push(ProblemPage)
  	}
  }
  callnumber(){
  	console.log("callnumber");
  	if(!this.platform.ready()){
  		window.location.href = "tel://10086";
  	}
  	this.platform.ready().then(() =>{
		  this.callNumber.callNumber("400-686-1179", true)
			  .then(res => console.log('Launched dialer!', res))
			  .catch(err => console.log('Error launching dialer', err));
  	})
  }
  
  login(){
  	let modal = this.modalCtrl.create(LoginPage);
  	modal.present();
  }

}
