import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-formcamcontv',
  templateUrl: './formcamcontv.component.html',
  styleUrls: ['./formcamcontv.component.css']
})
export class FormcamcontvComponent implements OnInit {
  form: FormGroup;
  loading = false;
  constructor(private ticketsService: TicketsService, private fb: FormBuilder, public dialog: MatDialog, private router: Router) {
    this.form = this.fb.group({
      oldpassword: ['', Validators.required],
      newpassword: ['', Validators.required],
      repnewpassword: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

  cambiarCont() {
    const data = JSON.parse(localStorage.getItem('datos') ?? '');
    const id = data._id;
    const oldpassword = this.form.value.oldpassword;
    const newpassword = this.form.value.newpassword;
    const repnewpassword = this.form.value.repnewpassword;

    if (oldpassword != data.password) {
      console.log("CONTRASEÑA ANTIGUA NO COINCIDE");
      this.openDialog1();
    } else {
      if (newpassword != repnewpassword) {
        console.log("CONTRASEÑAS NUEVAS NO COINCIDEN");
        this.openDialog2();
      }
      else {
        console.log("DATOS DE CONTRASEÑA CORRECTOS");
        let obj = '{'
        if (id != '') {
          obj += '"_id" : "' + id + '",'
        }
        if (oldpassword != '') {
          obj += '"oldPassword" : "' + oldpassword + '",'
        }
        if (newpassword != '') {
          obj += '"newPassword" : "' + newpassword + '",'
        }
        obj = obj.slice(0, -1);
        obj += '}'
        //Stringificar el objeto
        let string = JSON.stringify(obj);
        console.log("DATOS: " + JSON.parse(string));
        //PUT para modificacion
        this.ticketsService.putVendedores(JSON.parse(string)).subscribe((response: any) =>{
          console.log("Contraseña modificada");
          this.openDialog3();
        });
      }
    }
  }

  mensajeError(obj: any): string {
    //convierte objeto to a string
    let string = JSON.stringify(obj);

    let json = JSON.parse(string)
    return JSON.stringify(json.error)
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(DialogComponentDataCcv1, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialog2(): void {
    const dialogRef = this.dialog.open(DialogComponentDataCcv2, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialog3(): void {
    const dialogRef = this.dialog.open(DialogComponentDataCcv3, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigate(['/dashboard-vendedor/menu-vendedor'],);
    });
  }
}
@Component({
  selector: 'dialogcontent',
  templateUrl: './Dialogccv1.html',
})
export class DialogComponentDataCcv1 {
  constructor(
    public dialogRef: MatDialogRef<DialogComponentDataCcv1>,

  ) { dialogRef.disableClose = true }

  onOkClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'dialogcontent',
  templateUrl: './Dialogccv2.html',
})
export class DialogComponentDataCcv2 {
  constructor(
    public dialogRef: MatDialogRef<DialogComponentDataCcv2>,
    
  ) { dialogRef.disableClose = true }
    
  onOkClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'dialogcontent',
  templateUrl: './Dialogccv3.html',
})
export class DialogComponentDataCcv3 {
  constructor(
    public dialogRef: MatDialogRef<DialogComponentDataCcv3>,

  ) { dialogRef.disableClose = true }

  onOkClick(): void {
    this.dialogRef.close();
  }
}

