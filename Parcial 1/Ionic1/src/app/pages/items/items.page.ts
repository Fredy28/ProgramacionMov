import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonItemOption, IonItemOptions, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon, IonButton, IonNote, IonItemSliding } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { addIcons } from 'ionicons';
import { cartOutline, fastFood, pencilOutline, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
  standalone: true,
  imports: [IonItemOption, IonItemOptions, IonItemSliding, IonNote, IonButton, IonIcon, IonLabel, IonItem, IonList, 
    HeaderComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ItemsPage implements OnInit {
  usuarios = ['Fredi Navarrete', 'Andrea Rodriguez', 'Jaime Perez', 'Alondra Lopez'];

  categorias = ['Comida', 'Bebidas', 'Electrónica', 'Hogar', 'Salud'];

  constructor() {
    addIcons({trashOutline, pencilOutline, fastFood ,cartOutline})
  }

  productos = [
    {
      name: 'Cheetos',
      price: 20
    },
    {
      name: 'Gancito',
      price: 23
    },
    {
      name: 'Gomitas',
      price: 15
    },
    {
      name: 'Chocolates',
      price: 18
    }
  ]

  ngOnInit() {
  }

}
