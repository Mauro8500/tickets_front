import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketsService } from 'src/app/tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-editar',
  templateUrl: './form-editar.component.html',
  styleUrls: ['./form-editar.component.css']
})
export class FormEditarComponent implements OnInit {

  form: FormGroup;
  loading = false;
  constructor(private ticketsService: TicketsService, private fb: FormBuilder, private router: Router) {

    this.form = this.fb.group({
      capacidad: ['',Validators.required]
    })
}
  ngOnInit(): void {
    
  }

    cambiarCapacidad(){
    const capacidad = this.form.value.capacidad;

    let obj = '{'
    if(capacidad!=''){
      obj+='"capacidad" : '+capacidad+','
    }
    obj+='"_id" : "'+this.ticketsService._idEvento+'"}';

    //convierte objeto to a string

    let string = JSON.stringify(obj);
    console.log(JSON.parse(string))

        //validar que este autenticado como vendedor
        if(this.ticketsService.estaLogeado == true && this.ticketsService.esCliente == false){
          console.log("Esta autenticado como vendedor asi que se prosigue")

    //put
    this.ticketsService.putEventos(JSON.parse(string)).subscribe((response: any)=>{
      console.log("se logro modificar la capacidad del evento")
      this.router.navigate(['/dashboard-vendedor/eventos-vendedor'])
      //ir a interfaz de eventos vendedor
    },
    error => {
      if(this.mensajeError(error)==JSON.stringify("Se requieren los parametros _id y estado, capacidad o imagenes")){
        console.log("Se requieren los parametros _id y estado, capacidad o imagenes")
      }else{
        if(this.mensajeError(error)==JSON.stringify("capacidad debe ser positiva")){
          console.log("capacidad debe ser positiva")
        }else{
                  if(this.mensajeError(error)==JSON.stringify("se vendieron mas tickets que los que desea configurar")){
          console.log("se vendieron mas tickets que los que desea configurar")
        }else{
            console.log("Verifique sus datos")
        }
        }
      }
    },);




        }else{
          console.log("No esta autenticado o esta autenticado como cliente asi que no prosigue")
        }


    
    
  }


  mensajeError(obj: any): string {
        //convierte objeto to a string
        let string = JSON.stringify(obj);

        let json = JSON.parse(string)
    return JSON.stringify(json.error)
  }
}