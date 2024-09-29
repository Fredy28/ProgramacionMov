import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
  selector: 'app-card-anime',
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.scss'],
  standalone: true, 
  imports: [IonicModule]
})
export class CardAnimeComponent  implements OnInit {
  @Input() animeInfo:any

  constructor(private route: Router, private favoriteS: FavoritosService) { 

  }
  addToFavorite(anime: any){
    this.favoriteS.addFavorite(anime);
    console.log("Anime añadido a favoritos:", anime.title);
  }

  verDetalles(id: string){
    console.log("Ver detalles del anime:", id);
    this.route.navigateByUrl('/anime/'+id)
  }

  ngOnInit() {}

}
