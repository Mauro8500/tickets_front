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
    /*FormCompradorComponent,
    FormVendedorComponent,
    FormEventoComponent,
    FormEmpresaComponent,
    RegistrosComponent,
    
    PagotarjetaComponent,
    
    EventosCompradorComponent,
    EventosVendedorComponent,*/

  ],
  imports: [
    CommonModule,
    DashboardCompradorRoutingModule,
    SharedModule,
    MatDialogModule
  ]
})
export class DashboardCompradorModule { }
