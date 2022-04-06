import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { EventosComponent } from './eventos/eventos.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { RegistrosComponent } from './registros/registros.component';
import { FormVendedorComponent } from './form-vendedor/form-vendedor.component';
import { FormEventoComponent } from './form-evento/form-evento.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { FormCompradorComponent } from './form-comprador/form-comprador.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', component: InicioComponent },
    { path: 'eventos', component: EventosComponent },
    { path: 'empresa', component: EmpresaComponent },
    { path: 'registros', component: RegistrosComponent },
    { path: 'form-vendedor', component: FormVendedorComponent },
    { path: 'form-comprador', component: FormCompradorComponent },
    { path: 'form-empresa', component: FormEmpresaComponent },
    { path: 'form-evento', component: FormEventoComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
