import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/tickets.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginStatus = false;
  constructor(private ticketsService: TicketsService) {
    ticketsService.isUserLoggedIn.subscribe( value =>{
      this.loginStatus = value;
    });
   }

  ngOnInit(): void {
    var data = this.getData();
    console.log(data);
    if(data != null) {
      this.ticketsService.estaLogeado = true;
    }
    else{
      this.ticketsService.estaLogeado = false;
    }
    this.loginStatus = this.ticketsService.estaLogeado;
    console.log("LOGIN: "+this.loginStatus);
  }
  logout(){
    this.removeData('datos');
    this.loginStatus = false;
    this.ticketsService.estaLogeado = false;
  }
  setData(data: any) {
    const jsonData = JSON.stringify(data)
    localStorage.setItem('datos', jsonData)
  }

  getData() {
    return localStorage.getItem('datos')
  }

  removeData(key: any) {
    localStorage.removeItem(key)
  }
}
