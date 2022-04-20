import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TicketsService } from 'src/app/tickets.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-comprador',
  templateUrl: './menu-comprador.component.html',
  styleUrls: ['./menu-comprador.component.css']
})
export class MenuCompradorComponent implements OnInit {

  
  isChecked = false;
  formGroup: FormGroup;

  constructor(private ticketsService: TicketsService, formBuilder: FormBuilder,private router: Router) {
    this.formGroup = formBuilder.group({
      notificaciones: [this.isChecked],
    });
  }
  ngOnInit(): void {
    //TODO inicializar isCheckedcon el valor smsActivado del cliente
  }

  onFormSubmit() {
    //alert(JSON.stringify(this.formGroup.value, null, 2));
    const smsActivado = JSON.stringify(this.formGroup.value.notificaciones)
    console.log(smsActivado)
        //put smsActivado de cliente
        let obj = '{'
        if(smsActivado!=''){
          obj+='"smsActivado" : '+smsActivado+','
        }
        obj+='"_id" : "'+this.ticketsService._id+'"}';
    
        //convierte objeto to a string
        let string = JSON.stringify(obj);
        this.ticketsService.putClientesSms(JSON.parse(string)).subscribe((response: any)=>{
          console.log("put exitoso, smsActivado configurado")
          this.ticketsService.smsActivado=JSON.parse(smsActivado)
          this.router.navigate(['/dashboard-comprador/eventoscom'])

        },
        error => {
          if(this.mensajeError(error)==JSON.stringify("Se requieren los parametros _id y smsActivado")){
            console.log("Se requieren los parametros _id y smsActivado")
          }else{
            console.log("Verifique sus datos")
          }

        },);
  }
  
  mensajeError(obj: any): string {
    //convierte objeto to a string
    let string = JSON.stringify(obj);

    let json = JSON.parse(string)
return JSON.stringify(json.error)
}

}