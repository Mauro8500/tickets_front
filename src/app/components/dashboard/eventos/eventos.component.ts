import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/tickets.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  form: FormGroup;
  loading = false;

  date

  eventos = [
    { nombre: 'Frank', lugar: 'Murphy', precio: 4, estado: "cancelado" },
];
  constructor(private ticketsService: TicketsService, private fb: FormBuilder) {

  this.form = this.fb.group({
    nombre: ['', Validators.required]
  })

  this.date = new Date()
  this.date.setHours(0,0,0,0)
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

  comprarTickets(evento: any){
    console.log("comprar tickets");
    console.log(evento);
    //mandar interfaz donde sale evento con sus imagenes e info?
}

eventoTerminado(evento: any){
  if(this.date>evento.fechaFin){
    return true
  }else{
    return false
  }
}

noTickets(evento: any){
  if(evento.ticketsVendidos==evento.capacidad){
    return true
  }else{
    return false
  }
}

}
