import { Component, ViewChild } from '@angular/core';
import { CommunityServiceService } from '../Services/community-service.service';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-userperformance',
  templateUrl: './userperformance.component.html',
  styleUrls: ['./userperformance.component.css']
})
export class UserperformanceComponent {
  @ViewChild(FiltersComponent) child!: FiltersComponent;

  constructor(private apiservice: CommunityServiceService) {

  }

  rolebaseddata: any = [];
  disobj: any = {};
  hudobj: any = {};
  hudlist: any = [];

  Districtwiseobj: any = {};


  districtId: string = "";
  hudId: string = "";

  filterFields = {
    district: true,
    hud: true,
    block: true,
    village: true,
    facility: false,
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

  ngOnInit(): void {
    this.LoadAll();
  }

  LoadAll(payload?: any) {
    this.apiservice.getUserPerformanceDistrict(payload)
      .subscribe(item => {
        this.Districtwiseobj = item;
      });

    //this.apiservice.getrolebasedpost(payload)
    //  .subscribe(item => {
    //    this.rolebaseddata = item;
    //  })

    this.apiservice.getrolebasedFilter(payload)
      .subscribe(item => {
        this.rolebaseddata = item;
      })
  }
  SearchFilter() {
    console.log('the search filter is trig');
    const Payl = this.child.PayloadDetails();
    this.LoadAll(Payl);
  }
}
