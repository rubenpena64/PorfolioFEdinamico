import { Component, OnInit } from '@angular/core';
import { GetdatosService } from 'src/app/servicios/getdatos.service';


@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  quiensoy: string = "";
  lugar: string = "";
  otros: string = "";



  constructor(private datosPorfolio: GetdatosService) { }


  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {

      this.quiensoy = data.acerca.quiensoy;
      this.lugar = data.acerca.lugar;
      this.otros = data.acerca.Otros;
    });
  }
}
