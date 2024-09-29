import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { addIcons } from 'ionicons';
import { bag, star } from 'ionicons/icons';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonLabel, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonCol, IonRow, IonGrid, HeaderComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GridPage implements OnInit {
  productos = [
    { nombre: 'Producto 1', precio: 100, img: 'https://img.freepik.com/vector-premium/perfil-empresario-dibujos-animados_18591-58479.jpg'},
    { nombre: 'Producto 2', precio: 200, img: 'https://img.freepik.com/vector-premium/perfil-empresario-dibujos-animados_18591-58479.jpg'},
    { nombre: 'Producto 3', precio: 300, img: 'https://img.freepik.com/vector-premium/perfil-empresario-dibujos-animados_18591-58479.jpg'},
    { nombre: 'Producto 4', precio: 400, img: 'https://img.freepik.com/vector-premium/perfil-empresario-dibujos-animados_18591-58479.jpg'},
    { nombre: 'Producto 5', precio: 500, img: 'https://img.freepik.com/vector-premium/perfil-empresario-dibujos-animados_18591-58479.jpg'},
  ]

  constructor() { 
    addIcons({bag, star})
  }

  ngOnInit() {
  }

}
