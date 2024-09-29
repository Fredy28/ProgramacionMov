import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonAvatar, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonItemSliding, IonLabel, IonIcon, IonItemOption, IonItemOptions } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { addIcons } from 'ionicons';
import { callOutline, fastFood, heart, pencilOutline, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
  standalone: true,
  imports: [IonItemOptions, IonItemOption, IonIcon, IonAvatar, IonLabel, IonItemSliding, IonItem, IonList, HeaderComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ContactosPage implements OnInit {

  contactos = [
    {
      name: 'Fredi Navarrete',
      img: 'https://img.freepik.com/vector-premium/perfil-empresario-dibujos-animados_18591-58479.jpg'
    },
    {
      name: 'Francisco Ochoa',
      img: 'https://previews.123rf.com/images/jetapura9974/jetapura99742307/jetapura9974230700478/209028643-imagen-de-perfil-de-dibujos-animados-de-un-ni%C3%B1o-inteligente-ai-generativo.jpg'
    },
    {
      name: 'Antonia Velasquez',
      img: 'https://i.pinimg.com/550x/4c/d7/96/4cd7969d71b6e741cd4335d417861ce1.jpg'
    },
    {
      name: 'Raymundo Hernandez',
      img: 'https://previews.123rf.com/images/jemastock/jemastock1705/jemastock170504352/77701016-color-l%C3%A1piz-cara-de-perfil-de-dibujos-animados-chico-con-ilustraci%C3%B3n-de-vector-de-peinado.jpg'
    },
    {
      name: 'María López',
      img: 'https://i.pinimg.com/550x/46/93/7b/46937b64fbf42c359f98139738245a13.jpg'
    },
  ];

  constructor() { 
    addIcons({trashOutline, callOutline, fastFood, heart});
  }

  ngOnInit() {
  }

}
