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
  populationTotal: number = 0;
  screeningCount: number = 0;
  confirmedCasesCount: number = 0;
  diabetesData = [
    {
      name: 'Confirmed',
      value: 0,
    },
    {
      name: 'Controlled',
      value: 0,
    },
    {
      name: 'Uncontrolled',
      value: 0,
    },
  ];
  hypertensionData = [
    {
      name: 'Confirmed',
      value: 0,
    },
    {
      name: 'Controlled',
      value: 0,
    },
    {
      name: 'Uncontrolled',
      value: 0,
    },
  ];
  bothData = [
    {
      name: 'Confirmed',
      value: 0,
    },
    {
      name: 'Controlled',
      value: 0,
    },
    {
      name: 'Uncontrolled',
      value: 0,
    },
  ];
  diabVsHyp = [
    {
      name: 'Diabetes',
      value: 0,
    },
    {
      name: 'Hypertension',
      value: 0,
    },
    {
      name: 'Both',
      value: 0,
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
  districtWise: any = [
    // {
    //   both_Percentage: "0",
    //   confirmed_Both: "0",
    //   confirmed_Diabetes_Mellitus: "1",
    //   confirmed_Hypertension: "0",
    //   controlled_Both: "0",
    //   controlled_Diabetes_Mellitus: "0",
    //   controlled_Hypertension: "0",
    //   diabetes_Percentage: "0",
    //   district_Gid: "17",
    //   district_Name: "Ariyalur",
    //   hypertension_Percentage: "0",
    //   population_Age: "696924",
    //   total_Population: "806527",
    //   total_Screening: "23520",
    // }
  ];
  hudWise: any = [];
  blockWise: any = [];
  VillageWise: any = [];
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
  ) { }

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
    this.LoadAll();
  }

  SearchFilter() {
    console.log('the search filter is trig');
    const Payl = this.child.PayloadDetails();
    console.log(this.child.PayloadDetails());
    this.LoadAll(Payl);
  }

  LoadAll(payload?: any) {
    this.getPopulation(payload);
    this.getTotalScreeningCount(payload);
    this.getConfirmedCasesCount(payload);
    this.getDiabetesvsHypertensionvsBoth(payload);
    this.getConfirmedControlledUncontrolledDiabetes(payload);
    this.getConfirmedControlledUncontrolledHypertension(payload);
    this.getConfirmedControlledUncontrolledBoth(payload);
    this.getDistrictWisePopulation(payload);
    this.getHudWisePopulation(payload);
    this.getBlockWisePopulation(payload);
    this.getVillageWisePopulation(payload);
  }
  getPopulation(filterPayload?: any) {
    this.CommunitService.getPopulationCount(filterPayload).subscribe((res: any) => {
      this.populationTotal = res.total_population;
    })
  }
  getTotalScreeningCount(filterPayload?: any) {
    this.CommunitService.getTotalScreeningCount(filterPayload).subscribe((res: any) => {
      this.screeningCount = res.total_Screening;
    })
  }
  getConfirmedCasesCount(filterPayload?: any) {
    this.CommunitService.getConfirmedCasesCount(filterPayload).subscribe((res: any) => {
      this.confirmedCasesCount = res.total_Confirmed_caeses;
    })
  }
  getDiabetesvsHypertensionvsBoth(filterPayload?: any) {
    this.CommunitService.getDiabetesvsHypertensionvsBoth(filterPayload).subscribe((res: any) => {
      if (res) {
        this.diabVsHyp = [
          {
            name: 'Diabetes',
            value: parseInt(res?.diabetes_Mellitus),
          },
          {
            name: 'Hypertension',
            value: parseInt(res?.hypertension),
          },
          {
            name: 'Both',
            value: parseInt(res?.both),
          },
        ];
      }
    })
  }
  getConfirmedControlledUncontrolledDiabetes(filterPayload?: any) {
    this.CommunitService.getConfirmedControlledUncontrolledDiabetes(filterPayload).subscribe((res: any) => {
      this.diabetesData = [
        {
          name: 'Confirmed',
          value: res.confirmed_Diabetes_Mellitus,
        },
        {
          name: 'Controlled',
          value: res.controlled_Diabetes_Mellitus,
        },
        {
          name: 'Uncontrolled',
          value: res.uncontrolled_Diabetes,
        },
      ];
    })
  }
  getConfirmedControlledUncontrolledHypertension(filterPayload?: any) {
    this.CommunitService.getConfirmedControlledUncontrolledHypertension(filterPayload).subscribe((res: any) => {
      this.hypertensionData = [
        {
          name: 'Confirmed',
          value: res.confirmed_Hypertension,
        },
        {
          name: 'Controlled',
          value: res.controlled_Hypertension,
        },
        {
          name: 'Uncontrolled',
          value: res.uncontrolled_Hypertension,
        },
      ];
    })
  }
  getConfirmedControlledUncontrolledBoth(filterPayload?: any) {
    this.CommunitService.getConfirmedControlledUncontrolledBoth(filterPayload).subscribe((res: any) => {
      this.bothData = [
        {
          name: 'Confirmed',
          value: res.confirmed_Both,
        },
        {
          name: 'Controlled',
          value: res.controlled_Both,
        },
        {
          name: 'Uncontrolled',
          value: res.uncontrolled_Both,
        },
      ];
    })
  }
  getDistrictWisePopulation(filterPayload?: any) {
    this.CommunitService.getDistrictWisePopulation(filterPayload).subscribe((res: any) => {
      this.districtWise = res;
    })
  }
  getHudWisePopulation(filterPayload?: any) {
    this.CommunitService.getHudWisePopulation(filterPayload).subscribe((res: any) => {
      this.hudWise = res;
    })
  }
  getBlockWisePopulation(filterPayload?: any) {
    this.CommunitService.getBlockWisePopulation(filterPayload).subscribe((res: any) => {
      this.blockWise = res;
    })
  }
  getVillageWisePopulation(filterPayload?: any) {
    this.CommunitService.getVillageWisePopulation(filterPayload).subscribe((res: any) => {
      this.VillageWise = res;
    })
  }
}
