import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonChip, IonIcon, IonLabel, IonAvatar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.page.html',
  styleUrls: ['./chips.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonLabel, IonIcon, IonChip, HeaderComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChipsPage implements OnInit {

  constructor() {
    //addIcons({close});
  }

  ngOnInit() {
  }

}
