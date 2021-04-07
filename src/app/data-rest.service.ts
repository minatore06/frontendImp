import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Employee} from './shared/employee';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataRestService {
  constructor(private http: HttpClient){}

  getDataRows(apiURL:string):Observable<Employee[]>{
    return this.http.get<Employee[]>(apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  deleteDataRow(apiURL:string):Observable<any>{
    return this.http.delete(apiURL)
  }
  handleError(handleError: any): import("rxjs").OperatorFunction<Employee, any> {
    throw new Error('Method not implemented.');
  }
}
