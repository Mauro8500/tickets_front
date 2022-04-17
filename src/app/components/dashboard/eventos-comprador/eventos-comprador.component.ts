import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketsService } from 'src/app/tickets.service';

//Requerimientos para creacion de PDF
const PDFDocument = require('pdfkit');

@Component({
  selector: 'app-eventos-comprador',
  templateUrl: './eventos-comprador.component.html',
  styleUrls: ['./eventos-comprador.component.css']
})
export class EventosCompradorComponent implements OnInit {

  form: FormGroup;
  loading = false;

  compras = [
    { nombreEvento: 'Frank', direccionEvento: 'Murphy', nit: 4, total:123 },
  ];
  constructor(private ticketsService: TicketsService, private fb: FormBuilder) {

  this.form = this.fb.group({

  })
}
  ngOnInit(): void {
    //mandar id del cliente loggeado
    this.ticketsService.getComprasIdCliente("6254efe0e70d04c8bac51cd5").subscribe((response: any)=>{
      console.log(response);
      this.compras = response
      if(response.length==0){
        console.log("vacio")
      }else{
        console.log("hay resultado")
      }
    });
  }

  detallesCompra(compra: any){
      console.log("mas info");
      console.log(compra);
  }

  descargarFactura(compra: any){
    //crear pdf de factura
   /* let pdf = new PDFDocument;
    pdf.fontSize(15).text(' Número de factura: '+compra.numeroFactura+
    '\n Número SFV: '+compra.numeroSFV+'\n Actividad económica: Venta de tickets \n Título: Factura \n NIT: '+
    compra.nit+'\n Fecha de emisión: '+this.formatearFecha(compra.fechaEmision)+'\n Código del evento: '+compra.idEvento+'\n Nombre del evento: '+compra.nombreEvento+
    '\n Fecha de inicio: '+this.formatearFecha(compra.fechaInicio)+'       Fecha de conclusión: '+this.formatearFecha(compra.fechaFin)+
    '\n Nombre: '+this.capitalizarPrimeraLetra(compra.apellido1)+" "+this.capitalizarPrimeraLetra(compra.apellido2)
    +" "+this.capitalizarPrimeraLetra(compra.nombre1)+" "+this.capitalizarPrimeraLetra(compra.nombre2)+'\n Cantidad de tickets: '+
    compra.cantidadTickets+'\n Precio unitario: '+compra.precioUnitario+'           Costo total: '+compra.total
    , 100, 100);

pdf.end();*/
//TODO descargar factura
console.log("descarga factura");
//console.log(pdf);
}
descargarTickets(compra: any){
//crear tickets
/*for(let i = 0; i<compra.cantidadTickets; i++){
let pdfaux =new PDFDocument
pdfaux.fontSize(15).text(' Número de factura: '+compra.numeroFactura+
  '\n Número SFV: '+compra.numeroSFV+'\n NIT: '+
  compra.nit+'\n Fecha de emisión: '+this.formatearFecha(compra.fechaEmision)+'\n Código del evento: '+compra.idEvento+'\n Nombre del evento: '+compra.nombreEvento+
  '\n Fecha de inicio: '+this.formatearFecha(compra.fechaInicio)+'       Fecha de conclusión: '+this.formatearFecha(compra.fechaFin)+
  '\n Nombre: '+this.capitalizarPrimeraLetra(compra.apellido1)+" "+this.capitalizarPrimeraLetra(compra.apellido2)
  +" "+this.capitalizarPrimeraLetra(compra.nombre1)+" "+this.capitalizarPrimeraLetra(compra.nombre2)+'\n Ticket '+(i+1)+"/"+compra.cantidadTickets
  , 100, 100);
pdfaux.end();*/
//TODO descargar tickets
console.log("descarga tickets");
//console.log(pdfaux);
//}
}

/*capitalizarPrimeraLetra(string: string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}*/

/*formatearFecha(dateObj: Date){
return dateObj.getUTCDate()+ "/" + (dateObj.getUTCMonth() + 1) + "/"+dateObj.getUTCFullYear() ;
}*/

}
