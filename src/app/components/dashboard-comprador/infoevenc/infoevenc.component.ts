import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-infoevenc',
  templateUrl: './infoevenc.component.html',
  styleUrls: ['./infoevenc.component.css']
})
export class InfoevencComponent implements OnInit {
  public page: number =1
  nombreEvento: any;
  direccionEvento: any;
  nit: any;
  total: any;
  form: FormGroup;

  comentarios = [];

  constructor(private ticketsService: TicketsService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      comentario: ['']
    });
   }
  comentar(){

  }
  calificar(){

  }
  ngOnInit(): void {
  }

}
