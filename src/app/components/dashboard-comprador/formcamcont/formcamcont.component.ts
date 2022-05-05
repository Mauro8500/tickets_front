import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-formcamcont',
  templateUrl: './formcamcont.component.html',
  styleUrls: ['./formcamcont.component.css']
})
export class FormcamcontComponent implements OnInit {

  form: FormGroup;
  loading = false;
  constructor(private ticketsService: TicketsService, private fb: FormBuilder, public dialog: MatDialog, private router: Router) {
    this.form = this.fb.group({
      oldpassword: ['', Validators.required],
      newpassword: ['', Validators.required],
      repnewpassword: ['', Validators.required],
    });
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

        let string = JSON.stringify(obj);
        console.log("DATOS: " + JSON.parse(string));
        this.openDialog3();
      }
    }
  }
  ngOnInit(): void {
  }

  mensajeError(obj: any): string {
    //convierte objeto to a string
    let string = JSON.stringify(obj);

    let json = JSON.parse(string)
    return JSON.stringify(json.error)
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(DialogComponentData11, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialog2(): void {
    const dialogRef = this.dialog.open(DialogComponentData12, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialog3(): void {
    const dialogRef = this.dialog.open(DialogComponentData13, {
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
  templateUrl: './Dialog11.html',
})
export class DialogComponentData11 {
  constructor(
    public dialogRef: MatDialogRef<DialogComponentData11>,

  ) { dialogRef.disableClose = true }

  onOkClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'dialogcontent',
  templateUrl: './Dialog12.html',
})
export class DialogComponentData12 {
  constructor(
    public dialogRef: MatDialogRef<DialogComponentData12>,
    
  ) { dialogRef.disableClose = true }
    
  onOkClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'dialogcontent',
  templateUrl: './Dialog13.html',
})
export class DialogComponentData13 {
  constructor(
    public dialogRef: MatDialogRef<DialogComponentData13>,

  ) { dialogRef.disableClose = true }

  onOkClick(): void {
    this.dialogRef.close();
  }
}
