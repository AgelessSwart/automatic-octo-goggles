import { Component } from '@angular/core';
import { NavController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	
flag:any = 0;

  constructor(public navCtrl: NavController,
  						public storage: Storage) {
  	
  }
  
	ionViewWillEnter(){
		this.storage.ready().then(() => {
			
		})
	}

}
