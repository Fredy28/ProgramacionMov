import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {rocket, balloon, beer, card, star, basketball, list, people, bag, menu, iceCream, hammer, happy, sad, peopleCircle, book} from 'ionicons/icons';
import { from } from 'rxjs';
interface itemComponent {
  name: string,
  icon: string,
  route: string,
  color: string,
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, RouterLink, IonIcon, IonItem, IonList, CommonModule ,IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  nombre = 'Fredi Navarrete Luis';
  componentes:itemComponent[] = [
    {
      name: 'Action-Sheet',
      icon: 'rocket',
      route: '/action-sheet',
      color: 'success'
    },
    {
      name: 'Alert',
      icon: 'balloon',
      route: '/alert',
      color: 'warning'
    },
    {
      name: 'Buttons',
      icon: 'beer',
      route: '/buttons',
      color: 'tertiary'
    },
    {
      name: 'Cards',
      icon: 'card',
      route: '/cards',
      color: 'danger'
    },
    {
      name: 'Chips',
      icon: 'star',
      route: '/chips',
      color: 'primary'
    },
    {
      name: 'FabButton',
      icon: 'basketball',
      route: '/fab-button',
      color: 'danger'
    },
    {
      name: 'List',
      icon: 'list',
      route: '/list',
      color: 'tertiary'
    },
    {
      name: 'Avatar',
      icon: 'people',
      route: '/avatar',
      color: 'warning'
    },
    {
      name: 'Items',
      icon: 'bag',
      route: '/items',
      color: 'success'
    },
    {
      name: 'Contactos',
      icon: 'people',
      route: '/contactos',
      color: 'dark'
    },
    {
      name: 'Grid',
      icon: 'menu',
      route: '/grid',
      color: 'primary'
    },
    {
      name: 'Inputs',
      icon: 'star',
      route: '/inputs',
      color: 'success'
    },
    {
      name: 'Dates and pickers',
      icon: 'hammer',
      route: '/dates-pickers',
      color: 'primary'
    },
    {
      name: 'Toast',
      icon: 'happy',
      route: '/toast',
      color: 'warning'
    },
    {
      name: 'Segment',
      icon: 'sad',
      route: '/segment',
      color: 'dark'
    },
    {
      name: 'Modal',
      icon: 'people-circle',
      route: '/modal',
      color: 'secondary'
    },
    {
      name: 'Examen',
      icon: 'book',
      route: '/examen',
      color: 'danger'
    },
  ];

  constructor() {
    addIcons({rocket, balloon, beer, card, star, basketball, list, people, bag, menu, hammer, happy, 
      sad, peopleCircle, book})
  }

  CambiodeNombre(text?: string) {
    if (text) {
      this.nombre = text;
    } else {
      this.nombre = 'Nombre desconocido';
    }
    
  }
}

