import { Component, Input, OnInit } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';
import { IPokemon } from '../interfaces/api/pokeapi/IPokemon';
import { IResumenPokemon } from '../interfaces/api/pokeapi/IResumenPokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() resumenpokemon? : IResumenPokemon
  pokemon? : IPokemon
  constructor(public pokeapiService: PokeapiService){}

  ngOnInit(): void {
    this.pokeapiService.getDetallesPokemon(this.resumenpokemon?.url || "").subscribe(respuesta => {
      this.pokemon = respuesta
    })
  }
}
