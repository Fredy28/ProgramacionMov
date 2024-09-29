import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderComponent } from '../components/header/header.component';
import { FavoritosService } from '../services/favoritos.service';
import { IonicModule } from '@ionic/angular';
import { CardAnimeComponent } from '../components/card-anime/card-anime.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [HeaderComponent, IonicModule, CardAnimeComponent],
})
export class Tab3Page {
  favorites: any[] = [];
  constructor(private favoriteS: FavoritosService) {
    this.favorites = this.favoriteS.getLocalFavorites();
  }
}
