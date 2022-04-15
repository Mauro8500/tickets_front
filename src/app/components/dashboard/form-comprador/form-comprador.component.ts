import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-form-comprador',
  templateUrl: './form-comprador.component.html',
  styleUrls: ['./form-comprador.component.css']
})
export class FormCompradorComponent implements OnInit {

  minDate: Date;
  maxDate: Date;

  form: FormGroup;
  loading = false;
  constructor(private ticketsService: TicketsService, private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {

        // Minimo 1 de Enero de hace 115 años y maximo ayer. No olvidar que mes va de 0 a 11
        const fechaActual = new Date()
        this.minDate = new Date(fechaActual.getFullYear() - 115, 0, 1);
        this.maxDate = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate()-1);

    this.form = this.fb.group({
      nombre1: [''],
      nombre2: [''],
      apellido1: [''],
      apellido2: [''],
      fechaNacimiento: [''],
      password: [''],
      repassword: [''],
      ci: [''],
      mail: [''],
      telefono: [''],
      departamento: [''],
      ciudad: ['']
    })
   }

  ngOnInit(): void {
  }

  registrar(){
    const nombre1 = this.form.value.nombre1;
    const nombre2 = this.form.value.nombre2;
    const apellido1 = this.form.value.apellido1;
    const apellido2 = this.form.value.apellido2;
    const password = this.form.value.password;
    const repassword = this.form.value.repassword;
    const fechaNacimiento = this.form.value.fechaNacimiento;
    const ci= this.form.value.ci;
    const mail = this.form.value.mail;
    const telefono = this.form.value.telefono;
    const departamento = this.form.value.departamento;
    const ciudad = this.form.value.ciudad;
    let obj = '{'
    if(nombre1!=''){
      obj+='"nombre1" : "'+nombre1+'",'
    }
    if(nombre2!=''){
      obj+='"nombre2" : "'+nombre2+'",'
    }
    if(apellido1!=''){
      obj+='"apellido1" : "'+apellido1+'",'
    }
    if(apellido2!=''){
      obj+='"apellido2" : "'+apellido2+'",'
    }
    if(password!=''){
      obj+='"password" : "'+password+'",'
    }
    if(repassword!=''){
      obj+='"repassword" : "'+repassword+'",'
    }
    if(fechaNacimiento!=''){
      console.log(fechaNacimiento)
      obj+='"fechaNacimiento" : "'+fechaNacimiento+'",'
    }
    if(ci!=''){
      obj+='"ci" : "'+ci+'",'
    }
    if(mail!=''){
      obj+='"mail" : "'+mail+'",'
    }
    if(telefono!=''){
      obj+='"telefono" : '+telefono+','
    }
    if(departamento!=''){
      obj+='"departamento" : "'+departamento+'",'
    }
    if(ciudad!=''){
      obj+='"ciudad" : "'+ciudad+'",'
    }
    obj = obj.slice(0, -1); 
    obj+='}';

    //convierte objeto to a string
    let string = JSON.stringify(obj);
    
    //post para registro
    this.ticketsService.postClientes(JSON.parse(string)).subscribe((response: any)=>{
      console.log(response);
    });
  }

}