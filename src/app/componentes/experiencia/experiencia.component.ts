import { Component, OnInit } from '@angular/core';
import { GetdatosService } from 'src/app/servicios/getdatos.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaLista: any;

  constructor(private datosPorfolio: GetdatosService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.experienciaLista = data.experiencia;
    });

  }
}
