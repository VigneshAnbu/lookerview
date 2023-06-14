import { Component } from '@angular/core';
import { CommunityServiceService } from '../Services/community-service.service';

@Component({
  selector: 'app-populationdashboard',
  templateUrl: './populationdashboard.component.html',
  styleUrls: ['./populationdashboard.component.css']
})
export class PopulationdashboardComponent {
  diagnosislist: any = []
  facilitylist: any = []
  constructor(private CommunitService: CommunityServiceService) {
  }
  ngOnInit(): void {
    this.CommunitService.getdiagnosisreport()
      .subscribe(item => {
        this.diagnosislist = item;
        console.log(this.diagnosislist)
      })
    this.CommunitService.getfacilityreport()
      .subscribe(item => {
        this.facilitylist = item;
      })
  }
}
