import {Component, QueryList, ViewChildren} from '@angular/core';
import {PokemonComponent} from "./pokemon/pokemon.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex-angular';

  @ViewChildren(PokemonComponent) pokemonComponents: QueryList<PokemonComponent>

  irParaPokemonAnterior() {
    this.pokemonComponents.forEach(c => c.irParaPokemonAnterior());

  }

  irParaPokemonPosterior() {
    this.pokemonComponents.forEach(c => c.irParaPokemonPosterior());


  }
}
