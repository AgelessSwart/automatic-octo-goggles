import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { NavController, ToastController, AlertController, Platform, Tabs  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	
@ViewChild('Tabs') mytab : Tabs;
database: SQLiteObject;
countdown: any = "发送验证码";
count_type: boolean = false;
phone_number: any;
ver_cord: any;

  constructor(public navCtrl: NavController,
  						public storage: Storage,
  						public cdRef: ChangeDetectorRef,
  						public alertCtrl: AlertController,
  						private toastCtrl: ToastController,
  						public platform: Platform,
  						private sqlite: SQLite) {

  }
  
	ionViewWillEnter(){
		this.storage.ready().then(() => {
//			this.storage.set('flag', 1);
		})
	}
	
	change(value){
		this.cdRef.detectChanges();
    this.phone_number = value.length > 11 ? value.substring(0,11) : value;
	}
	
	login(){
		console.log("login");
		console.log(this.phone_number);
		console.log(this.ver_cord);
		if(this.phone_number == null || this.phone_number == undefined){
			let alert = this.alertCtrl.create({
	      title: '提示!',
	      subTitle: '请输入手机号',
	      buttons: ['确定']
	    });
	    alert.present();
		}else if(this.ver_cord == null || this.ver_cord == undefined){
			let toast = this.toastCtrl.create({
		    message: '验证码不能为空',
		    duration: 2000,
		    position: 'middle'
		  });
		  toast.onDidDismiss(() => {
		    console.log('Dismissed toast');
		  });
		  toast.present();
		}else if(this.ver_cord == "1234" && this.phone_number == "17612708913"){
			let toast = this.toastCtrl.create({
		    message: '登录成功',
		    duration: 2000,
		    position: 'middle'
		  });
		  toast.onDidDismiss(() => {
		    console.log('Dismissed toast');
		    this.platform.ready().then(() => {
					this.sqlite.create({
				    name: ' fundraising.db',//数据库名称
				    location: 'default'
				  })
					.then((db: SQLiteObject) => {
						db.executeSql("select * from login_type where phone_number='"+this.phone_number+"'",{}).then((data)=>{
							console.log("查询数据库号码账号是否存在");
							console.log(data);
							if(data.rows.length == 0){
								db.executeSql("INSERT INTO login_type ('login_type','phone_number') VALUES (?,?);",['1',this.phone_number])
					    		.then(() => console.log('号码存入成功'))
					    		.catch(e => console.log(e));//插入数据
							}else{
								console.log("有登录记录");
								console.log(data.rows.item(0));
							}
				    },(error)=>{
				      console.log('查询错误');
				    });
//						this.database = db;
					})
				})
		    this.navCtrl.pop();//关闭当前页面
		    this.navCtrl.setRoot(TabsPage);
		  });
		  toast.present();
		}
	}
	
  backbtn(){
  	let type = 2;
  	console.log("back");
    this.navCtrl.setRoot(TabsPage,{ tabtype: type});
//	this.navCtrl.pop();
  }
  
  get_countdown(){
  	var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
	  if (!myreg.test(this.phone_number)) {
	  	console.log("no");
	  	let alert = this.alertCtrl.create({
	      title: '提示!',
	      subTitle: '请输入正确的手机号',
	      buttons: ['确定']
	    });
	    alert.present();
	  }else{  
	  	console.log("ok");
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
	  	let toast = this.toastCtrl.create({
		    message: '验证码发送成功',
		    duration: 2000,
		    position: 'middle'
		  });
		  toast.onDidDismiss(() => {
		    console.log('Dismissed toast');
		  });
		  toast.present();
	  }
  }

}
