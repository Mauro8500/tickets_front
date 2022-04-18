import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-eventos-vendedor',
  templateUrl: './eventos-vendedor.component.html',
  styleUrls: ['./eventos-vendedor.component.css']
})
export class EventosVendedorComponent implements OnInit {

  form: FormGroup;
  loading = false;

  date

  eventos = [
    { nombre: 'Frank', lugar: 'Murphy', precio: 4 ,estado:"sadsa"},
  ];
  constructor(private ticketsService: TicketsService, private fb: FormBuilder) {

  this.form = this.fb.group({
  })

  this.date = new Date()
  this.date.setHours(0,0,0,0)
}
  ngOnInit(): void {
    //mandar id del vendedor logeado
    this.ticketsService.getEventosOrganizador(this.ticketsService._id).subscribe((response: any)=>{
      console.log(response);
      this.eventos = response
      if(response.length==0){
        console.log("vacio")
      }else{
        console.log("hay resultado")
      }
    });
  }

  detallesEvento(evento: any){
            //set evento
            this.ticketsService._idEvento = evento._id
            this.ticketsService.nombre = evento.nombre
            this.ticketsService.lugar = evento.lugar
            this.ticketsService.capacidad = evento.capacidad
            this.ticketsService.estadoEvento = evento.estado
            this.ticketsService.organizador = evento.organizador
            this.ticketsService.fechaInicio = evento.fechaInicio
            this.ticketsService.fechaFin = evento.fechaFin
            this.ticketsService.precio = evento.precio
            //this.imagenes = []
      console.log("mas info");
      console.log(evento);
      //mandar interfaz donde sale evento con sus imagenes e info?
  }

  editarEvento(evento: any){
            //set evento
            this.ticketsService._idEvento = evento._id
            this.ticketsService.nombre = evento.nombre
            this.ticketsService.lugar = evento.lugar
            this.ticketsService.capacidad = evento.capacidad
            this.ticketsService.estadoEvento = evento.estado
            this.ticketsService.organizador = evento.organizador
            this.ticketsService.fechaInicio = evento.fechaInicio
            this.ticketsService.fechaFin = evento.fechaFin
            this.ticketsService.precio = evento.precio
            //this.imagenes = []
    console.log("Editar evento");
    console.log(evento);
  }

  
  eventoTerminado(evento: any){
    if(this.date>evento.fechaFin){
      return true
    }else{
      return false
    }
  }
  
  cancelarEvento(evento: any){
    //set evento
    this.ticketsService._idEvento = evento._id
    this.ticketsService.nombre = evento.nombre
    this.ticketsService.lugar = evento.lugar
    this.ticketsService.capacidad = evento.capacidad
    this.ticketsService.estadoEvento = evento.estado
    this.ticketsService.organizador = evento.organizador
    this.ticketsService.fechaInicio = evento.fechaInicio
    this.ticketsService.fechaFin = evento.fechaFin
    this.ticketsService.precio = evento.precio
    //this.imagenes = []
console.log("Cancelar evento");
console.log(evento);

let obj = '{'
  obj+='"estado" : "cancelado",'
obj+='"_id" : "'+this.ticketsService._idEvento+'"}';

//convierte objeto to a string
let string = JSON.stringify(obj);
console.log(JSON.parse(string))

    //validar que este autenticado como vendedor
    if(this.ticketsService.estaLogeado == true && this.ticketsService.esCliente == false){
      console.log("Esta autenticado como vendedor asi que se prosigue")

//put
this.ticketsService.putEventos(JSON.parse(string)).subscribe((response: any)=>{
  console.log("se logro cancelar el evento")
  //refrescar interfaz
},
error => {
  if(this.mensajeError(error)==JSON.stringify("Se requieren los parametros _id y estado, capacidad o imagenes")){
    console.log("Se requieren los parametros _id y estado, capacidad o imagenes")
  }else{
    if(this.mensajeError(error)==JSON.stringify("capacidad debe ser positiva")){
      console.log("capacidad debe ser positiva")
    }else{
              if(this.mensajeError(error)==JSON.stringify("se vendieron mas tickets que los que desea configurar")){
      console.log("se vendieron mas tickets que los que desea configurar")
    }else{
        console.log("Verifique sus datos")
    }
    }
  }
},);




    }else{
      console.log("No esta autenticado o esta autenticado como cliente asi que no prosigue")
    }
} 

mensajeError(obj: any): string {
  //convierte objeto to a string
  let string = JSON.stringify(obj);

  let json = JSON.parse(string)
return JSON.stringify(json.error)
}
}


//html form editar evento
/*
<div class="body">
    <div class="form">
        <mat-spinner *ngIf="loading" class ="spinner "diameter="50"></mat-spinner>
        
        <form [formGroup]="form" (ngSubmit)="cambiarCapacidad()">
            <h1>Edicion de evento</h1>
            <mat-form-field class="ancho" appearance="fill">
                <mat-label>Capacidad</mat-label>
                <input type="number" matInput autocomplete="off" formControlName="capacidad">
            </mat-form-field>
            <br>
            <button type="submit" mat-raised-button mat-button color="primary" [disabled]="form.invalid">Cambiar capacidad</button>
        </form>
    </div>
</div> */

//ts editar evento
/* import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-eventos-vendedor',
  templateUrl: './eventos-vendedor.component.html',
  styleUrls: ['./eventos-vendedor.component.css']
})
export class EventosVendedorComponent implements OnInit {

  form: FormGroup;
  loading = false;
  constructor(private ticketsService: TicketsService, private fb: FormBuilder) {

    this.form = this.fb.group({
      capacidad: ['',Validators.required]
    })
}
  ngOnInit(): void {
    
  }

    cambiarCapacidad(){
    const capacidad = this.form.value.capacidad;

    let obj = '{'
    if(capacidad!=''){
      obj+='"capacidad" : '+capacidad+','
    }
    obj+='"_id" : "'+this.ticketsService._idEvento+'"}';

    //convierte objeto to a string

    let string = JSON.stringify(obj);
    console.log(JSON.parse(string))

        //validar que este autenticado como vendedor
        if(this.ticketsService.estaLogeado == true && this.ticketsService.esCliente == false){
          console.log("Esta autenticado como vendedor asi que se prosigue")

    //put
    this.ticketsService.putEventos(JSON.parse(string)).subscribe((response: any)=>{
      console.log("se logro modificar la capacidad del evento")
      //ir a interfaz de eventos vendedor
    },
    error => {
      if(this.mensajeError(error)==JSON.stringify("Se requieren los parametros _id y estado, capacidad o imagenes")){
        console.log("Se requieren los parametros _id y estado, capacidad o imagenes")
      }else{
        if(this.mensajeError(error)==JSON.stringify("capacidad debe ser positiva")){
          console.log("capacidad debe ser positiva")
        }else{
                  if(this.mensajeError(error)==JSON.stringify("se vendieron mas tickets que los que desea configurar")){
          console.log("se vendieron mas tickets que los que desea configurar")
        }else{
            console.log("Verifique sus datos")
        }
        }
      }
    },);




        }else{
          console.log("No esta autenticado o esta autenticado como cliente asi que no prosigue")
        }


    
    
  }


  mensajeError(obj: any): string {
        //convierte objeto to a string
        let string = JSON.stringify(obj);

        let json = JSON.parse(string)
    return JSON.stringify(json.error)
  }
}*/