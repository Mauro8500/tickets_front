import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardVendedorRoutingModule } from './dashboardven-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardVendedorComponent } from './dashboard-vendedor.component';
import { NavbarvenComponent } from './navbarven/navbarven.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginvendedorComponent } from './loginvendedor/loginvendedor.component';
import { EventosvenComponent } from './eventosven/eventosven.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { FormEventoComponent } from './form-evento/form-evento.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { DialogComponentData5, EventosVendedorComponent } from './eventos-vendedor/eventos-vendedor.component';
import { FormEditarComponent } from './form-editar/form-editar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { InfoevenvComponent } from './infoevenv/infoevenv.component';
import { ModificardatosComponent } from './modificardatos/modificardatos.component';
import { ModificartelefonoComponent } from './modificartelefono/modificartelefono.component';
import { EliminarvendedorComponent } from './eliminarvendedor/eliminarvendedor.component';
import { DialogComponentDataModven, FormodvenComponent } from './formodven/formodven.component';
import { DialogComponentDataElimven, MenuVendedorComponent } from './menu-vendedor/menu-vendedor.component';
import { DialogComponentDataCcv1, DialogComponentDataCcv2, DialogComponentDataCcv3, FormcamcontvComponent } from './formcamcontv/formcamcontv.component';
/*import { RegistrosComponent } from './registros/registros.component';
import { EventosCompradorComponent } from './eventos-comprador/eventos-comprador.component';
import { EventosVendedorComponent } from './eventos-vendedor/eventos-vendedor.component';*/



@NgModule({
  declarations: [
    DashboardVendedorComponent,
    NavbarvenComponent,
    InicioComponent,
    LoginvendedorComponent,
    EventosvenComponent,
    EmpresaComponent,
    FormEventoComponent,
    FormEmpresaComponent,
    EventosVendedorComponent,
    FormEditarComponent,
    EventosVendedorComponent,
    DialogComponentData5,
    InfoevenvComponent,
    ModificardatosComponent,
    ModificartelefonoComponent,
    EliminarvendedorComponent,
    FormodvenComponent,
    MenuVendedorComponent,
    FormcamcontvComponent,
    DialogComponentDataModven,
    DialogComponentDataCcv1,
    DialogComponentDataCcv2,
    DialogComponentDataCcv3,
    DialogComponentDataElimven,
    /*RegistrosComponent,
    EventosCompradorComponent,
*/

  ],
  imports: [
    CommonModule,
    DashboardVendedorRoutingModule,
    SharedModule,
    MatDialogModule,
    NgxPaginationModule
  ]
})
export class DashboardVendedorModule { }
