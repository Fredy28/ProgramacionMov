import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { ActionSheetController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { callOutline, car, cash, eye, heartOutline, trash } from 'ionicons/icons';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: true,
  imports: [HeaderComponent, IonButtons, IonBackButton, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ActionSheetPage implements OnInit {

  constructor(
    private asCtrl: ActionSheetController 
  ) { 
    addIcons({
      eye, trash, callOutline, heartOutline, cash, car
    })
  }

  ngOnInit() {
  }

  async openActionSheet() {
    const actionSheet = await this.asCtrl.create({
      backdropDismiss: false,
      header: ' Opciones ',
      buttons: [
        {
          text: 'Eliminar',
          icon: 'Trash',
          handler: () => {
            console.log('Eliminado');
          }
        },
        {
          text: 'Ver más',
          icon: 'eye',
          handler: () => {
            console.log('Ver detalles');
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          handler: () => {
            console.log('Adios!');
          }
        }
      ]
    });
    await actionSheet.present();
  }


  async Fredi() {
    const actionSheet = await this.asCtrl.create({
      header: ' Opciones ',
      buttons: [
        {
          text: 'Llamar',
          icon: 'call-outline',
          handler: () => {
            console.log('Llamando');
          }
        },
        {
          text: 'Favorito',
          icon: 'heart-outline',
          handler: () => {
            console.log('Añadir favorito');
          }
        },
        {
          text: 'Ver más',
          icon: 'eye',
          handler: () => {
            console.log('Ver detalles');
          }
        },
      ]
    });
    await actionSheet.present();
  }

  async openCustomActionSheet(){
    const actionSheet = await this.asCtrl.create({
      header: ' Opciones ',
      cssClass: 'custom-action-sheet',
      buttons: [
        {
          text: 'Añadir al carrito',
          icon: 'car',
          handler: () => {
            console.log('Llamando');
          }
        },
        {
          text: 'Comprar',
          icon: 'cash',
          handler: () => {
            console.log('Comprar');
          }
        }
      ]
    });
    await actionSheet.present();
  }

}
