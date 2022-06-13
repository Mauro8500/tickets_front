import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { DialogComponentData, EventosComponent } from './eventos/eventos.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { RegistrosComponent } from './registros/registros.component';
import { LoginComponent } from './login/login.component'
import { FormCompradorComponent } from './form-comprador/form-comprador.component';
import { FormVendedorComponent } from './form-vendedor/form-vendedor.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponentData2 } from './form-comprador/form-comprador.component';
/*import { FormEventoComponent } from './form-evento/form-evento.component';
import { CompraticketComponent } from './compraticket/compraticket.component';
import { PagotarjetaComponent } from './pagotarjeta/pagotarjeta.component';
import { MenuCompradorComponent } from './menu-comprador/menu-comprador.component';
import { EventosCompradorComponent } from './eventos-comprador/eventos-comprador.component';
import { EventosVendedorComponent } from './eventos-vendedor/eventos-vendedor.component';*/
import { NgxPaginationModule } from 'ngx-pagination';
import {ChartModule} from 'primeng/chart';
import { BarchartdemoComponent } from './barchartdemo/barchartdemo.component';
import { ChartultmesComponent } from './chartultmes/chartultmes.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    InicioComponent,
    EventosComponent,
    EmpresaComponent,
    RegistrosComponent,
    LoginComponent,
    FormCompradorComponent,
    FormVendedorComponent,
    FormEmpresaComponent,
    DialogComponentData, 
    DialogComponentData2, 
    BarchartdemoComponent, ChartultmesComponent, LoginadminComponent,
    /*FormEventoComponent,
    
    CompraticketComponent,
    PagotarjetaComponent,
    MenuCompradorComponent,
    EventosCompradorComponent,
    EventosVendedorComponent,*/

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatDialogModule,
    NgxPaginationModule,
    ChartModule,
  ]
})
export class DashboardModule { }
