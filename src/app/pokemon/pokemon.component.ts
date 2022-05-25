import { Component, OnInit } from '@angular/core';
import {PokemonService} from "./services/PokemonService";
import {PokemonModel} from "./Pokemon.model";
import {AppComponent} from "../app.component";



@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private pokemonService: PokemonService,
              private appComponent :AppComponent) { }
  baseUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

  pokemon = new PokemonModel();

  idPokemon: number = 1;
  idUltimoPokemon: number = 898;

  ngOnInit(): void {
    this.findPokemon();
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

  irParaPokemonAnterior() {
    this.idPokemon = this.idPokemon -1;
    if (this.idPokemon === 0){
      this.idPokemon = this.idUltimoPokemon;
    }
    this.findPokemon();

  }

  irParaPokemonPosterior() {
    this.idPokemon = this.idPokemon +1;
    if(this.idPokemon >= this.idUltimoPokemon){
      this.idPokemon = 1;
    }
    this.findPokemon();

  }

  private findPokemon() {
    this.pokemonService.findPokemonByIdOrName(this.idPokemon).subscribe( res =>{
      this.pokemon =res;
      this.prepararUrl();

      console.log(this.pokemon)
    })
  }
}
