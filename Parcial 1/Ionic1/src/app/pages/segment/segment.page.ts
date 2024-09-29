import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { addIcons } from 'ionicons';
import { balloon, baseball, fastFood, home, iceCream, pin } from 'ionicons/icons';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
  standalone: true,
  imports: [IonIcon, IonLabel, IonSegmentButton, IonSegment, HeaderComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SegmentPage implements OnInit {

  constructor() { 
    addIcons({home, pin, fastFood, balloon, iceCream, baseball})
  }

  MovieGenres = ['Terror', 'Ciencia ficción', 'Fantasía', 'Comedia', 'Drama', 'Comedia Romántica', 'Misterio'];

  opciones = [
    'home', 'home', 'balloon', 'home', 'home'
  ]

  ngOnInit() {
  }

}
