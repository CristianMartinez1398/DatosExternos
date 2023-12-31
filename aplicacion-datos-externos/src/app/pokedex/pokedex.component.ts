import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';

import { IResumenPokemon } from '../interfaces/api/pokeapi/IResumenPokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit{
  conteo: number = 0;
  cantidadMostrar: number = 0;
  resumenPokemon: IResumenPokemon[] = [];
  cargando: boolean = true;
 
  constructor(public pokeapiService: PokeapiService){ }

  ngOnInit(): void{
    this.actualizarInformacion();
  }

  actualizarInformacion(){
    this.cargando = true;
    this.pokeapiService.getListadoPokemons(this.cantidadMostrar).subscribe(respuesta => {
      this.conteo = respuesta.count;
      this.resumenPokemon = respuesta.results;
      this.cargando = false;
    })
  }
}
