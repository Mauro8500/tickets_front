import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TicketsService } from 'src/app/tickets.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compraticket',
  templateUrl: './compraticket.component.html',
  styleUrls: ['./compraticket.component.css']
})
export class CompraticketComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private ticketsService: TicketsService, private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {

    this.form = this.fb.group({
      cantidadTickets: ['',Validators.required],
      nombre: ['',Validators.required],
      celular: ['',Validators.required],
      ci: ['',Validators.required],
      correo: ['',Validators.required],
      tarjeta: ['',Validators.required],
      expiracion: ['',Validators.required],
      cvc: ['',Validators.required],
      facturanom: ['',Validators.required],
      facturaape: ['',Validators.required],
      direccion: [''],
      pais: [''],
      departamento: ['',Validators.required],
    })
   }
  

  ngOnInit(): void {
  }

  registrar(){
    const nit = this.form.value.nit;
    const cantidadTickets = this.form.value.cantidadTickets;

    let obj = '{'
    if(nit!=''){
      obj+='"nit" : '+nit+','
    }
    if(cantidadTickets!=''){
      obj+='"cantidadTickets" : '+cantidadTickets+','
    }
    obj+='"idEvento" : "idEvento ejemplo",'
    obj+='"nombreEvento" : "nombreEvento ejemplo",'
    obj+='"direccionEvento" : "direccionEvento ejemplo",'
    obj+='"fechaInicio" : "2023-03-03",'
    obj+='"fechaFin" : "2023-03-03",'
    obj+='"idCliente" : "idCliente ejemplo",'
    obj+='"nombre1" : "nombre1 ejemplo",'
    obj+='"nombre2" : "nombre2 ejemplo",'
    obj+='"apellido1" : "apellido1 ejemplo",'
    obj+='"apellido2" : "apellido2 ejemplo",'
    obj+='"precioUnitario" : 350,'
    obj+='"correoCliente" : "correoCliente ejemplo",'
    obj+='"numTelefono" : 23213,'
    obj+='"smsActivado" : false}';

    //convierte objeto to a string
    let string = JSON.stringify(obj);
    console.log(JSON.parse(string))
    //post para registro
    this.ticketsService.postEventos(JSON.parse(string)).subscribe((response: any)=>{
      console.log("compra registrada exitosamente")
    },
    error => {
      if(this.mensajeError(error)==JSON.stringify("Se requieren los parametros idEvento, nombreEvento, direccionEvento, fechaInicio, fechaFin, idCliente, nombre1, apellido1, apellido2, nit, cantidadTickets, precioUnitario, correoCliente y smsActivado")){
        console.log("Se requieren los parametros idEvento, nombreEvento, direccionEvento, fechaInicio, fechaFin, idCliente, nombre1, apellido1, apellido2, nit, cantidadTickets, precioUnitario, correoCliente y smsActivado")
      }else{
        if(this.mensajeError(error)==JSON.stringify("cantidadTickets debe ser positiva")){
          console.log("cantidadTickets debe ser positiva")
        }else{
          console.log("Verifique sus datos")
        }
      }
    },);
  }


  mensajeError(obj: any): string {
        //convierte objeto to a string
        let string = JSON.stringify(obj);

        let json = JSON.parse(string)
    return JSON.stringify(json.error)
  }
}