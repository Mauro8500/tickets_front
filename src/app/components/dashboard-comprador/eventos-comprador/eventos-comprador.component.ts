import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketsService } from 'src/app/tickets.service';

import { jsPDF } from "jspdf";

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
    this.ticketsService.getComprasIdCliente(this.ticketsService._id).subscribe((response: any)=>{
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
let docF = new jsPDF();
docF.setFontSize(15)
docF.text(' Número de factura: '+compra.numeroFactura+
'\n Número SFV: '+compra.numeroSFV+'\n Actividad económica: Venta de tickets \n Título: Factura \n NIT: '+
compra.nit+'\n Fecha de emisión: '+this.formatearFecha(compra.fechaEmision)+'\n Código del evento: '+compra.idEvento+'\n Nombre del evento: '+compra.nombreEvento+
'\n Fecha de inicio: '+this.formatearFecha(compra.fechaInicio)+'       Fecha de conclusión: '+this.formatearFecha(compra.fechaFin)+
'\n Nombre: '+this.capitalizarPrimeraLetra(compra.apellido1)+" "+this.capitalizarPrimeraLetra(compra.apellido2)
+" "+this.capitalizarPrimeraLetra(compra.nombre1)+" "+this.capitalizarPrimeraLetra(compra.nombre2)+'\n Cantidad de tickets: '+
compra.cantidadTickets+'\n Precio unitario: '+compra.precioUnitario+'           Costo total: '+compra.total
, 10, 10);
docF.save("factura.pdf");

console.log("descarga factura");
}
descargarTickets(compra: any){
  console.log(compra)
    //crear pdfs de tickets
    for(let i = 0; i<compra.cantidadTickets; i++){
    let doc = new jsPDF();
    doc.setFontSize(15)
    doc.text(' Número de factura: '+compra.numeroFactura+
    '\n Número SFV: '+compra.numeroSFV+'\n NIT: '+
    compra.nit+'\n Fecha de emisión: '+this.formatearFecha(compra.fechaEmision)+'\n Código del evento: '+compra.idEvento+'\n Nombre del evento: '+compra.nombreEvento+
    '\n Fecha de inicio: '+this.formatearFecha(compra.fechaInicio)+'       Fecha de conclusión: '+this.formatearFecha(compra.fechaFin)+
    '\n Nombre: '+this.capitalizarPrimeraLetra(compra.apellido1)+" "+this.capitalizarPrimeraLetra(compra.apellido2)
    +" "+this.capitalizarPrimeraLetra(compra.nombre1)+" "+this.capitalizarPrimeraLetra(compra.nombre2)+'\n Ticket '+(i+1)+"/"+compra.cantidadTickets
    , 10, 10);
    doc.save("ticket"+(i+1)+".pdf");
}
console.log("descarga tickets");
}

capitalizarPrimeraLetra(string: string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}

formatearFecha(dateObj: Date){
  console.log(dateObj)
return //dateObj.getUTCDate()+ "/" + (dateObj.getUTCMonth() + 1) + "/"+dateObj.getUTCFullYear() ;
dateObj
}

}