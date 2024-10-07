import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrearFincaComponent } from 'src/app/crear-finca/crear-finca.component';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  userName: string;

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    $.getScript("./assets/js/deafult-dashboard.js")

    this.userName = localStorage.getItem('nombre') || 'Guest';
  }



  

}
