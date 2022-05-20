import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-formodven',
  templateUrl: './formodven.component.html',
  styleUrls: ['./formodven.component.css']
})
export class FormodvenComponent implements OnInit {
  data1 = localStorage.getItem('datos');
  data = JSON.parse("{}");
  minDate: Date;
  maxDate: Date;

  form: FormGroup;
  loading = false;
  isChecked = false;

  constructor(private ticketsService: TicketsService, private fb: FormBuilder, public dialog: MatDialog, private snackBar: MatSnackBar, private router: Router) { 
    const fechaActual = new Date()
    this.minDate = new Date(fechaActual.getFullYear() - 115, 0, 1);
    this.maxDate = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate() - 1);
  
    this.form = this.fb.group({
      nombre1: ({value: '', disabled: true}),
      nombre2: ({value: '', disabled: true}),
      apellido1: ({value: '', disabled: true}),
      apellido2: ({value: '', disabled: true}),
      fechaNacimiento: ({value: '', disabled: true}),
      ci: ({value: '', disabled: true}),
      mail: ({value: '', disabled: true}),
      telefono: ['',Validators.required],
      departamento: ({value: '', disabled: true}),
      ciudad: ({value: '', disabled: true}),
    })
  }

  

  ngOnInit(): void {
  }

  modificar(){
    
  }

}
