import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ApiRequest } from "../../providers/api-request";
import { TracksPage } from '../tracks/tracks';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tracks:any;
  artists:any;
  constructor(public navCtrl: NavController,public BeatAPI: ApiRequest,public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {

    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });

    this.BeatAPI.getData(1).then(data => {
     this.artists=data;
     
    });    
    
    this.BeatAPI.getData(2).then(data => {
     this.tracks=data;
     loader.dismiss();
    });
  }

  openTracks(i){
    this.navCtrl.push(TracksPage, {
        artist_id: i
    });
  }
}