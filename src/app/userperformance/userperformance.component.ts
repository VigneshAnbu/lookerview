import { Component } from '@angular/core';
import { CommunityServiceService } from '../Services/community-service.service';

@Component({
  selector: 'app-userperformance',
  templateUrl: './userperformance.component.html',
  styleUrls: ['./userperformance.component.css']
})
export class UserperformanceComponent {

  constructor(private apiservice: CommunityServiceService) {

  }

  rolebaseddata: any = [];
  disobj: any = {};
  hudobj: any = {};
  hudlist: any = [];

  Districtwiseobj: any = {};


  districtId: string = "";
  hudId: string = "";

  ngOnInit(): void {

    const payload: any =
      {
      "district_id": "",
      "hud_id": "",
      "block_id": "",
      "facility_id": "",
      "indistrict_id": "",
      "inhud_id": "",
      "inblock_id": "",
      "village_id": "",
      "directorate_id": "",
      "role": "",
      "infacility_id": ""

    }

    this.apiservice.getUserPerformanceDistrict()
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

  

}
