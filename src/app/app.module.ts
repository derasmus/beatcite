import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArtistsPage } from '../pages/artists/artists';
import { TracksPage } from '../pages/tracks/tracks';
import { ChartsPage } from '../pages/charts/charts';
import { AboutPage } from '../pages/about/about';
import { ApiRequest } from "../providers/api-request";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArtistsPage,
    TracksPage,
    ChartsPage,
    AboutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArtistsPage,
    TracksPage,
    ChartsPage,
    AboutPage
  ],
  providers: [
    ApiRequest
  ]
})
export class AppModule {}
