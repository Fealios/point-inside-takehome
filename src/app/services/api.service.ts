import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getTimeAvailableTimezone(): Observable<any> {
    return this.http.get('http://api.timezonedb.com/v2.1/list-time-zone');
  }
}
