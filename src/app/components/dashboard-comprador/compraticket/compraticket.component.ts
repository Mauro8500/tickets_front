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
      nit: ['',Validators.required],
      tarjeta: ['',Validators.required],
      expiracion: ['',Validators.required],
      cvc: ['',Validators.required],
      nombre1: ['',Validators.required],
      nombre2: ['',],
      apellido1: ['',Validators.required],
      apellido2: ['',Validators.required]
    })
   }
  

  ngOnInit(): void {
  }

  registrar(){
    const nit = this.form.value.nit;
    const cantidadTickets = this.form.value.cantidadTickets;
    const nombre1 = this.form.value.nombre1;
    const nombre2 = this.form.value.nombre2;
    const apellido1 = this.form.value.apellido1;
    const apellido2 = this.form.value.apellido2;

    let objVerificacion = '{'
    if(cantidadTickets!=''){
      objVerificacion+='"tickets" : '+cantidadTickets+','
    }
    objVerificacion+='"_id" : '+this.ticketsService._idEvento+'}';

    let obj = '{'
    if(nit!=''){
      obj+='"nit" : '+nit+','
    }
    if(cantidadTickets!=''){
      obj+='"cantidadTickets" : '+cantidadTickets+','
    }
    if(nombre1!=''){
      obj+='"nombre1" : "'+nombre1+'",'
    }
    if(nombre2!=''){
      obj+='"nombre2" : "'+nombre2+'",'
    }
    if(apellido1!=''){
      obj+='"apellido1" : "'+apellido1+'",'
    }
    if(apellido2!=''){
      obj+='"apellido2" : "'+apellido2+'",'
    }
    obj+='"idEvento" : "'+this.ticketsService._idEvento+'",'
    obj+='"nombreEvento" : "'+this.ticketsService.nombre+'",'
    obj+='"direccionEvento" : "'+this.ticketsService.lugar+'",'
    obj+='"fechaInicio" : "'+this.ticketsService.fechaInicio+'",'
    obj+='"fechaFin" : "'+this.ticketsService.fechaFin+'",'
    obj+='"idCliente" : "'+this.ticketsService._id+'",'
    obj+='"precioUnitario" : '+this.ticketsService.precio+','
    obj+='"correoCliente" : "'+this.ticketsService.mail+'",'
    obj+='"telefono" : '+this.ticketsService.telefono+','
    obj+='"smsActivado" : '+this.ticketsService.smsActivado+'}';

    //convierte objeto to a string
    let stringVerificacion = JSON.stringify(objVerificacion);
    console.log(JSON.parse(stringVerificacion))

    let string = JSON.stringify(obj);
    console.log(JSON.parse(string))

        //validar que este autenticado como cliente
        if(this.ticketsService.estaLogeado == true && this.ticketsService.esCliente == true){
          console.log("Esta autenticado como cliente asi que se prosigue")


    //verificacion y put
    this.ticketsService.putTickets(JSON.parse(stringVerificacion)).subscribe((response: any)=>{
      console.log("se logro hacer put asi que se prosigue con el registro de compra")

//registro de compra si se logra comprar tickets
this.ticketsService.postCompras(JSON.parse(string)).subscribe((response: any)=>{
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


    },
    error => {
      if(this.mensajeError(error)==JSON.stringify("Se requieren los parametros _id y tickets")){
        console.log("Se requieren los parametros _id y tickets")
      }else{
        if(this.mensajeError(error)==JSON.stringify("el parametro tickets debe ser mayor a 0")){
          console.log("el parametro tickets debe ser mayor a 0")
        }else{
          if(this.mensajeError(error)==JSON.stringify("No alcanzan los tickets")){
            console.log("No alcanzan los tickets")
          }else{
            console.log("Verifique sus datos")
          }
        }
      }
    },);




        }else{
          console.log("No esta autenticado o esta autenticado como vendedor asi que no prosigue")
        }


    
    
  }


  mensajeError(obj: any): string {
        //convierte objeto to a string
        let string = JSON.stringify(obj);

        let json = JSON.parse(string)
    return JSON.stringify(json.error)
  }
}