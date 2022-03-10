import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly A_data = [
    ['Sep 21', 15],
    ['Oct 21', 24],
    ['Nov 21', 49],
    ['Dec 21', 57],
    ['Jan 22', 23],
    ['Feb 22', 68],
  ];

  readonly B_data = [
    ['Sep 21', 15],
    ['Oct 21', 22],
    ['Nov 21', 45],
    ['Dec 21', 54],
    ['Jan 22', 83],
    ['Feb 22', 75],
  ];

  readonly C_data = [
    ['Sep 21', 16],
    ['Oct 21', 18],
    ['Nov 21', 14],
    ['Dec 21', 19],
    ['Jan 22', 28],
    ['Feb 22', 72],
  ];

  constructor() { }

  getData(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.A_data);
      observable.complete();
    });
  }

}
