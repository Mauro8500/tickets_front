import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

import {Mongoose} from 'mongoose';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  estaLogeado
  esCliente
  _id
  nombre1
  nombre2
  apellido1
  apellido2
  fechaNacimiento
  password
  ci
  mail
  departamento
  ciudad
  estado
  telefono
  smsActivado
  banco
  cuenta
  esEmpresa
  nombreEmpresa
  telefonoEmpresa
  direccionEmpresa
  sitioWebEmpresa

  _idEvento
  nombre
  lugar
  capacidad
  estadoEvento
  organizador
  fechaInicio
  fechaFin
  precio
  //imagenes

  _idCompra
  idEvento
  nombreEvento
  direccionEvento
  fechaInicioCompra
  fechaFinCompra
  idCliente
  nombre1Compra
  nombre2Compra
  apellido1Compra
  apellido2Compra
  nit
  cantidadTickets
  precioUnitario
  estadoCompra
  numeroFactura
  numeroSFV
  fechaEmision
  total

  constructor(private webReqService: WebRequestService) { 
    
    //controladores
    this.estaLogeado = false //false si no hay sesion activa
    this.esCliente = false //false si es vendedor

    //datos cliente y vendedor
    this._id = ""
    this.nombre1 = ""
    this.nombre2 = ""
    this.apellido1 = ""
    this.apellido2 = ""
    this.fechaNacimiento = ""
    this.password = ""
    this.ci = ""
    this.mail = ""
    this.departamento = ""
    this.ciudad = ""
    this.estado = false //false significa que la cuenta no ha sido confirmada por correo
    this.telefono = 0 //telefono personal de cliente o vendedor. 0 = no tiene
    
    //datos cliente
    this.smsActivado = false //si es true el cliente recibe una confirmacion de compra por Sms

    //datos vendedor (persona)
    this.banco = ""
    this.cuenta = "" //string
    this.esEmpresa = false //false significa que es vendedor persona y true significa que es vendedor empresa  

    //datos vendedor (empresa)
    this.nombreEmpresa = ""
    this.telefonoEmpresa = 0 //0 significa que no tiene
    this.direccionEmpresa = ""
    this.sitioWebEmpresa = ""

    //evento
    this._idEvento = "" //en endpoint se llama solo _id
    this.nombre = ""
    this.lugar = ""
    this.capacidad = 0 //default 0
    this.estadoEvento = "" //pendiente, cancelado y TODO terminado (se llama solo estado en endpoint)
    this.organizador = "" //id de vendedor
    this.fechaInicio = ""
    this.fechaFin = ""
    this.precio = 0 //default 0
    //this.imagenes = [] //default vector vacio

    //compra
    this._idCompra = "" //solo _id en endpoint
    this.idEvento = ""
    this.nombreEvento = ""
    this.direccionEvento = ""
    this.fechaInicioCompra = "" //solo fechaInicio en endpoint
    this.fechaFinCompra = "" //solo fechaFin en endpoint
    this.idCliente = ""
    this.nombre1Compra = "" //solo nombre1 en endpoint
    this.nombre2Compra = "" //solo nombre2 en endpoint
    this.apellido1Compra = "" //solo apellido1 en endpoint
    this.apellido2Compra = "" //solo apellido2 en endpoint
    this.nit = 0
    this.cantidadTickets = 0
    this.precioUnitario = 0
    this.estadoCompra = "" //completada o cancelada (solo estado en endpoint)
    this.numeroFactura = 0
    this.numeroSFV = 0
    this.fechaEmision = ""
    this.total = 0
  }

  postEventos(obj: any){
      return this.webReqService.post('eventos',JSON.parse(obj))
  }

  postClientes(obj: any){
      return this.webReqService.post('clientes',JSON.parse(obj))
  }

  postVendedores(obj: any){
      return this.webReqService.post('vendedores',JSON.parse(obj))
  }

  putEventos(obj: any){
      return this.webReqService.put('eventos',JSON.parse(obj))
  }

  putTickets(obj: any){
    return this.webReqService.put('tickets',JSON.parse(obj))
}

  getEventos(){
    return this.webReqService.get('eventos')
  }

  getEventosNombre(nombre: String){
    return this.webReqService.get('eventos?nombre='+nombre)
  }

  getEventosOrganizador(organizador: String){
    return this.webReqService.get('eventos?organizador='+organizador)
  }

  getClientes(){
    return this.webReqService.get('clientes')
  }
  
  getVendedores(){
    return this.webReqService.get('vendedores')
  }

  getClientesId(_id: String){
    return this.webReqService.get('clientes?_id='+_id)
  }

  getVendedoresId(_id: String){
    return this.webReqService.get('vendedores?_id='+_id)
  }

  getVendedoresMail(mail: String){
    return this.webReqService.get('vendedores?mail='+mail)
  }

  putClientesSms(obj: any){
    return this.webReqService.put('clientes',JSON.parse(obj))
  }

  postCompras(obj: any){
      return this.webReqService.post('compras',JSON.parse(obj))
  }

  getComprasIdCliente(_id: String){
    return this.webReqService.get('compras?_id='+_id)
  }

  authClientes(mail: String, password: string){
    return this.webReqService.get('authclientes?mail='+mail+'&password='+password)
  }

  authVendedores(mail: String, password: string){
    return this.webReqService.get('authvendedores?mail='+mail+'&password='+password)
  }
}