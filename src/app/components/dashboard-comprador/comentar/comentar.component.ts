import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TicketsService } from 'src/app/tickets.service';


@Component({
  selector: 'app-comentar',
  templateUrl: './comentar.component.html',
  styleUrls: ['./comentar.component.css']
})
export class ComentarComponent implements OnInit {
  
  form: FormGroup;
  loading = false;
  isChecked = false;

  constructor(private ticketsService: TicketsService, private fb: FormBuilder,public dialog: MatDialog, private snackBar: MatSnackBar, private router: Router) { 
    
    
    this.form = this.fb.group({
      comentar: ['',Validators.required],
    })

  }

  


  ngOnInit(): void {
  }

  registrarc(){
    const comentar = this.form.value.comentar;
    let obj = '{'
    if(comentar!=''){
      obj+='"comentar" : "'+comentar+'",'
    }
    obj = obj.slice(0, -1); 
    obj+='}';
  }

}
