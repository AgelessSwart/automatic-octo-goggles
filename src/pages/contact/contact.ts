import { Component } from '@angular/core';
import { NavController, Platform, ModalController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { LoginPage } from '../login/login';
import { Invite_friendPage } from '../invite_friend/invite_friend';
import { ProblemPage } from '../problem/problem';
import { MessagePage } from '../message/message';
import { Personal_centerPage } from '../personal_center/personal_center';
import { My_fundraisingPage } from '../my_fundraising/my_fundraising';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

database: SQLiteObject;
login_type: boolean = false;

  constructor(public navCtrl: NavController,
  						public platform: Platform,
  						private callNumber: CallNumber,
  						public modalCtrl: ModalController,
  						private sqlite: SQLite) {

  }
  						
	ionViewDidEnter(){
		console.log("in userpage3");
		this.platform.ready().then(() => {
			this.sqlite.create({
		    name: ' fundraising.db',//数据库名称
		    location: 'default'
		  })
			.then((db: SQLiteObject) => {
				db.executeSql("select * from login_type ORDER BY id DESC LIMIT 0,1",{}).then((data)=>{
					console.log("查询数据库");
					console.log(data);
					if(data.rows.item(0).login_type = 1){
						this.login_type = true;
					}else{
						this.login_type = false;
					}
		    },(error)=>{
		      console.log('查询错误');
		    });
				this.database = db;
			})
		})
	}
  
  userlist(data){
  	console.log("123");
  	if(data == 1){
  		this.navCtrl.push(Invite_friendPage)
  	}else if(data == 2){
  		
  	}else if(data == 3){
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
  
  messages(){
  	let modal = this.modalCtrl.create(MessagePage);
  	modal.present();
  }
  
  personal_center(){
  	let modal = this.modalCtrl.create(Personal_centerPage);
  	modal.present();
  }
  
  my_fundraising(){
  	let modal = this.modalCtrl.create(My_fundraisingPage);
  	modal.present();
  }

}
