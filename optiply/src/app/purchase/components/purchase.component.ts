import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { APIService } from '../services';


@Component({
  selector: 'optiply-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['symbol', 'lastPrice', 'priceChange', 'priceChangePercent', 'highPrice', 'lowPrice', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: APIService) { }

  ngOnInit(): void {
    this.service.dataCallback()
    .subscribe(response => {
      console.log(response);
      this.dataSource = new MatTableDataSource(response);
      console.log(this.dataSource);
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 2000);
   
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
