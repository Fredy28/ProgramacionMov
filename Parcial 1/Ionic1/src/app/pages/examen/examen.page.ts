import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonButton, IonCol, IonRow } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { ToastController } from '@ionic/angular';
import { cartOutline, heart } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonButton, IonIcon, IonCardTitle, IonCardSubtitle, IonCardContent, IonCardHeader, IonCard, HeaderComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ExamenPage implements OnInit {



  products = [
    {
      title: 'Doritos',
      price: '20',
      category: 'Snacks',
      available: 'True',
      imgUrl: 'https://www.smartnfinal.com.mx/wp-content/uploads/2021/05/90041-Doritos-nacho-super-size-Sabritas-650-g.jpg'
    },
    {
      title: 'Almohada',
      price: '80',
      category: 'Hogar',
      available: 'True',
      imgUrl: 'https://www.bedbathandbeyond.com.mx/media/nacionales/nacionales2/almohada_king_69976125_2_.jpg'
    },
    {
      title: 'Smartwatch',
      price: '4000',
      category: 'Tecnología',
      available: 'False',
      imgUrl: 'https://i5.walmartimages.com/asr/dda6bc1f-d282-4cf9-ad29-e827222bc4d5.8d402328f4d54e2b9a252879ec51fb79.jpeg'
    },
    {
      title: 'Balón',
      price: '50',
      category: 'Deportes',
      available: 'True',
      imgUrl: 'https://m.media-amazon.com/images/I/51JzLIFmidL._AC_UF894,1000_QL80_.jpg'
    },
    {
      title: 'Collar',
      price: '3000',
      category: 'Joyería',
      available: 'False',
      imgUrl: 'https://media.tiffany.com/is/image/Tiffany/EcomItemL2/return-to-tiffany-collar-con-cuentas-60714819_1017592_ED.jpg'
    },
    {
      title: 'Sopa',
      price: '50',
      category: 'Comida',
      available: 'False',
      imgUrl: 'https://assets.unileversolutions.com/recipes-v2/243547.jpg'
    },
  ]

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
    addIcons({heart, cartOutline})
  }
  async openToast() {
    const toast = await this.toastCtrl.create({
      message: 'Añadido al carrito!',
      duration: 1500,
      position: 'top',
      color: 'dark'
    });
    toast.present();
  }

}
