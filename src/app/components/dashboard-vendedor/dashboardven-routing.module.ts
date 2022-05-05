import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardVendedorComponent } from './dashboard-vendedor.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginvendedorComponent } from './loginvendedor/loginvendedor.component'
import { EventosvenComponent } from './eventosven/eventosven.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { DialogComponentData5, EventosVendedorComponent } from './eventos-vendedor/eventos-vendedor.component';
import { FormEventoComponent } from './form-evento/form-evento.component';
import { FormEditarComponent } from './form-editar/form-editar.component';
import { InfoevenvComponent } from './infoevenv/infoevenv.component';


/*import { RegistrosComponent } from './registros/registros.component';
import { FormVendedorComponent } from './form-vendedor/form-vendedor.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { FormCompradorComponent } from './form-comprador/form-comprador.component';
import { CompraticketComponent } from './compraticket/compraticket.component';
import { MenuCompradorComponent } from './menu-comprador/menu-comprador.component';*/


const routes: Routes = [
  { path: '', component: DashboardVendedorComponent, children: [
    { path: 'loginvendedor', component: LoginvendedorComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'eventosven', component: EventosvenComponent },
    { path: 'empresa', component: EmpresaComponent },
    { path: 'eventos-vendedor', component: EventosVendedorComponent },
    { path: 'form-evento', component: FormEventoComponent },
    { path: 'form-editar', component: FormEditarComponent },
    { path: 'dialogcomponentdata5', component: DialogComponentData5 },
    { path: 'infoevenv', component: InfoevenvComponent},
    /*{ path: 'registros', component: RegistrosComponent },
    { path: 'form-vendedor', component: FormVendedorComponent },
    { path: 'form-comprador', component: FormCompradorComponent },
    { path: 'form-empresa', component: FormEmpresaComponent },
    
    { path: 'compraticket', component: CompraticketComponent},
    { path: 'menu-comprador', component: MenuCompradorComponent}*/
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardVendedorRoutingModule { }
