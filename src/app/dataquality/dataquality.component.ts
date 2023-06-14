import { AfterViewInit, Component } from '@angular/core';
import { CommunityServiceService } from '../Services/community-service.service';

@Component({
  selector: 'app-dataquality',
  templateUrl: './dataquality.component.html',
  styleUrls: ['./dataquality.component.css']
})
export class DataqualityComponent implements AfterViewInit {

  secondheading: string = "Data Quality";

  objFamiliesstreetunallocated: any = {};
  objFamiliesfacilityunallocated: any = {};
  objFamilieswithnull: any = {};
  objFamilieswithmore: any = {};
  objmemberswithstreetsunallocated: any = {};
  objmemberswithfacilityunallocated: any = {};
  objmemberswithaadhaar_number: any = {};
  objverifiedmembers: any = {};
  objstreetswithfacilityunallocated: any = {};
  objshopswithnomappinfstreets: any = {};
  objmembersinhistorynothavingscreening: any = {};
  objmembershavingscreeningnothavinghistory: any = {};
  objmobilenumbermorethan: any = {};
  objmemberswithmobilenumber: any = {};
  objpopulationmappedwithstreet: any = {};
  objMembersmappedtoUnallocatedfacility: any = {};
  objMemberswithstreetasUnAllocated: any = {};
  

  ngAfterViewInit(): void {

  }

  constructor(private CommunitService: CommunityServiceService) {

  }

  ngOnInit(): void {
    this.CommunitService.GetFamiliesstreetunallocated()
      .subscribe(item => {
        this.objFamiliesstreetunallocated = item;
      })

    this.CommunitService.GetFamiliesfacilityunallocated()
      .subscribe(item => {
        this.objFamiliesfacilityunallocated = item;
      })

    this.CommunitService.GetFamilieswithnull()
      .subscribe(item => {
        this.objFamilieswithnull = item;
      })

    this.CommunitService.GetFamilieswithmore()
      .subscribe(item => {
        this.objFamilieswithmore = item;
      })

    this.CommunitService.Getmemberswithstreetsunallocated()
      .subscribe(item => {
        this.objmemberswithstreetsunallocated = item;
      })

    this.CommunitService.Getmemberswithfacilityunallocated()
      .subscribe(item => {
        this.objmemberswithfacilityunallocated = item;
      })

    this.CommunitService.Getmemberswithaadhaar_number()
      .subscribe(item => {
        this.objmemberswithaadhaar_number = item;
      })

    this.CommunitService.Getverifiedmembers()
      .subscribe(item => {
        this.objverifiedmembers = item;
      })

    this.CommunitService.Getstreetswithfacilityunallocated()
      .subscribe(item => {
        this.objstreetswithfacilityunallocated = item;
      })

    this.CommunitService.Getshopswithnomappinfstreets()
      .subscribe(item => {
        this.objshopswithnomappinfstreets = item;
      })


    this.CommunitService.Getmembersinhistorynothavingscreening()
      .subscribe(item => {
        this.objmembersinhistorynothavingscreening = item;
      })

    this.CommunitService.Getmembershavingscreeningnothavinghistory()
      .subscribe(item => {
        this.objmembershavingscreeningnothavinghistory = item;
      })

    this.CommunitService.Getmobilenumbermorethan()
      .subscribe(item => {
        this.objmobilenumbermorethan = item;
      })


    this.CommunitService.Getmemberswithmobilenumber()
      .subscribe(item => {
        this.objmemberswithmobilenumber = item;
      })

    this.CommunitService.Getpopulationmappedwithstreet()
      .subscribe(item => {
        this.objpopulationmappedwithstreet = item;
      })

    this.CommunitService.GetMembersmappedtoUnallocatedfacility()
      .subscribe(item => {
        this.objMembersmappedtoUnallocatedfacility = item;
      })

    this.CommunitService.GetMemberswithstreetasUnAllocated()
      .subscribe(item => {
        this.objMemberswithstreetasUnAllocated = item;
      })



  }

}
