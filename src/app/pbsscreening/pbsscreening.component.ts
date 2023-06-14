import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { CommunityServiceService } from '../Services/community-service.service';

@Component({
  selector: 'app-pbsscreening',
  templateUrl: './pbsscreening.component.html',
  styleUrls: ['./pbsscreening.component.css']
})
export class PbsscreeningComponent implements AfterViewInit {

  @ViewChild(FiltersComponent) child !: FiltersComponent;

  ngAfterViewInit(): void {

  }

  rolebaseddata: any = [];
  objdistrictpbs: any = {};
  objhudpbs: any = {};
  objblockpbs: any = {};
  objvillagepbs: any = {};

  constructor(private CommunitService: CommunityServiceService) {

  }

  SearchFilter() {
    //console.log(this.child)
    //console.log(this.child.form.value.districtmyItems)

    const Payl = this.child.PayloadDetails()

    console.log(this.child.PayloadDetails());

    this.LoadAll(Payl);
  }

  ngOnInit(): void {

    const payload =

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


    this.LoadAll(payload);
  }


  LoadAll(payload: any) {

    this.CommunitService.getrolebasedFilter(payload)
      .subscribe(item => {
        this.rolebaseddata = item;
      })

    this.CommunitService.getGetdistrictpbs(payload)
      .subscribe(item => {
        this.objdistrictpbs = item;
        console.log(this.objdistrictpbs)
      })

    this.CommunitService.getGethudpbs(payload)
      .subscribe(item => {
        this.objhudpbs = item;
      })

    this.CommunitService.getGetblockpbs(payload)
      .subscribe(item => {
        this.objblockpbs = item;
        
      })

    this.CommunitService.getGetvillagepbs(payload)
      .subscribe(item => {
        this.objvillagepbs = item;
        console.log(this.objvillagepbs)
      })
    
  }

}
