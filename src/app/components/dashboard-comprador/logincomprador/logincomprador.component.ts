import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TicketsService } from 'src/app/tickets.service';
import { NavbarcomComponent } from '../navbarcom/navbarcom.component';

@Component({
  selector: 'app-logincomprador',
  templateUrl: './logincomprador.component.html',
  styleUrls: ['./logincomprador.component.css']
})
export class LogincompradorComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private ticketsService: TicketsService, private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  setData(data: any) {
    const jsonData = JSON.stringify(data)
    localStorage.setItem('datos', jsonData)
  }

  getData() {
    return localStorage.getItem('datos')
  }

  removeData(key: any) {
    localStorage.removeItem(key)
  }

  ngOnInit(): void {
    
  }

  ingresar() {
    const mail = this.form.value.mail;
    const password = this.form.value.password;

    //login cliente
    this.ticketsService.authClientes(mail, password).subscribe((response: any) => {
      console.log("response:")
      console.log(response)
      if (response.length == 0) {
        console.log("revise sus datos")
        //mensaje de error
        this.error();
        this.form.reset();
      } else {
        let aux = response
        this.setData(aux);
        console.log(this.getData);
        if (aux.estado == false) {
          console.log("debe confirmar su correo para ingresar")
          this.error2();
        } else {
          //vaciar los datos del response al tickets service
          this.ticketsService.isUserLoggedIn.next(true);
          this.ticketsService.estaLogeado = true
          this.ticketsService.esCliente = true
          this.ticketsService._id = aux._id
          this.ticketsService.nombre1 = aux.nombre1
          if (aux.nombre2 != undefined) {
            this.ticketsService.nombre2 = aux.nombre2
          } else {
            this.ticketsService.nombre2 = ""
          }
          this.ticketsService.apellido1 = aux.apellido1
          this.ticketsService.apellido2 = aux.apellido2
          this.ticketsService.fechaNacimiento = aux.fechaNacimiento
          this.ticketsService.password = aux.password
          this.ticketsService.ci = aux.ci
          this.ticketsService.mail = aux.mail
          this.ticketsService.departamento = aux.departamento
          this.ticketsService.ciudad = aux.ciudad
          this.ticketsService.estado = aux.estado
          if (aux.telefono != undefined) {
            this.ticketsService.telefono = aux.telefono
          } else {
            this.ticketsService.telefono = 0
          }
          this.ticketsService.smsActivado = aux.smsActivado
          //redireccionamos al dashboard
          //   this.fakeLoading();
          this.router.navigate(['/dashboard-comprador/eventoscom'],);
        }
      }
    },
      error => {
        console.log("error")
        console.log(error)
        if (this.mensajeError(error) == JSON.stringify("Se requieren los parametros mail y password")) {
          console.log("Se requieren los parametros mail y password")
        } else {
          console.log("Verifique sus datos")
        }
      });
  }

  error() {
    this._snackBar.open('Correo o contraseña incorrectos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
  error2() {
    this._snackBar.open('Cuenta inexistente o no confirmada', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  /* fakeLoading(){
     this.loading = true;
     setTimeout(() => {

       //redireccionamos all dashboard

       this.router.navigate(['inicio'])
     }, 1500);
   }*/

  mensajeError(obj: any): string {
    //convierte objeto to a string
    let string = JSON.stringify(obj);

    let json = JSON.parse(string)
    return JSON.stringify(json.error)
  }

}

