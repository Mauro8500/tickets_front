import { Component, Inject, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/tickets.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-eventoscom',
  templateUrl: './eventoscom.component.html',
  styleUrls: ['./eventoscom.component.css']
})
export class EventoscomComponent implements OnInit {

  form: FormGroup;
  loading = false;

  eventos = [
    { nombre: 'Frank', lugar: 'Murphy', precio: 4 },
];
  constructor(private ticketsService: TicketsService, private fb: FormBuilder,public dialog: MatDialog) {

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
        //this.imagenes = []
      console.log("mas info");
      console.log(evento);
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
        //this.imagenes = []

    console.log("comprar tickets");
    console.log(evento);
    //mandar interfaz donde sale evento con sus imagenes e info?
}

  openDialog(): void {
  const dialogRef = this.dialog.open(DialogComponentData , {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      window.location.reload();
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