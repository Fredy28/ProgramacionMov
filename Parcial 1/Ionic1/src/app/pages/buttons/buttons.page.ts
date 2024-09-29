import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendar, heart, star } from 'ionicons/icons';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
  standalone: true,
  imports: [HeaderComponent, IonIcon, IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ButtonsPage implements OnInit {

  constructor() { 
    addIcons({
      heart, calendar, star
    })
  }

  ngOnInit() {
  }

}
