import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonItem, IonList } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, HeaderComponent, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CardsPage implements OnInit {
  playlist = [
    {
      titulo: 'Shape of you',
      artista: 'Ed sheran',
      genero: 'Pop',
      img: 'https://images.squarespace-cdn.com/content/v1/58c22624f5e231655c4c4dad/270f4b9e-e741-476e-9b8c-caf0538a267e/Qu%C3%A9+es+la+m%C3%BAsica+electr%C3%B3nica.jpg?format=750w',
      album: 'Divide'
    },
    {
      titulo: 'Bohemian Rhapsody',
      artista: 'Queen',
      genero: 'Rock',
      img: 'https://www.marthadebayle.com/wp-content/uploads/2022/07/tiposdemusica.jpg',
      album: 'A night at the opera'
    },
    {
      titulo: 'Billie Jean',
      artista: 'Michael Jackson',
      genero: 'Pop',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIn9jDIlln-RHqcvc9ByKXZfbhjJ3s9dEZB2CT3g--66EbSsemlMweE6WUYfuJ73C4PY&usqp=CAU',
      album: 'Thriller'
    },
    {
      titulo: 'Smells like teen spirit',
      artista: 'Nirvana',
      genero: 'Rock',
      img: 'https://significado.com/contenido/imp/musica.jpg',
      album: 'Nevermind'
    },
    {
      titulo: 'Despacito',
      artista: 'Luis Fonsi',
      genero: 'Reggaeton',
      img: 'https://static.wixstatic.com/media/3c5ad4_f69663586c2340d39224df4a16fa96fc~mv2.jpg/v1/fill/w_640,h_390,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3c5ad4_f69663586c2340d39224df4a16fa96fc~mv2.jpg',
      album: 'Vida'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
