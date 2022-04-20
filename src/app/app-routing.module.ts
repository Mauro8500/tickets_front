import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LoginComponent } from './components/login/login.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { DashboardCompradorComponent } from './components/dashboard-comprador/dashboard-comprador.component'
import { DashboardVendedorComponent } from './components/dashboard-vendedor/dashboard-vendedor.component'


const routes: Routes = [
//  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule) },
  { path: 'dashboard-comprador', component: DashboardCompradorComponent},
  { path: 'dashboard-comprador', loadChildren: () => import('./components/dashboard-comprador/dashboard-comprador.module').then(x => x.DashboardCompradorModule) },
  { path: 'dashboard-vendedor', component: DashboardVendedorComponent},
  { path: 'dashboard-vendedor', loadChildren: () => import('./components/dashboard-vendedor/dashboard-vendedor.module').then(x => x.DashboardVendedorModule) },
  //{ path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
