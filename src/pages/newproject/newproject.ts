import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs/tabs';

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
  						public actionSheetCtrl: ActionSheetController) {

  }
  
  backbtn(){
  	console.log("back");
  	this.navCtrl.pop();
  }
  
  message(type){
  	console.log(type);
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

}
