import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
    return this.http.get<any>(`${this.baseUrl}`+idOrName, { headers });
  }

}
