import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Person } from '../types/person';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  constructor(private http: HttpClient) {}
  fetchData(): Observable<Person[]> {
    return this.http.get<Person[]>('../../data/tableData.json').pipe(
      catchError((error: any) => {
        console.error('Error fetching data:', error);
        return throwError(error);
      })
    );
  }
}
