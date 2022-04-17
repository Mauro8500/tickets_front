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
    { nombre: 'Frank', lugar: 'Murphy', precio: 4 },
  ];
  constructor(private ticketsService: TicketsService, private fb: FormBuilder) {

  this.form = this.fb.group({
    nombre: ['', Validators.required]
  })
}
  ngOnInit(): void {
    this.ticketsService.getEventos().subscribe((response: any)=>{
      console.log(response);
      this.eventos = response
    });
  }

  getEventosNombre(){
    const nombre = this.form.value.nombre;
    this.ticketsService.getEventosNombre(nombre).subscribe((response: any)=>{
      console.log(response);
      this.eventos = response
      if(response.length==0){
        console.log("vacio")
      }else{
        console.log("hay resultado")
      }
    });
  }

  entrarEvento(evento: any){
      console.log("mas info");
      console.log(evento);
      //mandar interfaz donde sale evento con sus imagenes e info?
  }

  cancelarEvento(evento: any){
    console.log("Cancelar evento");
    console.log(evento);
  }

  editarEvento(evento: any){
    console.log("Editar evento");
    console.log(evento);
  }

  

}