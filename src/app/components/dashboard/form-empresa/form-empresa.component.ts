import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TicketsService } from 'src/app/tickets.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css']
})

export class FormEmpresaComponent implements OnInit {
  
  minDate: Date;
  maxDate: Date;
  
  form: FormGroup;
  loading = false;

  constructor(private ticketsService: TicketsService, private fb: FormBuilder, public dialog: MatDialog,private snackBar: MatSnackBar, private router: Router) {
            // Minimo 1 de Enero de hace 115 años y maximo ayer. No olvidar que mes va de 0 a 11
            const fechaActual = new Date()
            this.minDate = new Date(fechaActual.getFullYear() - 115, 0, 1);
            this.maxDate = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate()-1);

    this.form = this.fb.group({
      nombre1: ['', Validators.required],
      nombre2: [''],
      apellido1: ['', Validators.required],
      apellido2: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      password: ['', Validators.required],
      repassword: ['', Validators.required],
      ci: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      telefono: [''],
      departamento: ['', Validators.required],
      ciudad: ['', Validators.required],
      banco: ['',Validators.required],
      cuenta: ['',Validators.required],
      nombreEmpresa: ['', Validators.required],
      telefonoEmpresa: ['', Validators.required],
      direccionEmpresa: ['', Validators.required],
      sitioWebEmpresa: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  registrar(){
    const nombre1 = this.form.value.nombre1;
    const nombre2 = this.form.value.nombre2;
    const apellido1 = this.form.value.apellidos;
    const apellido2 = this.form.value.apellidos;
    const password = this.form.value.password;
    const repassword = this.form.value.repassword;
    const fechaNacimiento = this.form.value.fechaNacimiento;
    const ci= this.form.value.ci;
    const mail = this.form.value.mail;
    const telefono = this.form.value.telefono;
    const departamento = this.form.value.departamento;
    const ciudad = this.form.value.ciudad;
    const banco= this.form.value.banco;
    const cuenta = this.form.value.cuenta;
    const nombreEmpresa = this.form.value.nombreEmpresa;
    const telefonoEmpresa = this.form.value.telefonoEmpresa;
    const direccionEmpresa = this.form.value.direccionEmpresa;
    const sitioWebEmpresa = this.form.value.sitioWebEmpresa;

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
    if(banco!=''){
      obj+='"banco" : "'+banco+'",'
    }
    if(cuenta!=''){
      obj+='"cuenta" : "'+cuenta+'",'
    }
    if(nombreEmpresa!=''){
      obj+='"nombreEmpresa" : "'+nombreEmpresa+'",'
    }
    if(telefonoEmpresa!=''){
      obj+='"telefonoEmpresa" : "'+telefonoEmpresa+'",'
    }
    if(direccionEmpresa!=''){
      obj+='"direccionEmpresa" : "'+direccionEmpresa+'",'
    }
    if(sitioWebEmpresa!=''){
      obj+='"sitioWebEmpresa" : "'+sitioWebEmpresa+'",'
    }
    obj+='"esEmpresa" : '+true+'}';

    //convierte objeto to a string
    let string = JSON.stringify(obj);
    
        //validar mail
        this.ticketsService.getVendedoresMail(mail).subscribe((response: any)=>{


if(response == true){
console.log("ya esta registrado este mail")
}else{
    //post para registro
    this.ticketsService.postVendedores(JSON.parse(string)).subscribe((response: any)=>{
      console.log("registro exitoso, confirme su cuenta")
      this.openDialog()
    },
    error => {
      if(this.mensajeError(error)==JSON.stringify("Se requieren los parametros nombre1, apellido1, apellido2, fechaNacimiento, ci, mail, password, repassword, departamento, ciudad, banco, cuenta y esEmpresa")){
        console.log("Se requieren los parametros nombre1, apellido1, apellido2, fechaNacimiento, ci, mail, password, repassword, departamento, ciudad, banco, cuenta y esEmpresa")
      }else{
        if(this.mensajeError(error)==JSON.stringify("fechaNacimiento debe ser menor a actual")){
          console.log("fechaNacimiento debe ser menor a actual")
        }else{
          if(this.mensajeError(error)==JSON.stringify("Los parametros password y repassword deben ser iguales")){
            console.log("Los parametros password y repassword deben ser iguales")
          }else{
              console.log("Verifique sus datos")
          }
        }
      }
    },);
}









        },
        error => {
        },);
  }


  mensajeError(obj: any): string {
        //convierte objeto to a string
        let string = JSON.stringify(obj);

        let json = JSON.parse(string)
    return JSON.stringify(json.error)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponentData4 , {
        width: '250px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.router.navigate(['/dashboard/login'],);
      });
    }

}

@Component({
  selector: 'dialogcontent',
  templateUrl: './dialogempresa.html',
})
export class DialogComponentData4 {
  constructor(
    public dialogRef: MatDialogRef<DialogComponentData4>,
  
  ) {}

  onOkClick(): void {
    this.dialogRef.close();
  }
}