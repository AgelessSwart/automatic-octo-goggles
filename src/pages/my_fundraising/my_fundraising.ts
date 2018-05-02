import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-my_fundraising',
  templateUrl: 'my_fundraising.html'
})
export class My_fundraisingPage {

count_type: boolean = false;

  constructor(public navCtrl: NavController,
  						public storage: Storage) {

  }
  
  backbtn(){
  	console.log("back");
  	this.navCtrl.pop();
  }
  

}
