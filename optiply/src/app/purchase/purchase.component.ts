import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PurchaseData {
  id: number,
  orderType: string,
  supplier: string,
  noProducts: number,
  value: number,
  date: Date
}

@Component({
  selector: 'optiply-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'orderType', 'supplier', 'noProducts', 'value', 'date'];
  dataSource: MatTableDataSource<PurchaseData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
    const objects = Array.from({length: 20}, (_, k) => this.createNewObject(k + 1));
    this.dataSource = new MatTableDataSource(objects);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createNewObject(id: number): PurchaseData {
    return {
      id: id,
      orderType: "Regular",
      supplier: "Bullet Proof US",
      noProducts: 7,
      value: 20484.58,
      date: new Date()
    };
  }

}
