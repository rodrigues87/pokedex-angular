import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex-angular';

  irParaPokemonAnterior() {
    console.log("foi para o anterior")
  }

  irParaPokemonPosterior() {
    console.log("foi para o posterior")

  }
}
