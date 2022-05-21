import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PokemonModel} from "../Pokemon.model";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  findPokemonByIdOrName(idOrName : any) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
    });
    return this.http.get<PokemonModel>(`${this.baseUrl}`+idOrName, { headers });
  }

}
