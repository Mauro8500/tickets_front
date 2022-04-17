import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-logincomprador',
  templateUrl: './logincomprador.component.html',
  styleUrls: ['./logincomprador.component.css']
})
export class LogincompradorComponent implements OnInit {
    form: FormGroup;
    loading = false;

    constructor(private ticketsService: TicketsService, private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router){
      this.form = this.fb.group({
        usuario: ['', Validators.required],
        password: ['', Validators.required],
      })
    }

    ngOnInit(): void{

    }

    ingresar(){
      const usuario = this.form.value.usuario;
      const password = this.form.value.password;

      console.log(usuario);
      console.log(password);

      //login cliente (vendedor lo mismo cambiando getClientes por getVendedores)
      this.ticketsService.getClientes().subscribe((response: any)=>{
        console.log(response);
        /*if password == response.obj.password{
          if estado==true{
            login
          }else{
            debe verificar su usuario. revise su correo
          }
        }else{
          no existe este usuario
        }*/
      });

      if(usuario == 'mauricio' && password == '12345'){
        //redireccionamos al dashboard
        this.fakeLoading();
      } else{
        //mensaje de error
        this.error();
        this.form.reset();
      }
    }

    error(){
      this._snackBar.open('Usuario o contraseña incorrectos', '',{
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

}

