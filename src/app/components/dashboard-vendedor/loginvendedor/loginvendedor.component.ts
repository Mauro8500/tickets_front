import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-loginvendedor',
  templateUrl: './loginvendedor.component.html',
  styleUrls: ['./loginvendedor.component.css']
})
export class LoginvendedorComponent implements OnInit {
    form: FormGroup;
    loading = false;

    constructor(private ticketsService: TicketsService, private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router){
      this.form = this.fb.group({
        mail: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      })
    }

    ngOnInit(): void{

    }

    ingresar(){
      const mail = this.form.value.mail;
      const password = this.form.value.password;

      //login vendedor
      this.ticketsService.authVendedores(mail, password).subscribe((response: any)=>{
        console.log("response:")
        console.log(response)
        if(response.length==0){
          console.log("revise sus datos")
          //mensaje de error
          this.error();
          this.form.reset();
        }else{
          let aux = response
          if(aux.estado==false){
            console.log("debe confirmar su correo para ingresar")
          }else{
            //vaciar los datos del response al tickets service
    this.ticketsService.estaLogeado = true
    this.ticketsService.esCliente = false
    this.ticketsService._id = aux._id
    this.ticketsService.nombre1 = aux.nombre1
    if(aux.nombre2!=undefined){
      this.ticketsService.nombre2 = aux.nombre2
    }else{
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
    if(aux.telefono!=undefined){
      this.ticketsService.telefono = aux.telefono
    }else{
      this.ticketsService.telefono = 0
    }
    this.ticketsService.banco = aux.banco
    this.ticketsService.cuenta = aux.cuenta
    this.ticketsService.esEmpresa = aux.esEmpresa 

    if(this.ticketsService.esEmpresa==true){
      if(aux.nombreEmpresa!=undefined){
        this.ticketsService.nombreEmpresa = aux.nombreEmpresa
      }else{
        this.ticketsService.nombreEmpresa = ""
      }
      if(aux.telefonoEmpresa!=undefined){
        this.ticketsService.telefonoEmpresa = aux.telefonoEmpresa
      }else{
        this.ticketsService.telefonoEmpresa = 0
      }
      if(aux.direccionEmpresa!=undefined){
        this.ticketsService.direccionEmpresa = aux.direccionEmpresa
      }else{
        this.ticketsService.direccionEmpresa = ""
      }
      if(aux.sitioWebEmpresa!=undefined){
        this.ticketsService.sitioWebEmpresa = aux.sitioWebEmpresa
      }else{
        this.ticketsService.sitioWebEmpresa = ""
      }

      
      
    }else{
      this.ticketsService.nombreEmpresa = ""
      this.ticketsService.telefonoEmpresa = 0
      this.ticketsService.direccionEmpresa = ""
      this.ticketsService.sitioWebEmpresa = ""
    }

    console.log("logeado")
    console.log(this.ticketsService.estaLogeado+" (el true sigiente es cliente) "+this.ticketsService.esCliente)
            //redireccionamos al dashboard
            this.router.navigate(['/dashboard-vendedor/eventos-vendedor'])
          }
        }
      },
      error => {
        console.log("error")
        console.log(error)
        if(this.mensajeError(error)==JSON.stringify("Se requieren los parametros mail y password")){
          console.log("Se requieren los parametros mail y password")
        }else{
          console.log("Verifique sus datos")
        }
      },);
    }

    error(){
      this._snackBar.open('Correo o contraseña incorrectos', '',{
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
    }

    fakeLoading(){
      this.loading = true;
      setTimeout(() => {

        //redireccionamos all dashboard

        this.router.navigate(['inicio'])
      }, 1500);
    }

    mensajeError(obj: any): string {
      //convierte objeto to a string
      let string = JSON.stringify(obj);

      let json = JSON.parse(string)
  return JSON.stringify(json.error)
}
}

