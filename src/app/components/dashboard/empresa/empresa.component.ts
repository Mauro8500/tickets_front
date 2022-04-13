import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  constructor(private ticketsService: TicketsService) {
   }

  ngOnInit(): void {
    this.ticketsService.getVendedores().subscribe((response: any)=>{
      console.log(response);
    });
  }

}
