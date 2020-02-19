import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getTimeAvailableTimezones(lat: string, long: string): Observable<any> {
    const getTimeZoneUrl =
      environment.apiBaseURL +
      `/get-time-zone?key=${environment.apiKey}` +
      `&format=json&by=position&lat=${lat}&lng=${long}`;

    return this.http.get(getTimeZoneUrl);
  }
}
