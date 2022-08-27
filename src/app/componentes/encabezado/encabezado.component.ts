import { Component, OnInit } from '@angular/core';
import { GetdatosService } from 'src/app/servicios/getdatos.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private datosPorfolio: GetdatosService) { }

  ngOnInit(): void {
   
  }

}
