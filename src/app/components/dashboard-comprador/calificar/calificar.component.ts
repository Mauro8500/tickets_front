import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.component.html',
  styleUrls: ['./calificar.component.css']
})
export class CalificarComponent implements OnInit {

  form: FormGroup;
  loading = false;
  isChecked = false;

  constructor(private ticketsService: TicketsService, private fb: FormBuilder,public dialog: MatDialog, private snackBar: MatSnackBar, private router: Router) {

    this.form = this.fb.group({
      calificar: ['',Validators.required],
    })
   }

  ngOnInit(): void {
  }


  registrarca(){
    const calificar = this.form.value.comentar;
    let obj = '{'
    if(calificar!=''){
      obj+='"calificar" : "'+calificar+'",'
    }
    obj = obj.slice(0, -1); 
    obj+='}';
  }
}
