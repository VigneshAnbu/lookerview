import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CommunityServiceService } from '../Services/community-service.service';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-dphdashboard',
  templateUrl: './dphdashboard.component.html',
  styleUrls: ['./dphdashboard.component.css'],
})
export class DphdashboardComponent {
  diabetesData = [
    {
      name: 'Confirmed',
      value: 8940000,
    },
    {
      name: 'Controlled',
      value: 5000000,
    },
    {
      name: 'Uncontrolled',
      value: 7200000,
    },
  ];
  hypertensionData = [
    {
      name: 'Confirmed',
      value: 8940000,
    },
    {
      name: 'Controlled',
      value: 5000000,
    },
    {
      name: 'Uncontrolled',
      value: 7200000,
    },
  ];
  bothData = [
    {
      name: 'Confirmed',
      value: 8940000,
    },
    {
      name: 'Controlled',
      value: 5000000,
    },
    {
      name: 'Uncontrolled',
      value: 7200000,
    },
  ];
  diabVsHyp = [
    {
      name: 'Diabetes',
      value: 8940000,
    },
    {
      name: 'Hypertension',
      value: 5000000,
    },
    {
      name: 'Both',
      value: 754,
    },
  ];
  view: [number, number] = [350, 250];
  barview: [number, number] = [350, 250];

  // options
  gradient = false;
  arcWidth = 0.5;
  showLegend = true;
  showLabels = true;
  isDoughnut = true;
  legendPosition: LegendPosition = LegendPosition.Below;
  showXAxis = false;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'MTM Condition';
  showYAxisLabel = true;
  yAxisLabel = 'Confirmed+Controlled';
  showDataLabels = true;

  colorScheme: Color = {
    name: '',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#1a73e8', '#12b5cb', '#e52592'],
  };
  barColorScheme: Color = {
    name: '',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#1a73e8', '#12b5cb', '#e52592'],
  };
  districtWise = [
    {
      communityDistrict: 'Chennai',
      districtGid: 2,
      TotalPopulation: 4270471,
      Population: 3825501,
      Screenings: 523604,
      confirmedDM: 27595,
      controlledDM: 4037,
      Diabetes: '15%',
      confirmedHT: 34856,
      controlledHT: 82,
      Hypertension: '0%',
      confirmedBoth: 3,
      controlledBoth: 0,
      Both: '0%',
    },
    {
      communityDistrict: 'Chennai',
      districtGid: 2,
      TotalPopulation: 4270471,
      Population: 3825501,
      Screenings: 523604,
      confirmedDM: 27595,
      controlledDM: 4037,
      Diabetes: '15%',
      confirmedHT: 34856,
      controlledHT: 82,
      Hypertension: '0%',
      confirmedBoth: 3,
      controlledBoth: 0,
      Both: '0%',
    },
    {
      communityDistrict: 'Chennai',
      districtGid: 2,
      TotalPopulation: 4270471,
      Population: 3825501,
      Screenings: 523604,
      confirmedDM: 27595,
      controlledDM: 4037,
      Diabetes: '15%',
      confirmedHT: 34856,
      controlledHT: 82,
      Hypertension: '0%',
      confirmedBoth: 3,
      controlledBoth: 0,
      Both: '0%',
    },
    {
      communityDistrict: 'Chennai',
      districtGid: 2,
      TotalPopulation: 4270471,
      Population: 3825501,
      Screenings: 523604,
      confirmedDM: 27595,
      controlledDM: 4037,
      Diabetes: '15%',
      confirmedHT: 34856,
      controlledHT: 82,
      Hypertension: '0%',
      confirmedBoth: 3,
      controlledBoth: 0,
      Both: '0%',
    },
    {
      communityDistrict: 'Chennai',
      districtGid: 2,
      TotalPopulation: 4270471,
      Population: 3825501,
      Screenings: 523604,
      confirmedDM: 27595,
      controlledDM: 4037,
      Diabetes: '15%',
      confirmedHT: 34856,
      controlledHT: 82,
      Hypertension: '0%',
      confirmedBoth: 3,
      controlledBoth: 0,
      Both: '0%',
    },
    {
      communityDistrict: 'Chennai',
      districtGid: 2,
      TotalPopulation: 4270471,
      Population: 3825501,
      Screenings: 523604,
      confirmedDM: 27595,
      controlledDM: 4037,
      Diabetes: '15%',
      confirmedHT: 34856,
      controlledHT: 82,
      Hypertension: '0%',
      confirmedBoth: 3,
      controlledBoth: 0,
      Both: '0%',
    },
    {
      communityDistrict: 'Chennai',
      districtGid: 2,
      TotalPopulation: 4270471,
      Population: 3825501,
      Screenings: 523604,
      confirmedDM: 27595,
      controlledDM: 4037,
      Diabetes: '15%',
      confirmedHT: 34856,
      controlledHT: 82,
      Hypertension: '0%',
      confirmedBoth: 3,
      controlledBoth: 0,
      Both: '0%',
    },
    {
      communityDistrict: 'Chennai',
      districtGid: 2,
      TotalPopulation: 4270471,
      Population: 3825501,
      Screenings: 523604,
      confirmedDM: 27595,
      controlledDM: 4037,
      Diabetes: '15%',
      confirmedHT: 34856,
      controlledHT: 82,
      Hypertension: '0%',
      confirmedBoth: 3,
      controlledBoth: 0,
      Both: '0%',
    },
  ];
  filterForm!: FormGroup;

  // Filter Settings
  districtsettings: IDropdownSettings = {};
  districtlist: any[] = [];
  hudsettings: IDropdownSettings = {};
  hudlist: any[] = [];
  blocksettings: IDropdownSettings = {};
  blocklist: any[] = [];
  villagesettings: IDropdownSettings = {};
  villagelist: any[] = [];
  @ViewChild(FiltersComponent) child!: FiltersComponent;

  constructor(
    private CommunitService: CommunityServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // this.filterForm = this.fb.group({
    //   districtMyItems: [],
    //   hudMyItems: [],
    //   blockMyItems: [],
    //   villageMyItems: [],
    // });
    // this.CommunitService.getdistrictmaster().subscribe((item) => {
    //   this.districtlist = item.districtWise;
    //   this.districtsettings = {
    //     idField: 'district_id',
    //     textField: 'district_name',
    //     allowSearchFilter: true,
    //   };
    // });
    // this.CommunitService.gethudmasterlooker().subscribe((item) => {
    //   this.hudlist = item.hudWise;
    //   this.hudsettings = {
    //     idField: 'hud_id',
    //     textField: 'hud_name',
    //     allowSearchFilter: true,
    //   };
    // });
    // this.CommunitService.getblockmasterlooker().subscribe((item) => {
    //   this.blocklist = item.blockWise;
    //   this.blocksettings = {
    //     idField: 'block_id',
    //     textField: 'block_name',
    //     allowSearchFilter: true,
    //   };
    // });
  }

  SearchFilter() {
    console.log('the search filter is trig');
    const Payl = this.child.PayloadDetails();
    console.log(this.child.PayloadDetails());
    this.LoadAll(Payl);
  }

  LoadAll(payload: any) {}
}
