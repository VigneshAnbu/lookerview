import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommunityServiceService } from '../Services/community-service.service';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-dataquality',
  templateUrl: './dataquality.component.html',
  styleUrls: ['./dataquality.component.css']
})
export class DataqualityComponent implements AfterViewInit {

  secondheading: string = "Data Quality";

  objFamiliesstreetunallocated: any = 0;
  objFamiliesfacilityunallocated: any = 0;
  objFamilieswithnull: any = 0;
  objFamilieswithmore: any = 0;
  objmemberswithstreetsunallocated: any = 0;
  objmemberswithfacilityunallocated: any = 0;
  objmemberswithaadhaar_number: any = 0;
  objverifiedmembers: any = 0;
  objstreetswithfacilityunallocated: any = 0;
  objshopswithnomappinfstreets: any = 0;
  objmembersinhistorynothavingscreening: any = 0;
  objmembershavingscreeningnothavinghistory: any = 0;
  objmobilenumbermorethan: any = 0;
  objmemberswithmobilenumber: any = 0;
  objpopulationmappedwithstreet: any = 0;
  objMembersmappedtoUnallocatedfacility: any = 0;
  objMemberswithstreetasUnAllocated: any = 0;
  filterFields = {
    district: true,
    hud: true,
    block: true,
    village: false,
    facility: false,
    owner: false,
    directorate: false,
    insFacility: false,
    insRole: false,
    insDistrict: false,
    insHud: false,
    insBlock: false,
    date: false,
    comBlockType: true,
    comGender: false
  }
  @ViewChild(FiltersComponent) child!: FiltersComponent;

  ngAfterViewInit(): void {

  }

  constructor(private CommunitService: CommunityServiceService) {

  }

  ngOnInit(): void {
    this.LoadAll();
  }

  LoadAll(payload?: any) {
    this.CommunitService.GetFamiliesstreetunallocated(payload)
      .subscribe((item: any) => {
        this.objFamiliesstreetunallocated = item[0].count;
      })

    this.CommunitService.GetFamiliesfacilityunallocated(payload)
      .subscribe((item: any) => {
        this.objFamiliesfacilityunallocated = item[0].count;
      })

    this.CommunitService.GetFamilieswithnull(payload)
      .subscribe((item: any) => {
        this.objFamilieswithnull = item[0].count;
      })

    this.CommunitService.GetFamilieswithmore(payload)
      .subscribe((item: any) => {
        this.objFamilieswithmore = item[0].count;
      })

    this.CommunitService.Getmemberswithstreetsunallocated(payload)
      .subscribe((item: any) => {
        this.objmemberswithstreetsunallocated = item[0].count;
      })

    this.CommunitService.Getmemberswithfacilityunallocated(payload)
      .subscribe((item: any) => {
        this.objmemberswithfacilityunallocated = item[0].count;
      })

    this.CommunitService.Getmemberswithaadhaar_number(payload)
      .subscribe((item: any) => {
        this.objmemberswithaadhaar_number = item[0].count;
      })

    this.CommunitService.Getverifiedmembers(payload)
      .subscribe((item: any) => {
        this.objverifiedmembers = item[0].count;
      })

    this.CommunitService.Getstreetswithfacilityunallocated(payload)
      .subscribe((item: any) => {
        this.objstreetswithfacilityunallocated = item[0].count;
      })

    this.CommunitService.Getshopswithnomappinfstreets(payload)
      .subscribe((item: any) => {
        this.objshopswithnomappinfstreets = item[0].count;
      })


    this.CommunitService.Getmembersinhistorynothavingscreening(payload)
      .subscribe((item: any) => {
        this.objmembersinhistorynothavingscreening = item[0].count;
      })

    this.CommunitService.Getmembershavingscreeningnothavinghistory(payload)
      .subscribe((item: any) => {
        this.objmembershavingscreeningnothavinghistory = item[0].count;
      })

    this.CommunitService.Getmobilenumbermorethan(payload)
      .subscribe((item: any) => {
        this.objmobilenumbermorethan = item[0].count;
      })


    this.CommunitService.Getmemberswithmobilenumber(payload)
      .subscribe((item: any) => {
        this.objmemberswithmobilenumber = item[0].count;
      })

    this.CommunitService.Getpopulationmappedwithstreet(payload)
      .subscribe((item: any) => {
        this.objpopulationmappedwithstreet = item[0].count;
      })

    this.CommunitService.GetMembersmappedtoUnallocatedfacility(payload)
      .subscribe((item: any) => {
        this.objMembersmappedtoUnallocatedfacility = item[0].count;
      })

    this.CommunitService.GetMemberswithstreetasUnAllocated(payload)
      .subscribe((item: any) => {
        this.objMemberswithstreetasUnAllocated = item[0].count;
      })
  }
  SearchFilter() {
    console.log('the search filter is trig');
    const Payl = this.child.PayloadDetails();
    console.log(this.child.PayloadDetails());
    this.LoadAll(Payl);
  }
}
