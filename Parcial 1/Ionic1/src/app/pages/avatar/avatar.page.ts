import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonAvatar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AvatarPage implements OnInit {
  contactos = [
    'Fredi Navarrete', 'Daniela Perez', 'Omar Juárez', 'Angel Pacheco', 'Melissa Saavedra'
  ];

  constructor() { }

  ngOnInit() {
  }

}
