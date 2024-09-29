import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [HeaderComponent, IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { 
    
  }

  ngOnInit() {
  }

  async mostrarAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Alerta!',
      subHeader:'Información importante.',
      message: 'Esta información es importante para nuestra app',
      buttons: ['OK']
    })
    await alert.present();
  }

  async mostrarTerminos() {
    const myalert = await this.alertCtrl.create({
      header: 'Terminos y condiciones',
      backdropDismiss: false,
      message: '¿Aceptas los términos y condiciones de la aplicación?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('No aceptaste los términos y condiciones');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Si aceptaste!');
          }
        }
      ]
    });
    await myalert.present();
  }

  async login() {
    const alert = await this.alertCtrl.create({
      header: 'Login',
      inputs: [
        {
          name: 'Email',
          type: 'email',
          placeholder: 'Escribe tu email'
        },
        {
          name: 'Password',
          type: 'password',
          placeholder: 'Escribe tu contraseña'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('No aceptaste los términos y condiciones');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Si aceptaste!');
          }
        }
      ]
    });
    await alert.present();
  }

  async Form() {
    const myalert = await this.alertCtrl.create({
      header: 'Formulario',
      backdropDismiss: false,
      inputs: [
        {
          name: 'Nombre',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'Correo',
          type: 'email',
          placeholder: 'Correo'
        },
        {
          name: 'Edad',
          type: 'number',
          placeholder: 'Edad'
        },
        {
          name: 'Password',
          type: 'password',
          placeholder: 'Password'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelaste');
          }
        },
        {
          text: 'Registrar',
          handler: () => {
            console.log('Ya te registraste');
          }
        }
      ]
    });
    await myalert.present();
  }

}
