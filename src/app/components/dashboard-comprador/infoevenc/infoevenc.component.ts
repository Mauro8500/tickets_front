import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-infoevenc',
  templateUrl: './infoevenc.component.html',
  styleUrls: ['./infoevenc.component.css']
})
export class InfoevencComponent implements OnInit {
  public page: number = 1
  nombreEvento: any;
  direccionEvento: any;
  nit: any;
  total: any;
  calificacion: any;
  showTicks = false;
  autoTicks = false;
  tickInterval = 1;
  value = 1;
  form: FormGroup;

  comentarios = [{ idCliente: "", comentario: "" }];

  constructor(private ticketsService: TicketsService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      comentario: ['', Validators.required]
    });
  }
  
  comentar() {
    const idEvento = this.ticketsService._idEvento;
    const idCliente = this.ticketsService._id;
    const comentario = this.form.value.comentario;
    const calificacion = this.ticketsService.calificacion;
    console.log("CALIFICACION " + this.value);
    let obj = '{'
    obj += '"idCliente" : "'
     + idCliente + '",'
    obj += '"idEvento" : "' + idEvento + '",'
    obj += '"comentario" : "' + comentario + '"'
    obj += '}';
    let string = JSON.stringify(obj);
    console.log(JSON.parse(string));

    let obj2 = '{'
    obj2 += '"idCliente" : "' + idCliente + '",'
    obj2 += '"idEvento" : "' + idEvento + '",'
    obj2 += '"calificacion" : ' + this.value + ''
    obj2 += '}';
    let string2 = JSON.stringify(obj2);
    console.log(JSON.parse(string2));

    this.ticketsService.postComentarios(JSON.parse(string)).subscribe((response: any) => {
      console.log("comentario realizado");
      this.ticketsService.postCalificaciones(JSON.parse(string2)).subscribe((response: any) => {
        console.log("calificacion realizada");
        this.getListaComentarios();
      },
        error => {
          console.log("no se pudo calificar");
        });
    },
      error => {
        console.log("no se pudo comentar");
      });

    
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000);
    }
    return value;
  }
  ngOnInit(): void {
    this.getListaComentarios();
  }
  getListaComentarios() {
    const idEvento = this.ticketsService._idEvento;
    this.nombreEvento = this.ticketsService.nombreEvento;
    this.direccionEvento = this.ticketsService.direccionEvento;
    this.nit = this.ticketsService.nit;
    this.total = this.ticketsService.total;
    this.ticketsService.getCalificaciones(this.ticketsService._idEvento).subscribe((response: any) => {
      console.log(response[1]);
      this.calificacion = response[1];
    });
    this.ticketsService.getComentarios(this.ticketsService._idEvento).subscribe((response: any) => {
      console.log(response);
      this.comentarios = response
    });
  }

}
