import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonCard, IonIcon, IonButton, IonRow, IonGrid } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
//import { heartOutline } from 'ionicons/icons';
import {add, heart, heartOutline, home } from 'ionicons/icons'
import { from } from 'rxjs';
import { addIcons } from 'ionicons';
import { CardAnimeComponent } from '../components/card-anime/card-anime.component';
import { IonicModule } from '@ionic/angular';
import { AnimeService } from '../services/anime.service';
import { HeaderComponent } from "../components/header/header.component";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CardAnimeComponent, HeaderComponent, ExploreContainerComponent],
})
export class Tab1Page {
  listaAnimes:any[] = []
  load = false
  constructor(private animeS: AnimeService) {
    addIcons({heartOutline, home});
    this.animeS.getTopAnimes().subscribe( (resp: any) => {
      console.log(resp.data);
      this.listaAnimes = resp.data;
      if(resp){
        this.load = true;
        this.listaAnimes = resp.data;
      }
    });
  }
}
