import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketsService } from 'src/app/tickets.service';

import { jsPDF } from "jspdf";
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  cancelar: string;
}

@Component({
  selector: 'app-eventos-comprador',
  templateUrl: './eventos-comprador.component.html',
  styleUrls: ['./eventos-comprador.component.css']
})
export class EventosCompradorComponent implements OnInit {
  cancelar: string = "";
  form: FormGroup;
  loading = false;
  public page: number = 1

  compras = [
    { idEvento: '', nombreEvento: 'Frank', direccionEvento: 'Murphy', nit: 4, total: 123, plazo: 0, cancelable: false, fechaInicio: '', estado: "", cantidadTickets: 0 },
  ];
  constructor(private ticketsService: TicketsService, private fb: FormBuilder, private router: Router, public dialog: MatDialog) {

    this.form = this.fb.group({

    })
  }
  getComprasCliente() {
    //mandar id del cliente loggeado
    this.ticketsService.getComprasIdCliente(this.ticketsService._id).subscribe((response: any) => {
      console.log(response);
      this.compras = response
      if (response.length == 0) {
        console.log("vacio")
      } else {
        console.log("hay resultado")
      }
    });
  }
  ngOnInit(): void {
    this.getComprasCliente();
  }
  esCancelable(compra: any) {
    //console.log("estado: "+compra.estado);
    if (compra.estado == "cancelada") {
      return true;
    }
    var i = new Date(compra.fechaInicio.toString());
    //console.log("FECHA INICIO: "+ i);
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    //console.log("FECHA ACTUAL: "+d);
    d.setDate(d.getDate() + compra.plazo);
    //console.log("FECHA PLAZO: "+d);
    if (compra.cancelable == true && (d.getTime() <= i.getTime())) {
      return false;
    }
    else {
      return true;
    }
  }
  detallesCompra(compra: any) {
    console.log("mas info");
    console.log(compra);
    //asignamos id del evento comprado a _idEvento
    this.ticketsService._idEvento = compra.idEvento;
    this.ticketsService.nombreEvento = compra.nombreEvento;
    this.ticketsService.direccionEvento = compra.direccionEvento;
    this.ticketsService.nit = compra.nit;
    this.ticketsService.total = compra.total;
    this.router.navigate(['/dashboard-comprador/infoevenc']);
  }


  //llenar con metodos para comentarios, calificacion y cancelacion
  cancelarcompra(compra: any) {
    let obj = '{'
    obj += '"_id" : "' + compra._id + '"'
    obj += '}'
    let string = JSON.stringify(obj);
    this.ticketsService.putCancelarCompra(JSON.parse(string)).subscribe((response: any) => {
      console.log("Compra cancelada");
    });
    let obj2 = '{'
    obj2 += '"_id" : "' + compra.idEvento + '",'
    obj2 += '"ticketsVendidos" : ' + compra.cantidadTickets + ''
    obj2 += '}'
    let string2 = JSON.stringify(obj2);
    this.ticketsService.putDevolverTickets(JSON.parse(string2)).subscribe((response: any) => {
      console.log("Tickets devueltos");
      this.router.navigate(['dashboard-comprador/eventoscom']);
    });
  }
  /*comentar(compra: any) {

  }
  calificar(compra: any) {

  }*/

  descargarFactura(compra: any) {

    //crear pdf de factura
    let docF = new jsPDF();
    docF.setFontSize(15)
    docF.text(' Número de factura: ' + compra.numeroFactura +
      '\n Número SFV: ' + compra.numeroSFV + '\n Actividad económica: Venta de tickets \n Título: Factura \n NIT: ' +
      compra.nit + '\n Fecha de emisión: ' + this.formatearFecha(compra.fechaEmision) + '\n Código del evento: ' + compra.idEvento + '\n Nombre del evento: ' + compra.nombreEvento +
      '\n Fecha de inicio: ' + this.formatearFecha(compra.fechaInicio) + '       Fecha de conclusión: ' + this.formatearFecha(compra.fechaFin) +
      '\n Nombre: ' + this.capitalizarPrimeraLetra(compra.apellido1) + " " + this.capitalizarPrimeraLetra(compra.apellido2)
      + " " + this.capitalizarPrimeraLetra(compra.nombre1) + " " + this.capitalizarPrimeraLetra(compra.nombre2) + '\n Cantidad de tickets: ' +
      compra.cantidadTickets + '\n Precio unitario: ' + compra.precioUnitario + '           Costo total: ' + compra.total
      , 10, 10);
    docF.save("factura.pdf");

    console.log("descarga factura");
  }
  descargarTickets(compra: any) {
    console.log(compra)
    //crear pdfs de tickets
    for (let i = 0; i < compra.cantidadTickets; i++) {
      let doc = new jsPDF();
      doc.setFontSize(15)
      doc.text(' Número de factura: ' + compra.numeroFactura +
        '\n Número SFV: ' + compra.numeroSFV + '\n NIT: ' +
        compra.nit + '\n Fecha de emisión: ' + this.formatearFecha(compra.fechaEmision) + '\n Código del evento: ' + compra.idEvento + '\n Nombre del evento: ' + compra.nombreEvento +
        '\n Fecha de inicio: ' + this.formatearFecha(compra.fechaInicio) + '       Fecha de conclusión: ' + this.formatearFecha(compra.fechaFin) +
        '\n Nombre: ' + this.capitalizarPrimeraLetra(compra.apellido1) + " " + this.capitalizarPrimeraLetra(compra.apellido2)
        + " " + this.capitalizarPrimeraLetra(compra.nombre1) + " " + this.capitalizarPrimeraLetra(compra.nombre2) + '\n Ticket ' + (i + 1) + "/" + compra.cantidadTickets
        , 10, 10);
      doc.save("ticket" + (i + 1) + ".pdf");
    }
    console.log("descarga tickets");
  }

  capitalizarPrimeraLetra(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  formatearFecha(dateObj: Date) {
    console.log(dateObj)
    return //dateObj.getUTCDate()+ "/" + (dateObj.getUTCMonth() + 1) + "/"+dateObj.getUTCFullYear() ;
    dateObj
  }
  openDialog(compra: any): void {
    const dialogRef = this.dialog.open(DialogComponentData14, {
      width: '250px',
      data: { cancelar: this.cancelar },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result == true) {
        this.cancelarcompra(compra);
      }
      else {
        this.getComprasCliente();
      }
    });
  }
}
@Component({
  selector: 'dialogcontent',
  templateUrl: './Dialog14.html',
})
export class DialogComponentData14 {
  constructor(
    public dialogRef: MatDialogRef<DialogComponentData14>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router,
    private ticketsService: TicketsService

  ) { dialogRef.disableClose = true }

  onNoClick(): void {
    this.dialogRef.close();
  }
}