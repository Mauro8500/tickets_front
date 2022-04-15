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
      nombre1: ['', Validators.required],
      nombre2: ['', Validators.required],
      apellido1: ['', Validators.required],
      apellido2: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      password: ['', Validators.required],
      repassword: ['', Validators.required],
      ci: ['', Validators.required],
      mail: ['', Validators.required],
      telefono: ['', Validators.required],
      departamento: ['', Validators.required],
      ciudad: ['', Validators.required],
      banco: ['', Validators.required],
      cuenta: ['', Validators.required],
      esEmpresa: ['', Validators.required],
      nombreEmpresa: ['', Validators.required],
      telefonoEmpresa: ['', Validators.required],
      direccionEmpresa: ['', Validators.required],
      sitioWebEmpresa: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  registrar(){
    const nombre1 = this.form.value.nombre1;
    const nombre2 = this.form.value.nombre2;
    const apellido1 = this.form.value.apellidos;
    const apellido2 = this.form.value.apellidos;
    const password = this.form.value.password;
    const repassword = this.form.value.repassword;
    const fechaNacimiento = this.form.value.fechaNacimiento;
    const ci= this.form.value.ci;
    const mail = this.form.value.mail;
    const telefono = this.form.value.telefono;
    const departamento = this.form.value.departamento;
    const ciudad = this.form.value.ciudad;
    const banco= this.form.value.banco;
    const cuenta = this.form.value.cuenta;
    const esEmpresa = this.form.value.esEmpresa;
    const nombreEmpresa = this.form.value.nombreEmpresa;
    const telefonoEmpresa = this.form.value.telefonoEmpresa;
    const direccionEmpresa = this.form.value.direccionEmpresa;
    const sitioWebEmpresa = this.form.value.sitioWebEmpresa;

    let obj = '{'
    if(nombre1){
      obj+='"name" : "Raj",'
    }
    obj = obj.slice(0, -1); 
    obj+='}';

    //convierte objeto to a string
    let string = JSON.stringify(obj);

    //post para registro
    this.ticketsService.postVendedores(JSON.parse(string)).subscribe((response: any)=>{
      console.log(response);
    });
  }
}