import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-chartultmes',
  templateUrl: './chartultmes.component.html',
  styleUrls: ['./chartultmes.component.css']
})
export class ChartultmesComponent implements OnInit {
  eventosData: any;
  comprasData: any;
  ticketsData: any;
  pieOptions: any;

  constructor(private ticketsService: TicketsService) { }

  ngOnInit(): void {
    this.getChartsData();
    this.applyDarkPieTheme();
  }

  getChartsData() {
    this.ticketsService.getVectorEventosMes().subscribe((response: any) => {
      console.log(response);
      
      this.eventosData = {
        labels: ['Finalizados', 'Cancelados', 'Pendientes', 'En progreso'],
        datasets: [
          {
            label: 'Eventos',
            backgroundColor: [
              '#42A5F5',
              "#FFFC33",
              "#66BB6A",
              "#FFA726"],
            data: [response[0], response[1], response[2], response[3]]
          }
        ]
      };
    });
    this.ticketsService.getVectorComprasMes().subscribe((response: any) => {
      this.comprasData = {
        labels: ['Completadas', 'Canceladas'],
        datasets: [
          {
            label: 'Compras',
            backgroundColor: [
              '#42A5F5',
              "#66BB6A",
            ],
            data: [response[0], response[1]]
          }
        ]
      };
    });
    this.ticketsService.getVectorTicketsMes().subscribe((response: any) => {
      this.ticketsData = {
        labels: ['Comprados', 'Cancelados'],
        datasets: [
          {
            label: 'Tickets',
            backgroundColor: [
              "#FFFC33",
              "#FFA726"],
            data: [response[0], response[1]]
          }
        ]
      };
    });
  }
  applyDarkPieTheme() {
    this.pieOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      }
    };
  }
}
