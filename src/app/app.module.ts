import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FormCompradorComponent } from './form-comprador/form-comprador.component';
import { FormVendedorComponent } from './form-vendedor/form-vendedor.component';
import { FormCancelEventoComponent } from './form-cancel-evento/form-cancel-evento.component';
import { FormNuevaEmpresaComponent } from './form-nueva-empresa/form-nueva-empresa.component';
import { FormNuevoEventoComponent } from './form-nuevo-evento/form-nuevo-evento.component';
import { BuscarEventosComponent } from './buscar-eventos/buscar-eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    FormCompradorComponent,
    FormVendedorComponent,
    FormCancelEventoComponent,
    FormNuevaEmpresaComponent,
    FormNuevoEventoComponent,
    BuscarEventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
