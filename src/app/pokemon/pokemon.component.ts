import { Component, OnInit } from '@angular/core';
import {PokemonService} from "./services/PokemonService";
import {PokemonModel} from "./Pokemon.model";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }
  baseUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

  pokemon = new PokemonModel();

  ngOnInit(): void {
    this.pokemonService.findPokemonByIdOrName(1).subscribe( res =>{
      this.pokemon =res;
      this.prepararUrl();

      console.log(this.pokemon)
    })
  }

  private prepararUrl() {
    const idPokemon = this.pokemon.id.toString()

    if(idPokemon.length ===1 ){
      this.pokemon.urlImage = this.baseUrl + "00"+ idPokemon + ".png";
    }else if(idPokemon.length ===2 ){
      this.pokemon.urlImage = this.baseUrl +  "0"+ idPokemon + ".png";
    }else {
      this.pokemon.urlImage = this.baseUrl + idPokemon + ".png";
    }
  }
}
