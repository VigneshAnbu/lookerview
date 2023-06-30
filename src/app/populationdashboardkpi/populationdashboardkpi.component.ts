import { Component, ViewChild } from '@angular/core';
import { CommunityServiceService } from '../Services/community-service.service';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-populationdashboardkpi',
  templateUrl: './populationdashboardkpi.component.html',
  styleUrls: ['./populationdashboardkpi.component.css']
})
export class PopulationdashboardkpiComponent {
  constructor(private CommunitService: CommunityServiceService) {

  }

  objpop: any = 0;

  popdistrictwise: any = 0;

  pophudwise: any = 0;

  filterFields = {
    district: true,
    hud: true,
    block: true,
    village: true,
    facility: true,
    owner: false,
    directorate: false,
    insFacility: false,
    insRole: false,
    insDistrict: false,
    insHud: false,
    insBlock: false,
    date: false,
    comBlockType: false,
    comGender: false
  }
  @ViewChild(FiltersComponent) child!: FiltersComponent;
  
  ngOnInit(): void {
    this.LoadAll();

  }

  LoadAll(payload?: any){
    this.CommunitService.getpopulationkpi_dashboard(payload)
    .subscribe((item: any) => {
      this.objpop = item;
    })

  this.CommunitService.getpopulationkpi_district(payload)
    .subscribe((item: any) => {
      this.popdistrictwise = item;
    })

  this.CommunitService.getpopulationkpi_hud(payload)
    .subscribe((item: any) => {
      this.pophudwise = item;
    })
  }
  SearchFilter() {
    console.log('the search filter is trig');
    const Payl = this.child.PayloadDetails();
    console.log(this.child.PayloadDetails());
    this.LoadAll(Payl);
  }
}
