import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.page.html',
  styleUrls: ['./anime-detail.page.scss'],
  standalone: true,
  imports: [HeaderComponent, IonicModule]
})
export class AnimeDetailPage implements OnInit {
  personajes:any[] = [];
  miAnime: any = {}

  constructor(
    private actRoute: ActivatedRoute,
    private animeS: AnimeService
  ) { 
    this.actRoute.params.subscribe((params: any) => {
      console.log(params.id);
      this.animeS.getAnimeById(params.id).subscribe((anime: any) => {
        console.log(anime);
        this.miAnime = anime.data
      });
      this.getCaracters(params.id);
    });
  }

  getCaracters(id:string){
    this.animeS.getCharacters(id).subscribe((personajes:any) => {
      console.log(personajes);
      this.personajes = personajes.data;
      this.personajes = this.personajes.slice(0,19);
    })
  }

  ngOnInit() {
  }

}
