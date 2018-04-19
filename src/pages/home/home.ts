import {Component, ChangeDetectorRef, ViewChild} from '@angular/core';
import { NavController, NavParams, Content, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { JuankuanPage } from '../juankuan/juankuan';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

		@ViewChild(Content) content: Content;
    showToolbar:boolean = false;
    headerImgSize:string = '100%';
    headerImgUrl:string = '';
    transition:boolean = false;
    articles:Array<any> = new Array(10).fill('');
    userdata:any = [
    		{
    			name:"小明",
    			disease:"心脏病",
    			head_img:"../../assets/imgs/header_png.png",
    			text:"救救我可怜的儿子吧",
    			city: "深圳",
    			load:"45%",
    			amount:"245200",
    			count:"12452",
    			id:"1"
    		},
    		{
    			name:"小张",
    			disease:"白血病",
    			head_img:"../../assets/imgs/header_png.png",
    			text:"救救我可怜的儿子吧",
    			city: "武汉",
    			load:"75%",
    			amount:"468000",
    			count:"28247",
    			id:"2"
    		}
    ]
    
  constructor(public navCtrl: NavController,
        			public navParams: NavParams,
        			public ref: ChangeDetectorRef,
  						public storage: Storage,
  						public modalCtrl: ModalController,) {

  }
	ionViewWillEnter(){
		this.storage.ready().then(() => {
//			this.storage.set('flag', 0)
		})
	}
	ionViewDidLoad() {
      console.log('ionViewDidLoad TransparentBarPage');

      this.headerImgUrl = './assets/bg.jpg';

      // this.content.enableScrollListener();
  }
	onScroll($event: any){
	    let scrollTop = $event.scrollTop;
	    this.showToolbar = scrollTop >= 120;
	    if(scrollTop < 0){
	        this.transition = false;
	        this.headerImgSize = `${ Math.abs(scrollTop)/2 + 100}%`;
	    }else{
	        this.transition = true;
	        this.headerImgSize = '100%'
	    }
	    this.ref.detectChanges();
	}
	
	selectFriend() {
  	// 声明一个modal
  	let modal = this.modalCtrl.create(JuankuanPage);
  	// 弹出modal
  	modal.present();
  }
	
	
}
