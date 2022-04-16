import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-menu-comprador',
  templateUrl: './menu-comprador.component.html',
  styleUrls: ['./menu-comprador.component.css']
})
export class MenuCompradorComponent implements OnInit {

  isChecked = true;
  formGroup: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      notificaciones: ['', Validators.requiredTrue],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onFormSubmit() {
    alert(JSON.stringify(this.formGroup.value, null, 2));
  }
}
