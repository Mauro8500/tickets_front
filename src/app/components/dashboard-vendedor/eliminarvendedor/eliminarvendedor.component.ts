import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { response } from 'express';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-eliminarvendedor',
  templateUrl: './eliminarvendedor.component.html',
  styleUrls: ['./eliminarvendedor.component.css']
})
export class EliminarvendedorComponent implements OnInit {

  form: FormGroup;
  loading = false;
  constructor(private ticketsService: TicketsService, private fb: FormBuilder, public dialog: MatDialog, private router: Router) {
    this.form = this.fb.group({
      
    });
  }
  ngOnInit(): void {
  }

}