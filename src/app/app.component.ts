import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'point-inside';

  public latitude: string;
  public longitude: string;

  constructor(private svcApi: ApiService) {

  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  public clearLatitude(): void {
    this.latitude = '';
  }

  public clearLongitude(): void {
    this.longitude = '';
  }

  public getTimeZone(): void {
    this.svcApi.getTimeAvailableTimezones(this.latitude, this.longitude).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      },
      () => {
        this.clearLatitude();
        this.clearLongitude();
      }
    );
  }
}
