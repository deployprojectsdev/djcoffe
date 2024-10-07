import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  temperatureChartOptions: Highcharts.Options;
  humidityChartOptions: Highcharts.Options;
  soilHumidityChartOptions: Highcharts.Options;

  startDate: string;
  endDate: string;

  allData: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchSensorData();
  }

  fetchSensorData() {
    this.http.get(`${environment.apiUrl}/lectura-sensor`).subscribe(
      (data: any[]) => {
        this.allData = data;
        this.filterAndCreateCharts();
      },
      error => {
        console.error('Error fetching sensor data', error);
      }
    );
  }

  filterAndCreateCharts() {
    let filteredData = this.allData;

    if (this.startDate) {
      const startDateTime = new Date(this.startDate).getTime();
      filteredData = filteredData.filter(reading => new Date(reading.fecha_hora).getTime() >= startDateTime);
    }

    if (this.endDate) {
      const endDateTime = new Date(this.endDate).getTime();
      filteredData = filteredData.filter(reading => new Date(reading.fecha_hora).getTime() <= endDateTime);
    }

    const temperatureData = [];
    const humidityData = [];
    const soilHumidityData = [];

    filteredData.forEach(reading => {
      const timestamp = new Date(reading.fecha_hora).getTime();
      if (reading.id_sensor === 1) {
        if (reading.unidad_medida === 'ºC') {
          temperatureData.push([timestamp, reading.valor]);
        } else if (reading.unidad_medida === '%') {
          humidityData.push([timestamp, reading.valor]);
        }
      } else if (reading.id_sensor === 2) {
        soilHumidityData.push([timestamp, reading.valor]);
      }
    });

    this.createTemperatureChart(temperatureData);
    this.createHumidityChart(humidityData);
    this.createSoilHumidityChart(soilHumidityData);

    console.log('Número de datos de temperatura:', temperatureData.length);
    console.log('Número de datos de humedad ambiente:', humidityData.length);
    console.log('Número de datos de humedad del suelo:', soilHumidityData.length);
  }

  createTemperatureChart(data: any[]) {
    this.temperatureChartOptions = {
      chart: { type: 'spline' },
      title: { text: 'Temperatura <i class="bi bi-thermometer-sun"></i>',useHTML: true  },
      xAxis: { type: 'datetime' },
      yAxis: { title: { text: 'Temperatura (ºC)' } },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} ºC'
      },
      series: [{
        name: 'Temperatura',
        data: data,
        type: 'spline'
      }]
    };
  }

  createHumidityChart(data: any[]) {
    this.humidityChartOptions = {
      chart: { type: 'spline' },
      title: { text: 'Humedad Ambiente <i class="bi bi-droplet-half"></i>', useHTML: true },
      xAxis: { type: 'datetime' },
      yAxis: { title: { text: 'Humedad (%)' } },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} %'
      },
      series: [{
        name: 'Humedad',
        data: data,
        type: 'spline'
      }]
    };
  }

  createSoilHumidityChart(data: any[]) {
    this.soilHumidityChartOptions = {
      chart: { type: 'spline' },
      title: { text: 'Humedad del Suelo <i class="bi bi-moisture"></i>', useHTML:true},
      xAxis: { type: 'datetime' },
      yAxis: { title: { text: 'Humedad del Suelo (%)' } },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} %'
      },
      series: [{
        name: 'Humedad del Suelo',
        data: data,
        type: 'spline'
      }]
    };
  }

  onDateChange() {
    this.filterAndCreateCharts();
  }
}