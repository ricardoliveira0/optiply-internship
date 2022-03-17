import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, merge, map, startWith, switchMap, catchError, of as observableOf } from 'rxjs';

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
  data: APICallback[] = [];
  response: APICallback;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: APIService) { }

  /* ngOnInit(): void {
    this.element_data = this.retrieveData();
    this.dataSource = new MatTableDataSource();
  } */

  ngOnInit() { }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;

    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.service!.dataCallback().pipe(catchError(() => observableOf(null)));
        }),
        map(data => {

          if (data === null) {
            return [];
          }

          return data;
        }),
      )
      .subscribe(data => (this.data = data));
  }

  /* applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } */

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
