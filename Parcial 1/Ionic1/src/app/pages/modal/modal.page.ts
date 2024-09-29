import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonicModule, ModalController } from '@ionic/angular';
import { ModalRegisterComponent } from 'src/app/components/modal-register/modal-register.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: true,
  providers: [ModalRegisterComponent],
  imports: [HeaderComponent, IonicModule]
})
export class ModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  async openRegister() {
    const modal = await this.modalController.create({
      component: ModalRegisterComponent,
      initialBreakpoint: .7
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
