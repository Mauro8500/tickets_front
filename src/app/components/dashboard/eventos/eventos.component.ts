import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor(private ticketsService: TicketsService) { }

  ngOnInit(): void {
    this.ticketsService.getEventos().subscribe((response: any)=>{
      console.log(response);
    });
  }

  getEventosNombre(nombre: String){
    this.ticketsService.getEventosNombre(nombre).subscribe((response: any)=>{
      console.log(response);
    });
  }

}
