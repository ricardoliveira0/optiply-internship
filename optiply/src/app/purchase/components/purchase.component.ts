import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { APIService } from '../services';
import { APICallback } from '../models';


@Component({
  selector: 'optiply-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['symbol', 'lastPrice', 'priceChange', 'priceChangePercent', 'highPrice', 'lowPrice'];
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

  /* retrieveData(): any {
    return this.service.dataCallback().subscribe(
      complete => this.response = complete
    );
  } */

  /* get symbol(): string {
    return this.service.getSymbol(this.response);
  }

  get lastPrice(): string {
    return this.service.getLastPrice(this.response);
  }

  get priceChange(): number {
    return this.service.getPriceChange(this.response);
  }

  get priceChangePercent(): number {
    return this.service.getPriceChangePercent(this.response);
  }

  get highPrice(): number {
    return this.service.getHighPrice(this.response);
  }

  get lowPrice(): number {
    return this.service.getLowPrice(this.response);
  } */

}
