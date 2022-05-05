import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-navbarcom',
  templateUrl: './navbarcom.component.html',
  styleUrls: ['./navbarcom.component.css']
})
export class NavbarcomComponent implements OnInit {
  loginStatus = false;
  constructor(private ticketsService: TicketsService) {
    ticketsService.isUserLoggedIn.subscribe( value =>{
      this.loginStatus = value;
    });
   }

  ngOnInit(): void {
    var data1 = localStorage.getItem('datos');
    if(data1 != null){
      var data = JSON.parse(data1??'');
      this.ticketsService.estaLogeado = true;
      console.log("LOCAL STORAGE EXISTE");
    }
    else{
      this.ticketsService.estaLogeado = false;
      console.log("NO HAY LOCAL STORAGE");      
    }
    this.loginStatus = this.ticketsService.estaLogeado;
    console.log("LOGIN: "+this.loginStatus);
  }

  logout() {

    //controladores
    this.ticketsService.estaLogeado = false //false si no hay sesion activa
    this.ticketsService.esCliente = false //false si es vendedor

    //datos cliente y vendedor
    this.ticketsService._id = ""
    this.ticketsService.nombre1 = ""
    this.ticketsService.nombre2 = ""
    this.ticketsService.apellido1 = ""
    this.ticketsService.apellido2 = ""
    this.ticketsService.fechaNacimiento = ""
    this.ticketsService.password = ""
    this.ticketsService.ci = ""
    this.ticketsService.mail = ""
    this.ticketsService.departamento = ""
    this.ticketsService.ciudad = ""
    this.ticketsService.estado = false //false significa que la cuenta no ha sido confirmada por correo
    this.ticketsService.telefono = 0 //telefono personal de cliente o vendedor. 0 = no tiene

    //datos cliente
    this.ticketsService.smsActivado = false //si es true el cliente recibe una confirmacion de compra por Sms

    //datos vendedor (persona)
    this.ticketsService.banco = ""
    this.ticketsService.cuenta = "" //string
    this.ticketsService.esEmpresa = false //false significa que es vendedor persona y true significa que es vendedor empresa  

    //datos vendedor (empresa)
    this.ticketsService.nombreEmpresa = ""
    this.ticketsService.telefonoEmpresa = 0 //0 significa que no tiene
    this.ticketsService.direccionEmpresa = ""
    this.ticketsService.sitioWebEmpresa = ""

    //evento
    this.ticketsService._idEvento = "" //en endpoint se llama solo _id
    this.ticketsService.nombre = ""
    this.ticketsService.lugar = ""
    this.ticketsService.capacidad = 0 //default 0
    this.ticketsService.estadoEvento = "" //pendiente, cancelado y TODO terminado (se llama solo estado en endpoint)
    this.ticketsService.organizador = "" //id de vendedor
    this.ticketsService.fechaInicio = ""
    this.ticketsService.fechaFin = ""
    this.ticketsService.precio = 0 //default 0
    //this.imagenes = [] //default vector vacio

    //compra
    this.ticketsService._idCompra = "" //solo _id en endpoint
    this.ticketsService.idEvento = ""
    this.ticketsService.nombreEvento = ""
    this.ticketsService.direccionEvento = ""
    this.ticketsService.fechaInicioCompra = "" //solo fechaInicio en endpoint
    this.ticketsService.fechaFinCompra = "" //solo fechaFin en endpoint
    this.ticketsService.idCliente = ""
    this.ticketsService.nombre1Compra = "" //solo nombre1 en endpoint
    this.ticketsService.nombre2Compra = "" //solo nombre2 en endpoint
    this.ticketsService.apellido1Compra = "" //solo apellido1 en endpoint
    this.ticketsService.apellido2Compra = "" //solo apellido2 en endpoint
    this.ticketsService.nit = 0
    this.ticketsService.cantidadTickets = 0
    this.ticketsService.precioUnitario = 0
    this.ticketsService.estadoCompra = "" //completada o cancelada (solo estado en endpoint)
    this.ticketsService.numeroFactura = 0
    this.ticketsService.numeroSFV = 0
    this.ticketsService.fechaEmision = ""
    this.ticketsService.total = 0
    console.log("log estado" + this.ticketsService.estaLogeado)
    localStorage.clear();
  }
}
