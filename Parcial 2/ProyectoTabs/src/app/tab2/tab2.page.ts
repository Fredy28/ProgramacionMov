import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderComponent } from '../components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { search,  close, heartOutline } from 'ionicons/icons';
import { AnimeService } from '../services/anime.service';
import { CardAnimeComponent } from '../components/card-anime/card-anime.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [HeaderComponent, ExploreContainerComponent, IonicModule, CardAnimeComponent]
})
export class Tab2Page {
  sinData = false;
  encontrados: any[] = []

  constructor( private animeS: AnimeService) {
    addIcons({search, close, heartOutline});
  }
  buscar (evento: any){
    this.sinData = true;
    console.log(evento.detail.value);
    this.animeS.searchAnime(evento.detail.value).subscribe(
      (resp: any) => {
        console.log(resp);
        this.encontrados = resp.data;
      }
    )
  }

}
