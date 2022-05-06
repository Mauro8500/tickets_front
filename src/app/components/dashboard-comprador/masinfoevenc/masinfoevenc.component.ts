import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-masinfoevenc',
  templateUrl: './masinfoevenc.component.html',
  styleUrls: ['./masinfoevenc.component.css']
})
export class MasinfoevencComponent implements OnInit {
  public page: number = 1
  nombreEvento: any;
  direccionEvento: any;
  precioEvento: any;
  plazoEvento: any;
  calificacionEvento: any;
  cantCalifEvento: any;

  comentarios = [{ idCliente: "", comentario: "" }];

  constructor(private ticketsService: TicketsService, private router: Router) {

  }

  ngOnInit(): void {
    this.getListaComentarios();
    this.setDatosEventoComprado();
  }

  getListaComentarios() {
    this.ticketsService.getComentarios(this.ticketsService._idEvento).subscribe((response: any) => {
      console.log(response);
      this.comentarios = response
    });
  }
  setDatosEventoComprado() {
    this.nombreEvento = this.ticketsService.nombre
    this.direccionEvento = this.ticketsService.lugar
    this.precioEvento = this.ticketsService.precio
    this.plazoEvento = this.ticketsService.plazo
    this.ticketsService.getCalificaciones(this.ticketsService._idEvento).subscribe((response: any) => {
      console.log(response);
      this.calificacionEvento = response[1]
      this.cantCalifEvento = response[0]
    });
  }
}
