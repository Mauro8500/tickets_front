import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-form-vendedor',
  templateUrl: './form-vendedor.component.html',
  styleUrls: ['./form-vendedor.component.css']
})
export class FormVendedorComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private ticketsService: TicketsService, private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      nacimiento: ['', Validators.required],
      ci: ['', Validators.required],
      email: ['', Validators.required],
      ciudadres: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  registrar(){
    const nombre = this.form.value.nombre;
    const apellidos = this.form.value.apellidos;
    const nacimiento = this.form.value.nacimiento;
    const ci= this.form.value.ci;
    const email = this.form.value.email;
    const ciudadres = this.form.value.ciudadres;
    //post para registro
    this.ticketsService.postVendedores("nombre1","nombre2","apellido1","apellido2",new Date('1999-02-26'),"password","password","ci",
    "carlosmendizabaltickets@gmail.com",720329493,"departamento","ciudad","banco","cuenta",false,"nombreEmpresa",279723444,
    "direccionEmpresa","sitioWebEmpresa").subscribe((response: any)=>{
      console.log(response);
    });
  }
}
