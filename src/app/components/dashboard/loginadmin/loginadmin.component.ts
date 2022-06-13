import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
  form: FormGroup;
  loading = false;
  constructor(private ticketsService: TicketsService, private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
   }

  ngOnInit(): void {

  }

  ingresar(){
    const mail = this.form.value.mail;
    const password = this.form.value.password;
    if (mail == "admingt@gmail.com" && password == "12345") {
      this.router.navigate(['/dashboard/chart'])
      this.setData(mail);
      this.ticketsService.isUserLoggedIn.next(true);
      this.ticketsService.estaLogeado = true
    }
    else{
      this.error();
      this.form.reset();
    }
  }
  error() {
    this._snackBar.open('Correo o contraseña incorrectos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
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
}
