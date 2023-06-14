import { Component } from '@angular/core';
import { CommunityServiceService } from '../Services/community-service.service';

@Component({
  selector: 'app-populationdashboardkpi',
  templateUrl: './populationdashboardkpi.component.html',
  styleUrls: ['./populationdashboardkpi.component.css']
})
export class PopulationdashboardkpiComponent {
  constructor(private CommunitService: CommunityServiceService) {

  }

  objpop: any = {};

  popdistrictwise: any = {};

  pophudwise: any = {};

  ngOnInit(): void {
    this.CommunitService.getpopulationkpi_dashboard()
      .subscribe(item => {
        this.objpop = item;
      })

    this.CommunitService.getpopulationkpi_district()
      .subscribe(item => {
        this.popdistrictwise = item;
      })

    this.CommunitService.getpopulationkpi_hud()
      .subscribe(item => {
        this.pophudwise = item;
      })

  }

}
