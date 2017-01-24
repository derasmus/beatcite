import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ApiRequest } from "../../providers/api-request";

/*
  Generated class for the Charts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html'
})
export class ChartsPage {
  played:any;
  liked:any;
  voted:any;
  constructor(public navCtrl: NavController,public BeatAPI: ApiRequest,public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    //console.log('Hello ChartsPage Page');
     let loader = this.loadingCtrl.create({
      content: "Please wait..."
     });
     this.BeatAPI.getChart(1).then(data => {
     this.played=data;
    });

     this.BeatAPI.getChart(2).then(data => {
     this.liked=data;
    });

     this.BeatAPI.getChart(3).then(data => {
     this.voted=data;
     loader.dismiss();
    });
  }

}
