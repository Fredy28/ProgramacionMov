import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonButtons, IonBackButton } from "@ionic/angular/standalone";
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent]
})
export class HeaderComponent  implements OnInit {
  @Input() title!: string;
  @Input() name!: string;

  constructor() { }

  ngOnInit() {}

}
