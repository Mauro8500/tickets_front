import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-menu-vendedor',
  templateUrl: './menu-vendedor.component.html',
  styleUrls: ['./menu-vendedor.component.css']
})
export class MenuVendedorComponent implements OnInit {
  data1 = localStorage.getItem('datos');
  data = JSON.parse("{}");
  loginStatus = false;
  isChecked = false;
  constructor(private ticketsService: TicketsService, public dialog: MatDialog, private router: Router) {

  }

  ngOnInit(): void {
    if (this.data1 != null) {
      this.data = JSON.parse(this.data1 ?? '');
      this.ticketsService.estaLogeado = true;
      this.isChecked = this.data.smsActivado;
      console.log("LOCAL STORAGE EXISTE");
    }
    else {
      this.ticketsService.estaLogeado = false;
      console.log("NO HAY LOCAL STORAGE");
    }
    this.loginStatus = this.ticketsService.estaLogeado;
    console.log("LOGIN: " + this.loginStatus);
  }
  eliminarCuentaVendedor() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponentDataElimven, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
@Component({
  selector: 'dialogcontent',
  templateUrl: './DialogElimven.html',
})
export class DialogComponentDataElimven {
  constructor(
    public dialogRef: MatDialogRef<DialogComponentDataElimven>,
    public ticketsService: TicketsService,
    private router: Router
  ) { dialogRef.disableClose = true }

  onSiClick() {
    var data = JSON.parse(localStorage.getItem('datos') ?? '');
    const id = data._id;
    this.ticketsService.elimVendedor(id).subscribe((response: any) => {
      console.log(response);
      localStorage.clear();
      console.log("Cuenta eliminada");
      this.dialogRef.close();
      this.router.navigate(['/dashboard'],);
    });
  }
  onNoClick(){
    this.dialogRef.close();
  }
}