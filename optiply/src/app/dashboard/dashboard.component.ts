import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';

declare var google: any;

export interface DataInfo {
  id: string;
  desiredLvl: number;
  currentLvl: number;
  invValue: number;
  stockTurnover: number;
}

const SERVICE_DATA: DataInfo[] = [
  {id: 'A', desiredLvl: 99.0, currentLvl: 100, invValue: 72717.10, stockTurnover: 204.6}
];


@Component({
  selector: 'optiply-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService: DataService) { }

  private data: any;

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      data => {
        this.data = data;
        this.init();
      });
  }

  init(): void {
    if(typeof(google) !== 'undefined') {
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.displayChart());
      }, 1000);
    }
  }

  displayChart(): void {
    const el = document.getElementById('srv-lvl-chart');
    const chart = new google.visualization.LineChart(el);

    chart.draw(this.getDataTable(), this.getOptions());
  }

  getDataTable(): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Month');
    data.addColumn('number', 'Amount');
    data.addRows(this.data);

    return data;
  }

  getOptions(): any {
    return {
      'title': '',
      'width': 1500,
      'height': 400
    };
  }

  displayedColumns: string[] = ['id', 'desiredLvl', 'currentLvl', 'invValue', 'stockTurnover'];
  dataSrc = SERVICE_DATA;

}
