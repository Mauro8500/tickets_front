import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventosComponent } from './eventos/eventos.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { FormCompradorComponent } from './form-comprador/form-comprador.component';
import { FormVendedorComponent } from './form-vendedor/form-vendedor.component';
import { FormEventoComponent } from './form-evento/form-evento.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { RegistrosComponent } from './registros/registros.component';
import { CompraticketComponent } from './compraticket/compraticket.component';
import { PagotarjetaComponent } from './pagotarjeta/pagotarjeta.component';
import { MenuCompradorComponent } from './menu-comprador/menu-comprador.component';
import { EventosCompradorComponent } from './eventos-comprador/eventos-comprador.component';
import { EventosVendedorComponent } from './eventos-vendedor/eventos-vendedor.component';



@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    EventosComponent,
    EmpresaComponent,
    FormCompradorComponent,
    FormVendedorComponent,
    FormEventoComponent,
    FormEmpresaComponent,
    RegistrosComponent,
    CompraticketComponent,
    PagotarjetaComponent,
    MenuCompradorComponent,
    EventosCompradorComponent,
    EventosVendedorComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
