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

  pokemon = new PokemonModel();

  ngOnInit(): void {
    this.pokemonService.findPokemonByIdOrName(1).subscribe( res =>{
      this.pokemon =res;
      console.log(this.pokemon)
    })
  }

}
