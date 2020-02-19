import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'point-inside';

  constructor(private svcApi: ApiService) {

  }

  ngOnInit() {
    this.svcApi.getTimeAvailableTimezone().subscribe(
      data => {
        console.log(data);
      });
  }
}
