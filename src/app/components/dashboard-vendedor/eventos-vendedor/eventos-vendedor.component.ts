import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketsService } from 'src/app/tickets.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-eventos-vendedor',
  templateUrl: './eventos-vendedor.component.html',
  styleUrls: ['./eventos-vendedor.component.css']
})
export class EventosVendedorComponent implements OnInit {

  form: FormGroup;
  loading = false;

  date
  public page: number = 1
  eventos = [
    { nombre: 'Frank', lugar: 'Murphy', precio: 4, estado: "sadsa", capacidad: 0, ticketsVendidos: 0 },
  ];
  constructor(private ticketsService: TicketsService, private fb: FormBuilder, private router: Router, public dialog: MatDialog) {

    this.form = this.fb.group({
    })

    this.date = new Date()
    this.date.setHours(0, 0, 0, 0)
  }
  getDisponibilidad(evento: any) {
    return evento.capacidad - evento.ticketsVendidos;
  }
  ngOnInit(): void {
    //mandar id del vendedor logeado
    this.ticketsService.getEventosOrganizador(this.ticketsService._id).subscribe((response: any) => {
      console.log(response);
      this.eventos = response
      if (response.length == 0) {
        console.log("vacio")
      } else {
        console.log("hay resultado")
      }
    });
  }

  detallesEvento(evento: any) {
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
    this.router.navigate(['/dashboard-vendedor/infoevenv']);
    //mandar interfaz donde sale evento con sus imagenes e info?
  }

  editarEvento(evento: any) {
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
    this.router.navigate(['/dashboard-vendedor/form-editar'])
  }


  eventoTerminado(evento: any) {
    if (this.date > evento.fechaFin) {
      return true
    } else {
      return false
    }
  }

  eventoCancelado(evento: any) {
    if (evento.estado == "cancelado") {
      return true
    } else {
      return false
    }
  }

  cancelarEvento(evento: any) {
    if (confirm("Estas seguro que deseas cancelar el evento con nombre " + evento.nombre + "?")) {
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
      obj += '"estado" : "cancelado",'
      obj += '"_id" : "' + this.ticketsService._idEvento + '"}';

      //convierte objeto to a string
      let string = JSON.stringify(obj);
      console.log(JSON.parse(string))

      //validar que este autenticado como vendedor
      if (this.ticketsService.estaLogeado == true && this.ticketsService.esCliente == false) {
        console.log("Esta autenticado como vendedor asi que se prosigue")

        //put
        this.ticketsService.putEventos(JSON.parse(string)).subscribe((response: any) => {
          console.log("se logro cancelar el evento")
          let obj2 = '{'
          obj2 += '"idEvento" : "' + this.ticketsService._idEvento + '"}';
          //convierte objeto to a string
          let string2 = JSON.stringify(obj2);
          this.ticketsService.putCancelarComprasDesdeVend(JSON.parse(string2)).subscribe((response: any)=>{
            console.log("Compras canceladas desde vendedor");
          });
  //refrescar interfaz
      //mandar id del vendedor logeado
      this.ticketsService.getEventosOrganizador(this.ticketsService._id).subscribe((response: any) => {
            console.log(response);
            this.eventos = response
            if (response.length == 0) {
              console.log("vacio")
            } else {
              console.log("hay resultado")
            }
          });
        this.openDialog()
      },
      error => {
        if (this.mensajeError(error) == JSON.stringify("Se requieren los parametros _id y estado, capacidad o imagenes")) {
          console.log("Se requieren los parametros _id y estado, capacidad o imagenes")
        } else {
          if (this.mensajeError(error) == JSON.stringify("capacidad debe ser positiva")) {
            console.log("capacidad debe ser positiva")
          } else {
            if (this.mensajeError(error) == JSON.stringify("se vendieron mas tickets que los que desea configurar")) {
              console.log("se vendieron mas tickets que los que desea configurar")
            } else {
              console.log("Verifique sus datos")
            }
          }
        }
      },);




    } else {
      console.log("No esta autenticado o esta autenticado como cliente asi que no prosigue")
    }
  }
}

mensajeError(obj: any): string {
  //convierte objeto to a string
  let string = JSON.stringify(obj);

  let json = JSON.parse(string)
  return JSON.stringify(json.error)
}

openDialog(): void {
  const dialogRef = this.dialog.open(DialogComponentData5, {
    width: '250px',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.ticketsService.getEventosOrganizador(this.ticketsService._id).subscribe((response: any) => {
      console.log(response);
      this.eventos = response
    });
  });
}

}

@Component({
  selector: 'dialogcontent',
  templateUrl: './dialogcancelarevento.html',
})
export class DialogComponentData5 {
  constructor(
    public dialogRef: MatDialogRef<DialogComponentData5>,

  ) { }

  onOkClick(): void {
    this.dialogRef.close();
  }
}
