import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-consultant',
  templateUrl: 'consultant.html'
})
export class ConsultantPage {
colorflag: boolean = false;

form;

user = {
		skills: [
			{
				id: 1,
				name: "怎么发起筹款？",
				selected: false
			},
			{
				id: 2,
				name: "这样转发筹钱多!",
				selected: false
			},
			{
				id: 3,
				name: "这种情况能筹款吗？",
				selected: false
			},
			{
				id: 4,
				name: "标题文章该这样写？",
				selected: false
			},
			{
				id: 5,
				name: "各种疑问,各种技巧",
				selected: false
			},
	]
}

  constructor(public navCtrl: NavController,
  						public storage: Storage,
  						private fb: FormBuilder,
  						private alertCtrl: AlertController) {
		console.clear();
		this.form = this.fb.group({
      skills: this.buildSkills()
    });
		
		console.log(this.form.get("skills"))
  }
  
	get skills() {
    return this.form.get('skills');
  };
  
  buildSkills() {
    const arr = this.user.skills.map(skill => {
      return this.fb.control(skill.selected);
    });
    return this.fb.array(arr);
  }
  backbtn(){
  	console.log("back");
  	this.navCtrl.pop();
  }
  alertsb(value) {
	  const formValue = Object.assign({}, value, {
	    skills: value.skills.map((selected, i) => {
	      return {
	        id: this.user.skills[i].id,
	        name: this.user.skills[i].name,
	        selected
	      }
	    })
	    
	  })
	  console.log("formValue_al");
	  console.log(formValue);
	  this.user = formValue;
	}
  submit(value) {
	  const formValue = Object.assign({}, value, {
	    skills: value.skills.map((selected, i) => {
	      return {
	        id: this.user.skills[i].id,
	        name: this.user.skills[i].name,
	        selected
	      }
	    })
	    
	  })
	  console.log("formValue_cl");
	  console.log(formValue);
	  this.user = formValue;
	}

}
