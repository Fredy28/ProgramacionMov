import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonDatetime, IonPicker, IonPickerColumn, IonPickerColumnOption } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-dates-pickers',
  templateUrl: './dates-pickers.page.html',
  styleUrls: ['./dates-pickers.page.scss'],
  standalone: true,
  imports: [IonPickerColumn, IonPickerColumnOption, IonPicker, IonDatetime, HeaderComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DatesPickersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
