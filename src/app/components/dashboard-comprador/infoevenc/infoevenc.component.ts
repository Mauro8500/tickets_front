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
    let obj = '{'
    obj += '"idCliente" : "' + idCliente + '",'
    obj += '"idEvento" : "' + idEvento + '",'
    obj += '"comentario" : "' + comentario + '"'
    obj += '}';
    let string = JSON.stringify(obj);
    console.log(JSON.parse(string));
    
    this.ticketsService.postComentarios(JSON.parse(string)).subscribe((response: any) => {
      console.log("comentario realizado");
      this.getListaComentarios();
    },
      error => {
        console.log("no se pudo comentar");
      });
  }
  calificar() {

  }
  ngOnInit(): void {
    this.getListaComentarios();
  }
  getListaComentarios(){
    this.ticketsService.getComentarios(this.ticketsService._idEvento).subscribe((response: any) => {
      console.log(response);
      this.comentarios = response
    });
  }

}
