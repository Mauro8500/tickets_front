import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/tickets.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router'
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  form: FormGroup;
  loading = false;

  date: Date;

  eventos = [
    { nombre: 'Frank', lugar: 'Murphy', precio: 4, estado: "cancelado" },
];
  constructor(private ticketsService: TicketsService, private fb: FormBuilder, public dialog: MatDialog,private router: Router) {

  this.form = this.fb.group({
    nombre: ['', Validators.required]
  })

  this.date = new Date()
  this.date.setHours(0,0,0,0)
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
      console.log("mas info");
      console.log(evento);
      //mandar interfaz donde sale evento con sus imagenes e info?
  }

  comprarTickets(evento: any){
    console.log("comprar tickets");
    console.log(evento);
    if(this.ticketsService.estaLogeado == false || this.ticketsService.esCliente == false){
      this.router.navigate(['/dashboard-comprador/logincomprador'])
    }
    //mandar interfaz donde sale evento con sus imagenes e info?
}

eventoTerminado(evento: any){
  if(this.date>evento.fechaFin){
    return true
  }else{
    return false
  } 
}

noTickets(evento: any){
  if(evento.ticketsVendidos==evento.capacidad){
    return true
  }else{
    return false
  }
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

  onOkClick(): void {
    this.dialogRef.close();
  }
}
