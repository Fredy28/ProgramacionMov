import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { addIcons } from 'ionicons';
import { beer } from 'ionicons/icons';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
  standalone: true,
  imports: [IonButton, HeaderComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ToastPage implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
    addIcons({beer})
  }

  async openToast() {
    const toast = await this.toastCtrl.create({
      message: 'Esto es un Toast!',
      duration: 1500,
      position: 'top',
      color: 'success',
      icon: 'beer'
    });
    toast.present();
  }

  //!Buscar cómo personalizar un toast, crear otro botón de toast con Css Class
  async openToastB() {
    const toast = await this.toastCtrl.create({
      message: 'Esto es un Toast!',
      duration: 4500,
      position: 'top',
      color: 'success',
      icon: 'beer',
      buttons: [
        {
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          icon: 'beer',
          text: 'aceptar',
          handler: () => {
            console.log('Aceptar chela');
          }
        }
      ]
    });
    toast.present();

    
  }

  async openToastC(){
    const toast1 = await this.toastCtrl.create({
      message: 'Este es un toast personalizado',
      duration: 3000,
      cssClass: 'custom-toast', 
      buttons: [
        {
          side: 'end',
          text: 'Aceptar',
          role: 'cancel',
          handler: () => {
            console.log('Aceptar exitoso');
          }
        }
      ]
    });
    toast1.present();
  } 

}
