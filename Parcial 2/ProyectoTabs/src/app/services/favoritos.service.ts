import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  favorites: any[] = [];


  constructor() { }

  getLocalFavorites(){
    this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return this.favorites;
  }

  addFavorite(anime: any){
    const found = this.favorites.find(a => a.mal_id === anime.mal_id);
    console.log(found);
    if (found) {
      this.favorites.filter(a => a.mal_id === found.mal_id)
    }
    this.favorites.push(anime);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    return;
  }
  /*this.favorites.push(anime);
  localStorage.setItem('favorites', JSON.stringify(this.favorites));*/
}
