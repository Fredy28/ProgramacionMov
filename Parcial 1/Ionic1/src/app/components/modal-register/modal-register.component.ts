import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss'],
  imports: [IonicModule]
})
export class ModalRegisterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
