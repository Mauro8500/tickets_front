import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { response } from 'express';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-eliminarcomprador',
  templateUrl: './eliminarcomprador.component.html',
  styleUrls: ['./eliminarcomprador.component.css']
})
export class EliminarcompradorComponent implements OnInit {

  form: FormGroup;
  loading = false;
  constructor(private ticketsService: TicketsService, private fb: FormBuilder, public dialog: MatDialog, private router: Router) {
    this.form = this.fb.group({
      
    });
  }
  ngOnInit(): void {
  }

}
