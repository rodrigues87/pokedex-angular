import { Component, OnInit } from '@angular/core';
import {PokemonService} from "./services/PokemonService";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.findPokemonByIdOrName(1).subscribe( res =>{
      console.log(res)
    })
  }

}
