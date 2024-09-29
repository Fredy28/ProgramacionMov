import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { addIcons } from 'ionicons';
import { add, balloon, logoAngular, logoGithub, logoGitlab, logoYoutube } from 'ionicons/icons';

@Component({
  selector: 'app-fab-button',
  templateUrl: './fab-button.page.html',
  styleUrls: ['./fab-button.page.scss'],
  standalone: true,
  imports: [IonFabList, IonIcon, IonFabButton, IonFab, HeaderComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FabButtonPage implements OnInit {

  constructor() {
    addIcons({add, balloon, logoYoutube, logoGitlab, logoAngular})
  }

  ngOnInit() {
  }

}
