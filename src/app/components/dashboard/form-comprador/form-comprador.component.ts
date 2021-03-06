import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-comprador',
  templateUrl: './form-comprador.component.html',
  styleUrls: ['./form-comprador.component.css']
})
export class FormCompradorComponent implements OnInit {

  form: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
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
  }

}
