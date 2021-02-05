import { LaunchesService } from './launches.service';
import { Component, OnInit } from '@angular/core';
import { Launch } from './launches.model';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  constructor(private readonly launchService: LaunchesService) { }
  launchesList: any;
  ngOnInit(): void {
    this.getLaunchList();
  }

  getLaunchList() {
    this.launchService.getLaunches()
      .subscribe(response => {
        console.log(response);
        this.launchesList = response;
      })
  }

}
