import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CallNumber } from '@ionic-native/call-number';

import { ExpresswayPage } from '../expressway/expressway';  
import { SubsucPage } from '../subsuc/subsuc';  

@Component({
  selector: 'page-newproject',
  templateUrl: 'newproject.html'
})
export class NewprojectPage {

countdown: any = "发送验证码";
text_content: boolean = false;
instructions_content: boolean = false;
img_content: boolean = false;

  constructor(public navCtrl: NavController,
  						public storage: Storage,
  						public platform: Platform,
  						private callNumber: CallNumber,
  						public actionSheetCtrl: ActionSheetController,
  						public modalCtrl: ModalController) {

  }
  
  backbtn(){
  	console.log("back");
  	this.navCtrl.pop();
  }
  
  message(type){
  	console.log(type);
  }
  
  Expressway(){
  	let modal = this.modalCtrl.create(ExpresswayPage);
  	modal.present();
  }
  subsuc(){
  	let modal = this.modalCtrl.create(SubsucPage);
  	modal.present();
  }
  
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '请选择图片或拍照',
      buttons: [
        {
          text: '拍照',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: '选择相册',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
	
	callnumber(){
  	console.log("callnumber");
  	if(!this.platform.ready()){
  		window.location.href = "tel://4006526559";
  	}
  	this.platform.ready().then(() =>{
		  this.callNumber.callNumber("4006526559", true)
			  .then(res => console.log('Launched dialer!', res))
			  .catch(err => console.log('Error launching dialer', err));
  	})
  }
	
}
