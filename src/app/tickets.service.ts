import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private webReqService: WebRequestService) { }

  postEventos(nombre: String,
    lugar: String,
    capacidad: Number,
    estado: String,
    organizador: String,
    fechaInicio: Date,
    fechaFin:Date,
    precio: Number,
    imagenes: [
      {data: Buffer, contentType: String},
    ]){
      return this.webReqService.post('eventos',{
        "nombre": nombre,
        "lugar": lugar,
        "capacidad": capacidad,
        "estado": estado,
        "organizador": organizador,
        "fechaInicio":fechaInicio,
        "fechaFin":fechaFin,
        "precio":precio,
        "imagenes":imagenes
      })
  }



  postClientes(nombre1: String,
    nombre2: String,
    apellido1: String,
    apellido2: String,
    fechaNacimiento: Date,
    password: String,
    ci: String,
    mail: String,
    telefono: Number,
    departamento: String,
    ciudad: String,
    estado: Boolean,
    smsActivado: Boolean){
      return this.webReqService.post('clientes',{
        "nombre1": nombre1,
        "nombre2": nombre2,
        "apellido1": apellido1,
        "apellido2": apellido2,
        "fechaNacimiento": fechaNacimiento,
        "password": password,
        "ci": ci,
        "mail": mail,
        "telefono": telefono,
        "departamento": departamento,
        "ciudad": ciudad,
        "estado": estado,
        "smsActivado": smsActivado
      })
  }



  postVendedores(nombre1: String,
    nombre2: String,
    apellido1: String,
    apellido2: String,
    fechaNacimiento: Date,
    password: String,
    ci: String,
    mail: String,
    telefono: Number,
    departamento: String,
    ciudad: String,
    estado: Boolean,
    banco: String,
    cuenta: String,
    esEmpresa: Boolean,
    nombreEmpresa: String,
    telefonoEmpresa: Number,
    direccionEmpresa: String,
    sitioWebEmpresa: String){
      return this.webReqService.post('vendedores',{
        "nombre1": nombre1,
        "nombre2": nombre2,
        "apellido1": apellido1,
        "apellido2": apellido2,
        "fechaNacimiento": fechaNacimiento,
        "password": password,
        "ci": ci,
        "mail": mail,
        "telefono": telefono,
        "departamento": departamento,
        "ciudad": ciudad,
        "estado": estado,
        "banco": banco,
        "cuenta": cuenta,
        "esEmpresa": esEmpresa,
        "nombreEmpresa": nombreEmpresa,
        "telefonoEmpresa": telefonoEmpresa,
        "direccionEmpresa": direccionEmpresa,
        "sitioWebEmpresa": sitioWebEmpresa
      })
  }



  putEventosEstado(_id: String,estado: String){
      return this.webReqService.put('eventos',{
        "_id": _id,
        "estado": estado
      })
  }

  putEventosCapacidad(_id: String,capacidad: Number){
    return this.webReqService.put('eventos',{
      "_id": _id,
      "capacidad": capacidad
    })
  }

  putEventosEstadoCapacidad(_id: String,estado: String,capacidad: Number){
      return this.webReqService.put('eventos',{
        "_id": _id,
        "estado": estado,
        "capacidad": capacidad
      })
  }

  getEventos(){
    return this.webReqService.get('eventos')
  }

  getEventosNombre(nombre: String){
    return this.webReqService.get('eventos?nombre='+nombre)
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

  putClientesSms(_id: String,smsActivado: Boolean){
    return this.webReqService.put('clientes',{
      "_id": _id,
      "smsActivado": smsActivado
    })
  }
}
