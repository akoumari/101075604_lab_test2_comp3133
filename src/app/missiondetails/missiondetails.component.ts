import { Component, Input, OnInit } from '@angular/core';
import { IMission } from "../models/mission";
import { SpacexapiService } from "../network/spacexapi.service";
import { faVideo, faNewspaper, faBrain } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.scss']
})
export class MissiondetailsComponent implements OnInit {
  missions: IMission[]
  @Input() mish: IMission
  faVideo = faVideo;
  faNewspaper=faNewspaper;
faBrain=faBrain;
  constructor(private spaceApi: SpacexapiService) { }

  ngOnInit(): void {
    this.getMissions();
    console.log(this.missions)
  }
 getMissions() : void {
    this.spaceApi.getMissions()
    .subscribe(missions => this.missions = missions);
  }

}
