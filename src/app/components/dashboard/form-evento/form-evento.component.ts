import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-form-evento',
  templateUrl: './form-evento.component.html',
  styleUrls: ['./form-evento.component.css']
})
export class FormEventoComponent implements OnInit {

  form: FormGroup;


 
  constructor(private ticketsService: TicketsService, private fb: FormBuilder) {
    this.form = this.fb.group({
      nombres: [''],
      lugar: [''],
      capacidad: [''],
      estado: [''],
      Organizador: [''],
      precio: [''],
    })
   }
  

  ngOnInit(): void {
  }

  registrar(){
    const nombres = this.form.value.nombres;
    const lugar = this.form.value.lugar;
    const capacidad = this.form.value.capacidad;
    const estado= this.form.value.estado;
    const Organizador = this.form.value.Organizador;
    const precio = this.form.value.precio;
    //post para registro de evento
    /*this.ticketsService.postEventos().subscribe((response: any)=>{
      console.log(response);
    });*/
  }


}
