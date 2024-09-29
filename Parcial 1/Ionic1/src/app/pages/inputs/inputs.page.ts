import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonIcon, IonInput, IonTextarea, IonLabel, IonButton, IonCard } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
  standalone: true,
  imports: [IonCard, IonButton, IonLabel, IonTextarea, IonInput, IonIcon, IonCol, IonRow, IonGrid, HeaderComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InputsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
