import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'point-inside';

  public latitude: string = '';
  public longitude: string = '';
  // using two way data binding to retrieve the data, and manage it in the template

  public validation: boolean = false;
  // a helper variable for the template

  public result;

  constructor(private svcApi: ApiService) {
    // retrieve a reference to the api service
  }

  ngOnInit() {

  }

  public clearLatitude(): void {
    this.latitude = '';
  }

  public clearLongitude(): void {
    this.longitude = '';
  }

  // these two methods are for wiping out the latitude in the template.
  // they are tied to the clear buttons and also to the conclusion of the API subscription

  public getTimeZone(): void {
    if (this.checkValidEntry()) {
      this.result = null;
      this.svcApi.getTimeAvailableTimezones(this.latitude, this.longitude).subscribe(
        res => {
          this.result = res;
        },
        err => {
          console.log(err);
          this.result = err;
        },
        () => {
          this.clearLatitude();
          this.clearLongitude();
          this.validation = false;
        }
      );
    }
  }

  private checkValidEntry(): boolean {
    // this is just to ensure that the inputs have length.
    // i separated this out into its own method in case we wanted to have more validation checks in the future
    if (this.latitude.length > 0 && this.longitude.length > 0) {
      return true;
    } else {
      return false;
    }
  }

}
