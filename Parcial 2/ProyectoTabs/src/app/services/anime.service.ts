import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { search } from 'ionicons/icons';
const APIURL = 'https://api.jikan.moe/v4';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) { }

  getTopAnimes(){
    return this.http.get(`${APIURL}/top/anime`);
  }

  getAnimeById(id: string){
    return this.http.get(`${APIURL}/anime/${id}`);
  }

  getCharacters(id: string){
    return this.http.get(`${APIURL}/anime/${id}/characters`);
  }

  searchAnime(termino: string){
    return this.http.get(`${APIURL}/anime?q=${termino}`);
  }
}
