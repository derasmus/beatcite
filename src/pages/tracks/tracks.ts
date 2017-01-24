import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { ApiRequest } from "../../providers/api-request";

/*
  Generated class for the Tracks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tracks',
  templateUrl: 'tracks.html'
})
export class TracksPage {
  tracks:any;
  id:any;

  constructor(public navCtrl: NavController,public BeatAPI: ApiRequest,public loadingCtrl: LoadingController,public navParams: NavParams) {
    if(this.navParams.data['artist_id'] !== undefined) 
      this.id=this.navParams.data['artist_id'];
    else{ 
      this.id='';
    }
  }

  ionViewDidLoad() {
 
     let loader = this.loadingCtrl.create({
      content: "Please wait..."
     });

     this.BeatAPI.getTracks(this.id).then(data => {
     this.tracks=data;
     loader.dismiss();
    });
  }

  logTrack(i,t){
      let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration:1500
     });
     this.BeatAPI.logTrack(i,t).then(data => {
     if(data['msg']) alert(data['msg']);
     //loader.dismiss();
    });
  }
}
