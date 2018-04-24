import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

countdown: any = "发送验证码";
count_type: boolean = false;

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
  
  get_countdown(){
  	this.count_type = true;
  	this.countdown = 60;
  	let countime = setInterval( () => {
  		--this.countdown;
  		if(this.countdown <= 1){
  			clearInterval(countime);
  			this.count_type = false;
  			this.countdown = "发送验证码";
  		}
  	},1000)
  }

}
