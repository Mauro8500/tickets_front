import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TicketsService } from 'src/app/tickets.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-evento',
  templateUrl: './form-evento.component.html',
  styleUrls: ['./form-evento.component.css']
})
export class FormEventoComponent implements OnInit {

  form: FormGroup;
  loading = false;

 
  constructor(private ticketsService: TicketsService, private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
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

    let obj = '{'
    if(nombres!=''){
      obj+='"nombres" : "'+nombres+'",'
    }
    if(lugar!=''){
      obj+='"lugar" : "'+lugar+'",'
    }
    if(capacidad!=''){
      obj+='"capacidad" : "'+capacidad+'",'
    }
    if(estado!=''){
      obj+='"estado" : "'+estado+'",'
    }
    if(Organizador!=''){
      obj+='"Organizador" : "'+Organizador+'",'
    }
    if(precio!=''){
      obj+='"precio" : "'+precio+'",'
    }
    
    obj = obj.slice(0, -1); 
    obj+='}';

    //convierte objeto to a string
    let string = JSON.stringify(obj);

    //post para registro de evento
    /*this.ticketsService.postEventos().subscribe((response: any)=>{
      console.log(response);
    });*/
  }


}
