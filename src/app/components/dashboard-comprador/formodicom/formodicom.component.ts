import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { json } from 'express';
import { TicketsService } from 'src/app/tickets.service';



@Component({
  selector: 'app-formodicom',
  templateUrl: './formodicom.component.html',
  styleUrls: ['./formodicom.component.css']
})


export class FormodicomComponent implements OnInit {
  data1 = localStorage.getItem('datos');
  data = JSON.parse("{}");
  minDate: Date;
  maxDate: Date;

  form: FormGroup;
  loading = false;
  isChecked = false;

  constructor(private ticketsService: TicketsService, private fb: FormBuilder, public dialog: MatDialog, private snackBar: MatSnackBar, private router: Router) {

    // Minimo 1 de Enero de hace 115 años y maximo ayer. No olvidar que mes va de 0 a 11
    const fechaActual = new Date()
    this.minDate = new Date(fechaActual.getFullYear() - 115, 0, 1);
    this.maxDate = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate() - 1);

    this.form = this.fb.group({
      nombre1: ({value: '', disabled: true}),
      nombre2: ({value: '', disabled: true}),
      apellido1: ({value: '', disabled: true}),
      apellido2: ({value: '', disabled: true}),
      fechaNacimiento: ({value: '', disabled: true}),
      ci: ({value: '', disabled: true}),
      mail: ({value: '', disabled: true}),
      telefono: ['',Validators.required],
      departamento: ({value: '', disabled: true}),
      ciudad: ({value: '', disabled: true}),
    })
  }
  getData() {
    return localStorage.getItem('datos')
  }
  ngOnInit(): void {
    this.data = JSON.parse(this.data1??'');
    console.log(this.data);
    this.form.patchValue({
      nombre1: this.data.nombre1,
      nombre2: this.data.nombre2,
      apellido1: this.data.apellido1,
      apellido2: this.data.apellido2,
      fechaNacimiento: this.data.fechaNacimiento,
      ci: this.data.ci,
      mail: this.data.mail,
      telefono: this.data.telefono,
      departamento: this.data.departamento,
      ciudad: this.data.ciudad,
    });
  }

  modificar() {
    const id = this.data._id;
    /*const nombre1 = this.form.value.nombre1;
    const nombre2 = this.form.value.nombre2;
    const apellido1 = this.form.value.apellido1;
    const apellido2 = this.form.value.apellido2;
    const fechaNacimiento = this.form.value.fechaNacimiento;
    const ci = this.form.value.ci;
    const mail = this.form.value.mail;*/
    const telefono = this.form.value.telefono;
    /*const departamento = this.form.value.departamento;
    const ciudad = this.form.value.ciudad;*/
    let obj = '{'
      obj += '"_id" : "' + id + '",'
    /*if (nombre1 != '') {
      obj += '"nombre1" : "' + nombre1 + '",'
    }
    if (nombre2 != '') {
      obj += '"nombre2" : "' + nombre2 + '",'
    }
    if (apellido1 != '') {
      obj += '"apellido1" : "' + apellido1 + '",'
    }
    if (apellido2 != '') {
      obj += '"apellido2" : "' + apellido2 + '",'
    }
    if (fechaNacimiento != '') {
      obj += '"fechaNacimiento" : "' + fechaNacimiento + '",'
    }
    if (ci != '') {
      obj += '"ci" : "' + ci + '",'
    }
    if (mail != '') {
      obj += '"mail" : "' + mail + '",'
    }*/
    if (telefono != '') {
      obj += '"telefono" : ' + telefono + ','
    }
    /*if (departamento != '') {
      obj += '"departamento" : "' + departamento + '",'
    }
    if (ciudad != '') {
      obj += '"ciudad" : "' + ciudad + '",'
    }*/
    obj = obj.slice(0, -1);
    obj += '}';

    //convierte objeto to a string
    let string = JSON.stringify(obj);
    console.log(JSON.parse(string));
    //PUT para modificacion
    this.ticketsService.putClientes(JSON.parse(string)).subscribe((response: any) => {
      console.log("Datos modificados exitosamente")
      localStorage.clear();
      this.data.telefono = telefono;
      this.setData(this.data);
      this.openDialog()
    },
      error => {
        if (this.mensajeError(error) == JSON.stringify("Se requieren los parametros nombre1, apellido1, apellido2, fechaNacimiento, ci, mail, password, repassword, departamento y ciudad")) {
          console.log("Se requieren los parametros nombre1, apellido1, apellido2, fechaNacimiento, ci, mail, password, repassword, departamento y ciudad")
        } else {
          if (this.mensajeError(error) == JSON.stringify("fechaNacimiento debe ser menor a actual")) {
            console.log("fechaNacimiento debe ser menor a actual")
          } else {
            if (this.mensajeError(error) == JSON.stringify("Los parametros password y repassword deben ser iguales")) {
              console.log("Los parametros password y repassword deben ser iguales")
            } else {
              console.log("Verifique sus datos")
            }
          }
        }
      });


  }

  setData(data: any) {
    const jsonData = JSON.stringify(data)
    localStorage.setItem('datos', jsonData)
  }

  mensajeError(obj: any): string {
    //convierte objeto to a string
    let string = JSON.stringify(obj);

    let json = JSON.parse(string)
    return JSON.stringify(json.error)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponentData10, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigate(['/dashboard-comprador/menu-comprador'],);
    });
  }

}

@Component({
  selector: 'dialogcontent',
  templateUrl: './Dialogcom10.html',
})
export class DialogComponentData10 {
  constructor(
    public dialogRef: MatDialogRef<DialogComponentData10>,

  ) { dialogRef.disableClose = true }

  onOkClick(): void {
    this.dialogRef.close();
  }
}