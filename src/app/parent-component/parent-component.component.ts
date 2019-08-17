import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  pokemons: Array<any> = [{ name: 'Bulbasaur', type: 'grass', evolve: true }, { name: 'Charmander', type: 'fire', evolve: true },
   { name: 'Squirtle', type: 'water', evolve: true }, ];
  level2: Array<any> = [{ name: 'Ivysaur', type: 'grass', evolve: true }, { name: 'Charmeleon', type: 'fire', evolve: true },
    { name: 'Wartortle', type: 'water', evolve: true }];
  level3: Array<any> = [{ name: 'Venusaur', type: 'grass', evolve: false }, { name: 'Charizard', type: 'fire', evolve: false  },
   { name: 'Blastoise', type: 'water', evolve: false }];

  constructor() { }

  ngOnInit() {
  }

  onEvolved(pokemonToEvolve) {
    const pokemonIndex = this.pokemons.findIndex(pokemon => pokemon.name === pokemonToEvolve);
    switch (pokemonToEvolve) {
      case 'Bulbasaur':
       this.pokemons[pokemonIndex] = this.level2[pokemonIndex];
       break;
      case 'Ivysaur':
        this.pokemons[pokemonIndex] = this.level3[pokemonIndex];
        break;
      case 'Charmander':
        this.pokemons[pokemonIndex] = this.level2[pokemonIndex];
        break;
      case 'Charmeleon':
        this.pokemons[pokemonIndex] = this.level3[pokemonIndex];
        break;
      case 'Squirtle':
        this.pokemons[pokemonIndex] = this.level2[pokemonIndex];
        break;
      case 'Wartortle':
        this.pokemons[pokemonIndex] = this.level3[pokemonIndex];
        break;
      default:
        break;
    }

    console.log('pokemons', this.pokemons);
  }

}
