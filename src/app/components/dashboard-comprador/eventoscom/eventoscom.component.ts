import { Component, Inject, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/tickets.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

interface Events {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-eventoscom',
  templateUrl: './eventoscom.component.html',
  styleUrls: ['./eventoscom.component.css']
})
export class EventoscomComponent implements OnInit {

  //inicio para ver eventos en el dropdawn sacado de : https://material.angular.io/components/select/overview
  events: Events[] = [
    {value: 'Precio', viewValue: 'Precio'},
    {value: 'Direccion', viewValue: 'Direccion'},
    {value: 'Fecha', viewValue: 'Fecha'},
  ];
//ifin

  data1 = localStorage.getItem('datos');
  data = JSON.parse("{}");
  form: FormGroup;
  loading = false;
  estadoEvento = true;
  public page: number =1

  eventos = [
    { nombre: 'Frank', lugar: 'Murphy', precio: 4 ,estado: 'pendiente', plazo: 0, cancelable: false,fechaFin:''},
];
  constructor(private ticketsService: TicketsService, private fb: FormBuilder,public dialog: MatDialog,  private router: Router) {

  this.form = this.fb.group({
    nombre: ['', Validators.required]

  })
}
  ngOnInit(): void {
    this.ticketsService.getEventos().subscribe((response: any)=>{
      console.log(response);
      this.eventos = response
    });
  }
  getEventosNombre(){
    const nombre = this.form.value.nombre;
    this.ticketsService.getEventosNombre(nombre).subscribe((response: any)=>{
      console.log(response);
      this.eventos = response
      if(response.length==0){
        console.log("vacio")
        this.openDialog();
      }else{
        console.log("hay resultado")
      }
    });
  }

  eventoTerminado(evento: any) {
    var i = new Date(evento.fechaFin.toString());
    //console.log("FECHA INICIO: "+ i);
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    //console.log("FECHA ACTUAL: "+d);
    //console.log("FECHA PLAZO: "+d);
    if (d.getTime() < i.getTime()) {
      return false;
    }
    else {
      return true;
    }

  }

  estaLogeadoCliente(){
    if(this.data1 != null){
      this.data = JSON.parse(this.data1??'');
      if(this.data.estado){
        return true
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
    /*if (this.ticketsService.esCliente==false || this.ticketsService.estaLogeado==false){
      return false
    }else{
      return true
    }*/
  }
  entrarEvento(evento: any){
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
        this.ticketsService.plazo = evento.plazo
        this.ticketsService.calificacion = evento.calificacion
        //this.imagenes = []
      console.log("mas info");
      console.log(evento);
      this.router.navigate(['/dashboard-comprador/masinfoevenc']);
      //mandar interfaz donde sale evento con sus imagenes e info?
  }

  comprarTickets(evento: any){
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
        this.ticketsService.plazo = evento.plazo
        this.ticketsService.cancelable = evento.cancelable
        //this.imagenes = []

    console.log("comprar tickets");
    console.log(evento);

    if(this.ticketsService.estaLogeado==false || this.ticketsService.esCliente == false){
      this.router.navigate(['/dashboard-comprador/logincomprador'])
    }else{
      this.router.navigate(['/dashboard-comprador/compraticket'])
    }
    //mandar interfaz donde sale evento con sus imagenes e info?
}

  openDialog(): void {
  const dialogRef = this.dialog.open(DialogComponentData , {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ticketsService.getEventos().subscribe((response: any)=>{
        console.log(response);
        this.eventos = response
      });
    });
  }


}


@Component({
  selector: 'dialogcontent',
  templateUrl: './dialog/dialogcontent.html',
})
export class DialogComponentData {
  constructor(
    public dialogRef: MatDialogRef<DialogComponentData>,
  
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

//angular material
//angular material2 