import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

import {Mongoose} from 'mongoose';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private webReqService: WebRequestService) { }

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

  putClientesSms(obj: any){
    return this.webReqService.put('clientes',JSON.parse(obj))
  }

  postCompras(obj: any){
      return this.webReqService.post('compras',JSON.parse(obj))
  }

  getComprasIdCliente(_id: String){
    return this.webReqService.get('compras?_id='+_id)
  }
}