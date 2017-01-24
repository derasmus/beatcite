import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ApiRequest } from "../../providers/api-request";
import { TracksPage } from '../tracks/tracks';
/*
  Generated class for the Artists page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-artists',
  templateUrl: 'artists.html'
})
export class ArtistsPage {
  artists:any;
  constructor(public navCtrl: NavController,public BeatAPI: ApiRequest,public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    //console.log('Hello ArtistsPage Page');
     let loader = this.loadingCtrl.create({
      content: "Please wait..."
     });
     this.BeatAPI.getArtists(1).then(data => {
     this.artists=data;
     loader.dismiss();
    }); 
 }
  
  openTracks(i){
    this.navCtrl.push(TracksPage, {
        artist_id: i
    });
  }

  openBio(i){
    alert('Coming soon...');
  }  
}
