import { Component, OnInit } from '@angular/core';
import { GetdatosService } from 'src/app/servicios/getdatos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  public skillsLista: Array<{ nombre: string; valor: number; largoBarra :number }> = [];

   constructor(private datosPorfolio: GetdatosService) { }

 ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.skillsLista = data.skills;
      
     this.skillsLista.forEach(element => {
     element.largoBarra = 472 - 435 * element.valor  /100;    
      console.log(element.largoBarra)
     });       
    });

  }
}
