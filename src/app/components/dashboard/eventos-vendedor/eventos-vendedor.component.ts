import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-eventos-vendedor',
  templateUrl: './eventos-vendedor.component.html',
  styleUrls: ['./eventos-vendedor.component.css']
})
export class EventosVendedorComponent implements OnInit {

  form: FormGroup;
  loading = false;

  eventos = [
    { nombre: 'Frank', lugar: 'Murphy', precio: 4 ,estado:"sadsa"},
  ];
  constructor(private ticketsService: TicketsService, private fb: FormBuilder) {

  this.form = this.fb.group({
  })
}
  ngOnInit(): void {
    //mandar id del vendedor logeado
    this.ticketsService.getEventosOrganizador("id ejemplo").subscribe((response: any)=>{
      console.log(response);
      this.eventos = response
      if(response.length==0){
        console.log("vacio")
      }else{
        console.log("hay resultado")
      }
    });
  }

  detallesEvento(evento: any){
      console.log("mas info");
      console.log(evento);
      //mandar interfaz donde sale evento con sus imagenes e info?
  }

  editarEvento(evento: any){
    console.log("Editar evento");
    console.log(evento);
  }

  

}