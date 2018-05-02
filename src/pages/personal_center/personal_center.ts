import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-personal_center',
  templateUrl: 'personal_center.html'
})
export class Personal_centerPage {

count_type: boolean = false;

  constructor(public navCtrl: NavController,
  						public storage: Storage) {

  }
  
  backbtn(){
  	console.log("back");
  	this.navCtrl.pop();
  }
  

}
