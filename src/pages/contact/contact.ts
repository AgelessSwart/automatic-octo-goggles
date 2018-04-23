import { Component } from '@angular/core';
import { NavController , Platform } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

login_type: boolean = false;

  constructor(public navCtrl: NavController,
  						public platform: Platform,
  						private callNumber: CallNumber) {

  }
  
  userlist(){
  	console.log("123");
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

}
