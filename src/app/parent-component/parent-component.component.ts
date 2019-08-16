import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  pokemons: Array<any> = [{ name: 'Bulbasaur', type: 'grass'}, { name: 'Charmander', type: 'fire'}, { name: 'Squirtle', type: 'water'}];
  level2: Array<any> = [{ name: 'Ivysaur', type: 'grass' }, { name: 'Charmeleon', type: 'fire' }, { name: 'Wartortle', type: 'water' }];
  level3: Array<any> = [{ name: 'Venusaur', type: 'grass' }, { name: 'Charizard', type: 'fire' }, { name: 'Blastoise', type: 'water' }];

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
