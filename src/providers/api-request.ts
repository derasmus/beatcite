import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Device } from 'ionic-native';

/*
  Generated class for the ApiRequest provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApiRequest {
  data: any;
  constructor(public http: Http) {
    //console.log('Hello ApiRequest Provider');
  }

  getData(req){
     return new Promise( resolve => {
        this.http.get('http://www.beatcite.com/_app/data.php?req='+req)
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
    });  
  }

  getTracks(req){
     return new Promise( resolve => {
        this.http.get('http://www.beatcite.com/_app/tracks.php?req='+req)
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
    });  
  }

  getArtists(req){
     return new Promise( resolve => {
        this.http.get('http://www.beatcite.com/_app/artists.php?req='+req)
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
    });  
  }

  getChart(req){
     return new Promise( resolve => {
        this.http.get('http://www.beatcite.com/_app/charts.php?req='+req)
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
    });  
  }

  logTrack(id,type){
    let uuid=Device.device.uuid;
    if(uuid !== undefined) uuid='';

    //console.log('http://www.beatcite.com/_app/log.php?id='+id+'&type='+type+'&uuid='+uuid);

     return new Promise( resolve => {
        this.http.get('http://www.beatcite.com/_app/log.php?id='+id+'&type='+type+'&uuid='+uuid)
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
    });  
  }
  
}
