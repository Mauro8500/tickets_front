import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-vendedor',
  templateUrl: './form-vendedor.component.html',
  styleUrls: ['./form-vendedor.component.css']
})
export class FormVendedorComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      empresa: ['', Validators.required],
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
    const empresa = this.form.value.empresa;
    const nombre = this.form.value.nombre;
    const apellidos = this.form.value.apellidos;
    const nacimiento = this.form.value.nacimiento;
    const ci= this.form.value.ci;
    const email = this.form.value.email;
    const ciudadres = this.form.value.ciudadres;
    //post para registro
  }

}
