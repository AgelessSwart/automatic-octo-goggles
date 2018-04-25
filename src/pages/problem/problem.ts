import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-problem',
  templateUrl: 'problem.html'
})
export class ProblemPage {

listdownup: boolean = false;
itemdowup: boolean = false;
maindata: array = [
	{
		listtitle: "1、[发起筹款]相关问题",
		listtype: true,
		listlist:[
								{
									itemtitle: "1.1 、怎么发起筹款？",
									itemtype: true,
									iteminnertext: "您好，您可以去微信公众号搜索【蚂蚁筹】，进入后，点击“发起筹款”；或者，您可以下载【蚂蚁筹】APP。点击下方“发起筹款”，根据提示填写即可快速发起筹款。"
								},
								{
									itemtitle: "1.2 、筹款文章如何写？",
									itemtype: true,
									iteminnertext: "您好，请您在【蚂蚁筹】微信公众号或APP里，点击“发起筹款”，点击页面最上方“筹款信息不会写？点击此处帮你填写”，根据提示填写完整后，点击“确认生成”。确认无误后点击提交即可自动生成筹款标题和求助说明。"
								}
		]
		
	},
	{
		listtitle: "2、[审核材料]相关问题",
		listtype: true,
		listlist:[
								{
									itemtitle: "2.1、 发起时需提供哪些材料？",
									itemtype: true,
									iteminnertext: "您好，发起筹款是需要提供三部分材料：1.患者信息；2.收款人信息；3.诊断证明。您只要在申请提现之前通过审核就可以。"
								},
								{
									itemtitle: "2.2、 手持证件的合照标准？",
									itemtype: true,
									iteminnertext: "您好，证件合照必须同时满足一下要求：1.患者与患者本人身份证正面合照（请尽量不要自拍）。2.身份证不可以被遮挡，照片要清晰可见姓名、身份证号码和家庭住址。3患者或者收款人脸部不可以遮挡或戴口罩。4.不可以提交合成照片。5.如果患者是未成年人，可以用户口本或出生证明代替。6.如果患者无身份证原件，可以用临时身份证、驾驶证、社保卡、结婚证、护照等证件代替。"
								},
								{
									itemtitle: "2.3、 收款人与患者的户口本的要求？",
									itemtype: true,
									iteminnertext: "您好，户口本必须同时满足已下要求：1.患者和收款人必须为直系亲属关系，且在同一户口本上。2.患者和收款人户口本页必须有相同户号或者明确写明双方关系（含双方姓名）。3.户口本页完整，字迹清晰可见。4.如果无法满足以上条件请开具患者和收款人的关系证明。"
								},
								{
									itemtitle: "2.4、 收款人填写的要求？",
									itemtype: true,
									iteminnertext: "您好，收款信息要求如下：1.收款人须是患者本人、患者配偶或者患者直系亲属，未成年人不可以作为收款人。2.须为系统提示的XX银行的银行卡（信用卡、存折、农村商业银行、农村信用社均不可以作为收款卡）3.银行卡号、身份证号姓名、银行名称须与银行预留信息一致。"
								},
								{
									itemtitle: "2.5、 诊断证明的标准？",
									itemtype: true,
									iteminnertext: "您好，您可以提供以下任意一材料作为争端证明：1.诊断证明。 2.入院病案首页。 3.出院小结。4病情说明书。 蚂蚁筹提示您，所有证明必须是 1.近半年以内 2.加盖医院公章9（公章必须清晰，完整）3.确诊证明（待查、臆断、带问号、占位、考虑为、病变、放疗后等均不属于确诊） 4.原件（复印件重新加盖医院公章同样有效）。5.检查报告单或病理报告单是不可以作为疾病证明的。"
								},
								{
									itemtitle: "2.6 、发起二次筹款的标准？",
									itemtype: true,
									iteminnertext: "您好，一次筹款结束可以发起二次筹款。二次筹款所需材料：1.一次筹款所有的材料。 2.在求助说明里需注明二次筹款，并且说明上次筹得款项的用途。 3.在展示图片中上传加盖医院收费章的缴费单据（预交费收据是不可以的）。 4.缴费单据金额须大于等于上次筹款金额。"
								},
		]
		
	},
]


  constructor(public navCtrl: NavController,
  						public storage: Storage) {

  }
  
  backbtn(){
  	console.log("back");
  	this.navCtrl.pop();
  }
  
}
