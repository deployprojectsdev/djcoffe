import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Sistema de monitoreo IOT ';
  subtitle = 'para cultivos de café';
  location = 'Taminango Nariño'

  constructor() { }

  ngOnInit(): void {
  }

}
