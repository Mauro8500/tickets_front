import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-barchartdemo',
  templateUrl: './barchartdemo.component.html',
  styleUrls: ['./barchartdemo.component.css']
})
export class BarchartdemoComponent implements OnInit {
  eventosData: any;
  comprasData: any;
  ticketsData: any;
  cantEventos: any;
  cantClientes: any;
  cantOrganiz: any;
  cantCompras: any;
  cantCalif: any;
  cantComent: any;
  eventosMesData: any;
  entradasMesData: any;
  dineroMesData: any;

  pieOptions: any;
  barOptions: any;

  constructor(private ticketsService: TicketsService) { }

  ngOnInit(): void {
    this.applyDarkBarTheme()
    this.applyDarkPieTheme();
    this.getChartsData();
  }
  getChartsData() {
    this.ticketsService.getVectorEventosGlobal().subscribe((response: any) => {
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
    this.ticketsService.getVectorComprasGlobal().subscribe((response: any) => {
      this.comprasData = {
        labels: ['Completadas', 'Cancelados'],
        datasets: [
          {
            label: 'Compras',
            backgroundColor: [
              '#FFFC33',
              '#66BB6A'],
            data: [response[0], response[1]]
          }
        ]
      };
    });
    this.ticketsService.getVectorTicketsGlobal().subscribe((response: any) => {
      this.ticketsData = {
        labels: ['Comprados', 'Cancelados'],
        datasets: [
          {
            label: 'Tickets',
            backgroundColor: [
              '#FF5733',
              '#42A5F5'
            ],
            data: [response[0], response[1]]
          }
        ]
      };
    });
    this.ticketsService.getEventos().subscribe((response: any) => {
      this.cantEventos = response.length;
    });
    this.ticketsService.getClientes().subscribe((response: any) => {
      this.cantClientes = response.length;
    });
    this.ticketsService.getVendedores().subscribe((response: any) => {
      this.cantOrganiz = response.length;
    });
    this.ticketsService.getVectorComprasGlobal().subscribe((response: any) => {
      this.cantCompras = (response[0] + response[1]);
    });
    this.ticketsService.getCalificacionesGlobal().subscribe((response: any) => {
      this.cantCalif = response.length;
    });
    this.ticketsService.getComentariosGlobal().subscribe((response: any) => {
      this.cantComent = response.length;
    });

    this.ticketsService.getMontoPorMes().subscribe((response: any) => {
      console.log("monto mes " + response);

      this.dineroMesData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
          {
            label: 'Compras por mes',
            backgroundColor: [
              "#FFFC33",
            ],
            data: [
              1,2,3,4,5,6,7,8,9,10,11,12
             /*response[0],
              response[1],
              response[2],
              response[3],
              response[4],
              response[5],
              response[6],
              response[7],
              response[8],
              response[9],
              response[10],
              response[11]
              */
            ]
          }
        ]
      };
    });

    this.ticketsService.getEventosPorMes().subscribe((response: any) => {
      console.log("evento mes: " + response);

      this.eventosMesData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
          {
            label: 'Eventos por mes',
            backgroundColor: [
              '#42A5F5',
            ],
            data: [
              1,2,3,4,5,6,7,8,9,10,11,12
              /*response[0],
              response[1],
              response[2],
              response[3],
              response[4],
              response[5],
              response[6],
              response[7],
              response[8],
              response[9],
              response[10],
              response[11]*/
            ]
          }
        ]
      };
    });

    this.ticketsService.getEntradasPorMes().subscribe((response: any) => {
      console.log("entradas mes: " + response);

      this.entradasMesData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
          {
            label: 'Entradas por mes',
            backgroundColor: [
              "#66BB6A",
            ],
            data: [
              1,2,3,4,5,6,7,8,9,10,11,12
              /*
              response[0],
              response[1],
              response[2],
              response[3],
              response[4],
              response[5],
              response[6],
              response[7],
              response[8],
              response[9],
              response[10],
              response[11]*/
            ]
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
  applyDarkBarTheme() {
    this.barOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#ebedef'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        },
        y: {
          ticks: {
            color: '#ebedef'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        }
      }
    };
  }
}
