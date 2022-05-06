import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TicketsService } from 'src/app/tickets.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as e from 'express';


@Component({
  selector: 'app-form-evento',
  templateUrl: './form-evento.component.html',
  styleUrls: ['./form-evento.component.css']
})
export class FormEventoComponent implements OnInit {

  minDate: Date;
  maxDate: Date;

  form: FormGroup;
  loading = false;


  constructor(private ticketsService: TicketsService, private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
    // minimo hoy y maximo 31 de diciembre en 10 años. No olvidar que mes va de 0 a 11
    const fechaActual = new Date()
    this.minDate = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate());
    this.maxDate = new Date(fechaActual.getFullYear() + 10, 11, 31);

    this.form = this.fb.group({
      nombre: ['', Validators.required],
      lugar: ['', Validators.required],
      capacidad: ['', Validators.required],
      precio: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      plazo: ['', Validators.required],
      cancelable: [false],
      /*archivo: ['',Validators.required],
      subir: ['',Validators.required],*/
    })
  }


  ngOnInit(): void {
  }

  registrar() {
    const nombre = this.form.value.nombre;
    const lugar = this.form.value.lugar;
    const capacidad = this.form.value.capacidad;
    const precio = this.form.value.precio;
    const fechaInicio = this.form.value.fechaInicio;
    const fechaFin = this.form.value.fechaFin;
    const plazo = this.form.value.plazo;
    const cancelable = this.form.value.cancelable;
    /* const archivo = this.form.value.archivo;
     const subir = this.form.value.subir;*/

    let obj = '{'
    if (nombre != '') {
      obj += '"nombre" : "' + nombre + '",'
    }
    if (lugar != '') {
      obj += '"lugar" : "' + lugar + '",'
    }
    if (capacidad != '') {
      obj += '"capacidad" : ' + capacidad + ','
    }
    if (precio != '') {
      obj += '"precio" : ' + precio + ','
    }
    if (fechaInicio != '') {
      obj += '"fechaInicio" : "' + fechaInicio + '",'
    }
    if (fechaFin != '') {
      obj += '"fechaFin" : "' + fechaFin + '",'
    }
    //if(archivo!=''){
    // obj+='"imagenes" : "'+archivo+'",'
    // }
    //if(subir!=''){
    // obj+='"subir" : "'+subir+'",'
    // }
    obj += '"plazo" : ' + plazo + ','
    obj += '"cancelable" : ' + cancelable + ','
    obj += '"organizador" : "' + this.ticketsService._id + '",'
    obj += '"estado" : "pendiente"}';

    /*  console.log("1");
      console.log(subir);
      console.log("2");
      console.log(archivo);
      console.log("3");*/
    //convierte objeto to a string
    let string = JSON.stringify(obj);
    console.log(JSON.parse(string))

    //validar que este autenticado como vendedor
    if (this.ticketsService.estaLogeado == true && this.ticketsService.esCliente == false) {
      console.log("Esta autenticado como vendedor asi que se prosigue")


      //post para registro
      this.ticketsService.postEventos(JSON.parse(string)).subscribe((response: any) => {
        console.log("evento añadido exitosamente")
        this.router.navigate(['/dashboard-vendedor/eventos-vendedor'])
      },
        error => {
          if (this.mensajeError(error) == JSON.stringify("Se requieren los parametros nombre, lugar, capacidad, organizador, fechaInicio, fechaFin y precio")) {
            console.log("Se requieren los parametros nombre, lugar, capacidad, organizador, fechaInicio, fechaFin y precio")
          } else {
            if (this.mensajeError(error) == JSON.stringify("fechaInicio debe ser menor o igual a fechaFin")) {
              console.log("fechaInicio debe ser menor o igual a fechaFin")
            } else {
              if (this.mensajeError(error) == JSON.stringify("fechaInicio no puede ser menor a actual")) {
                console.log("fechaInicio no puede ser menor a actual")
              } else {
                if (this.mensajeError(error) == JSON.stringify("precio no puede ser negativo")) {
                  console.log("precio no puede ser negativo")
                } else {
                  if (this.mensajeError(error) == JSON.stringify("capacidad debe ser positiva")) {
                    console.log("capacidad debe ser positiva")
                  } else {
                    console.log("Verifique sus datos")
                  }
                }
              }
            }
          }
        });





    } else {
      console.log("no esta logeado o esta logeado como cliente")
    }

  }


  mensajeError(obj: any): string {
    //convierte objeto to a string
    let string = JSON.stringify(obj);

    let json = JSON.parse(string)
    return JSON.stringify(json.error)
  }
}