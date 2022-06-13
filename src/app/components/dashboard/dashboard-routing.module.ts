import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { EventosComponent } from './eventos/eventos.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { RegistrosComponent } from './registros/registros.component';
import { LoginComponent } from './login/login.component';
import { FormVendedorComponent } from './form-vendedor/form-vendedor.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { FormCompradorComponent } from './form-comprador/form-comprador.component';
import { BarchartdemoComponent } from './barchartdemo/barchartdemo.component';
import { ChartultmesComponent } from './chartultmes/chartultmes.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';

/*import { FormEventoComponent } from './form-evento/form-evento.component';
import { CompraticketComponent } from './compraticket/compraticket.component';
import { MenuCompradorComponent } from './menu-comprador/menu-comprador.component';*/


const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'login', component: LoginComponent },
    { path: 'login-admin', component: LoginadminComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'eventos', component: EventosComponent },
    { path: 'empresa', component: EmpresaComponent },
    { path: 'registros', component: RegistrosComponent },
    { path: 'form-vendedor', component: FormVendedorComponent },
    { path: 'form-comprador', component: FormCompradorComponent },
    { path: 'form-empresa', component: FormEmpresaComponent },
    { path: 'chart', component: BarchartdemoComponent },
    { path: 'chart-mes', component: ChartultmesComponent },
    /*{ path: 'form-evento', component: FormEventoComponent },*/
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
