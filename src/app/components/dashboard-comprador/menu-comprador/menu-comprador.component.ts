import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketsService } from 'src/app/tickets.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-menu-comprador',
  templateUrl: './menu-comprador.component.html',
  styleUrls: ['./menu-comprador.component.css']
})
export class MenuCompradorComponent implements OnInit {
  data1 = localStorage.getItem('datos');
  loginStatus = false;
  isChecked = false;
  formGroup: FormGroup;

  constructor(private ticketsService: TicketsService, public dialog: MatDialog, formBuilder: FormBuilder, private router: Router) {
    this.formGroup = formBuilder.group({
      notificaciones: [this.isChecked],
    });
    ticketsService.isUserLoggedIn.subscribe(value => {
      if (this.data1 != null) {
        var data = JSON.parse(this.data1 ?? '');
        this.isChecked = data.smsActivado;
        this.formGroup.patchValue({
          notificaciones: this.isChecked,
        });
      }
    });
  }
  ngOnInit(): void {

    if (this.data1 != null) {
      var data = JSON.parse(this.data1 ?? '');
      this.ticketsService.estaLogeado = true;
      this.isChecked = data.smsActivado;
      this.formGroup.value.notificaciones = this.isChecked;
      console.log("LOCAL STORAGE EXISTE");
    }
    else {
      this.ticketsService.estaLogeado = false;
      console.log("NO HAY LOCAL STORAGE");
    }
    this.loginStatus = this.ticketsService.estaLogeado;
    console.log("LOGIN: " + this.loginStatus);
    console.log("SMS ACTIVADO: " + data.smsActivado);
    //TODO inicializar isCheckedcon el valor smsActivado del cliente
  }

  eliminarCuentaComprador() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponentDataElimCom, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  onFormSubmit() {
    //alert(JSON.stringify(this.formGroup.value, null, 2));
    const smsActivado = JSON.stringify(this.formGroup.value.notificaciones)
    console.log(smsActivado)
    //put smsActivado de cliente
    let obj = '{'
    if (smsActivado != '') {
      obj += '"smsActivado" : ' + smsActivado + ','
    }
    obj += '"_id" : "' + this.ticketsService._id + '"}';

    //convierte objeto to a string
    let string = JSON.stringify(obj);
    this.ticketsService.putClientesSms(JSON.parse(string)).subscribe((response: any) => {
      console.log("put exitoso, smsActivado configurado")
      this.ticketsService.smsActivado = JSON.parse(smsActivado)
      this.router.navigate(['/dashboard-comprador/eventoscom'])

    },
      error => {
        if (this.mensajeError(error) == JSON.stringify("Se requieren los parametros _id y smsActivado")) {
          console.log("Se requieren los parametros _id y smsActivado")
        } else {
          console.log("Verifique sus datos")
        }

      });
  }

  mensajeError(obj: any): string {
    //convierte objeto to a string
    let string = JSON.stringify(obj);

    let json = JSON.parse(string)
    return JSON.stringify(json.error)
  }

}
@Component({
  selector: 'dialogcontent',
  templateUrl: './DialogElimCom.html',
})
export class DialogComponentDataElimCom {
  constructor(
    public dialogRef: MatDialogRef<DialogComponentDataElimCom>,
    public ticketsService: TicketsService,
    private router: Router
  ) { dialogRef.disableClose = true }

  onSiClick() {
    var data = JSON.parse(localStorage.getItem('datos') ?? '');
    const id = data._id;
    this.ticketsService.elimCliente(id).subscribe((response: any) => {
      console.log(response);
      localStorage.clear();
      console.log("Cuenta eliminada");
      this.dialogRef.close();
      this.router.navigate(['/dashboard'],);
    });
  }
  onNoClick() {
    this.dialogRef.close();
  }
}