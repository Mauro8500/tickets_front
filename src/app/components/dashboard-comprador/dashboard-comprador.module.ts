import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardCompradorRoutingModule } from './dashboardcom-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardCompradorComponent } from './dashboard-comprador.component';
import { NavbarcomComponent } from './navbarcom/navbarcom.component';
import { InicioComponent } from './inicio/inicio.component';
import { LogincompradorComponent } from './logincomprador/logincomprador.component';
import { EventoscomComponent, DialogComponentData } from './eventoscom/eventoscom.component';
import { MenuCompradorComponent } from './menu-comprador/menu-comprador.component';
import { CompraticketComponent } from './compraticket/compraticket.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { EventosCompradorComponent } from './eventos-comprador/eventos-comprador.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponentData6 } from './compraticket/compraticket.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DialogComponentData10, FormodicomComponent } from './formodicom/formodicom.component';
import { ComentarComponent } from './comentar/comentar.component';
import { CalificarComponent } from './calificar/calificar.component';
import { DialogComponentData11, DialogComponentData12, DialogComponentData13, FormcamcontComponent } from './formcamcont/formcamcont.component';
/*

import { PagotarjetaComponent } from './pagotarjeta/pagotarjeta.component';
import { EventosCompradorComponent } from './eventos-comprador/eventos-comprador.component';
import { EventosVendedorComponent } from './eventos-vendedor/eventos-vendedor.component';*/



@NgModule({
  declarations: [
    DashboardCompradorComponent,
    NavbarcomComponent,
    InicioComponent,
    LogincompradorComponent,
    EventoscomComponent,
    MenuCompradorComponent,
    CompraticketComponent,
    EmpresaComponent,
    EventosCompradorComponent,
    DialogComponentData,
    EventosCompradorComponent,
    DialogComponentData6,
    FormodicomComponent,
    ComentarComponent,
    CalificarComponent,
    FormcamcontComponent,
    DialogComponentData10,
    DialogComponentData11,
    DialogComponentData12,
    DialogComponentData13,
    /*FormCompradorComponent,
    FormVendedorComponent,
    FormEventoComponent,
    FormEmpresaComponent,
    RegistrosComponent,
    
    PagotarjetaComponent,
    
    
    EventosVendedorComponent,*/

  ],
  imports: [
    CommonModule,
    DashboardCompradorRoutingModule,
    SharedModule,
    MatDialogModule,
    NgxPaginationModule,
  ]
})
export class DashboardCompradorModule { }
