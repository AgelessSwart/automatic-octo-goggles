import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { TabsPage } from '../pages/tabs/tabs';

declare var screen :any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  database: SQLiteObject;
  constructor(public platform: Platform,
					  	statusBar: StatusBar,
					  	splashScreen: SplashScreen,
					  	private sqlite: SQLite) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      screen.orientation.lock('portrait-primary');//旋转锁定
      if(this.platform.is('cordova')){
				this.initDB();
			}
    });
  }
  
	initDB(){
		console.log("intdb");
		this.sqlite.create({
		    name: ' fundraising.db',//数据库名称
		    location: 'default'
		  })
		.then((db: SQLiteObject) => {
		    db.executeSql('create table if not exists login(id INTEGER PRIMARY KEY AUTOINCREMENT, login_type BOOLEAN default 0, username text NOT NULL, loginname text NOT NULL, password text NOT NULL, end_time text NOT NULL)', {})//信息数据表
		    	.then(() => console.log('login SQLdb ok'))
		    	.catch(e => console.log(e));
			})
	}
}
