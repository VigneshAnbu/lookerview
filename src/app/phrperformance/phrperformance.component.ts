import { Component, ViewChild } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { CommunityServiceService } from '../Services/community-service.service';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-phrperformance',
  templateUrl: './phrperformance.component.html',
  styleUrls: ['./phrperformance.component.css'],
})
export class PhrperformanceComponent {
  @ViewChild(FiltersComponent) child!: FiltersComponent;
  populationTotal = 0;
  familyResidentialStatus = 0;
  membersAdded = 0;
  familyAdded = 0;
  familiesUpdated = 0;
  population = 0;
  populationMappedWithStreets = 0;
  cmchisBeneficiary = 0;
  congenitalAnomaly = 0;
  populationGivenConsent = 0;
  aadhaarLinkedNumbers = 0;
  udidLinkedMembers = 0;
  disabilityBeneficiaries = 0;
  individualScreenings = 0;
  totalIndividualsConfirmedMTMBeneficiary = 0;
  totalIndividualRecievedDrugs = 0;
  individualScreenedGenderWise = [
    {
      name: 'female',
      value: 0,
    },
    {
      name: 'male',
      value: 0,
    },
    {
      name: 'others',
      value: 0,
    },
  ];
  mtmTargeUniqueScreened = [
    // {
    //   name: 'Below 18',
    //   value: 721632,
    // },
    // {
    //   name: '18 to 45',
    //   value: 8707124,
    // },
    // {
    //   name: '46 to 59',
    //   value: 4507124,
    // },
    // {
    //   name: '60 above',
    //   value: 3807124,
    // },
  ];
  ncdTargeUniqueScreened = [
    // {
    //   name: 'Below 18',
    //   value: 721632,
    // },
    // {
    //   name: '18 to 29',
    //   value: 8707124,
    // },
    // {
    //   name: '30 above',
    //   value: 4507124,
    // },
  ];
  firstTimeVsRepeatedTimeScreening = [
    {
      name: 'screened only once',
      series: [
        {
          name: '2016',
          value: '15000',
        },
        {
          name: '2017',
          value: '20000',
        },
        {
          name: '2018',
          value: '25000',
        },
        {
          name: '2019',
          value: '30000',
        },
      ],
    },
    {
      name: 'Multiple Time screened',
      series: [
        {
          name: '2016',
          value: '4000',
        },
        {
          name: '2017',
          value: '4500',
        },
        {
          name: '2018',
          value: '10000',
        },
        {
          name: '2019',
          value: '15000',
        },
      ],
    },
  ];
  individualScreenLastSevenDays = [
    {
      name: 'screened',
      series: [
        {
          name: '2016',
          value: '4000',
        },
        {
          name: '2017',
          value: '4500',
        },
        {
          name: '2018',
          value: '10000',
        },
        {
          name: '2019',
          value: '15000',
        },
      ],
    },
  ];
  schoolTargeUniqueScreened = [
    // {
    //   name: 'Below 3',
    //   value: 211632,
    // },
    // {
    //   name: '3 to 6',
    //   value: 8707124,
    // },
    // {
    //   name: '7 to 9',
    //   value: 4507124,
    // },
    // {
    //   name: '10 to 19',
    //   value: 3807124,
    // },
  ];
  facilityWiseScreening = [
    // {
    //   name: 'mcc',
    //   value: 211632,
    // },
    // {
    //   name: 'woman and child',
    //   value: 807124,
    // },
    // {
    //   name: 'rural HSC',
    //   value: 4507124,
    // },
    // {
    //   name: 'MCH',
    //   value: 3807124,
    // },
    // {
    //   name: 'MCH1',
    //   value: 3824,
    // },
    // {
    //   name: 'MCH2',
    //   value: 407124,
    // },
    // {
    //   name: 'MCH3',
    //   value: 30124,
    // },
    // {
    //   name: 'MCH4',
    //   value: 47124,
    // },
    // {
    //   name: 'MCH5',
    //   value: 38124,
    // },
  ];
  populationRDMNDStatus = [
    {
      name: 'resident Count',
      value: 0,
    },
    {
      name: 'migrant Count',
      value: 0,
    },
    {
      name: 'death Count',
      value: 0,
    },
    {
      name: 'duplicate Count',
      value: 0,
    },
    {
      name: 'non Traceable Count',
      value: 0,
    },
  ];
  mtmBeneficiaries = [
    {
      name: 'confirmed Diabetes Mellitus',
      value: 0,
    },
    {
      name: 'confirmed Hypertension',
      value: 0,
    },
    {
      name: 'confirmed Diabetes Mellitus Hypertension',
      value: 0,
    },
    {
      name: 'controlled Diabetes Mellitus',
      value: 0,
    },
    {
      name: 'controlled Hypertension',
      value: 0,
    },
    {
      name: 'both',
      value: 0,
    },
  ];
  verifiedVsNonVerfiedPopulations = [
    {
      name: 'Population Verified ',
      value: 0,
    },
    {
      name: 'Non-population Verified',
      value: 0,
    },
  ];
  pbsConditionScreenings = [
    {
      name: "Shoulder Pain",
      value: 0,
    },
    {
      name: "Leg Pain",
      value: 0,
    },
    {
      name: "Headache",
      value: 0,
    },
    {
      name: "Myalgia",
      value: 0,
    },
    {
      name: "Low back pain",
      value: 0,
    },
    {
      name: "Physiotheraphy Care",
      value: 0,
    }
  ]
  individualScreenedAgeWise = [
    {
      name: 'Below 10',
      value: 0,
    },
    {
      name: '10 to 19',
      value: 0,
    },
    {
      name: '20 to 29',
      value: 0,
    },
    {
      name: '30 to 39',
      value: 0,
    },
    {
      name: '40 to 49',
      value: 0,
    },
    {
      name: '50 to 59',
      value: 0,
    },
    {
      name: '60 to 69',
      value: 0,
    },
    {
      name: '70 to 79',
      value: 0,
    },
    {
      name: 'Above 80',
      value: 0,
    },
  ];
  individualScreenedVillageTypeWise = [
    {
      name: 'VP',
      value: 0,
    },
    {
      name: 'TP',
      value: 0,
    },
    {
      name: 'MP',
      value: 0,
    },
    {
      name: 'CO',
      value: 0,
    },
    {
      name: 'other',
      value: 0,
    },
    {
      name: 'OT',
      value: 0,
    },
  ];
  labTests: any[] = [ ];
  noOfIndividualsReferredSplitUp: any[] = [];
  uhc16ConditionScreening: any[] = [];
  drugIssued: any[] = [];
  roleScreeningCount: any[] = [];
  phrHealthData: any[] = [
    {
      district_Name: '',
      district_Gid: '',
      hud_Name: '',
      hud_Gid: '',
      block_Name: '',
      block_Gid: '',
      village_Name: '',
      village_Gid: '',
      phc: '',
      hsc: '',
      unique_Screening: '',
      total_Screening: '',
      unique_Screening_Count: '',
      population_Age: '',
      verified_Population: '',
      death_Count: '',
      resident_Count: '',
      resident_Verified_Percentage: '',
      percentage_Screening: '',
      confirmed_Diabetes_Mellitus: '',
      controlled_Diabetes_Mellitus: '',
      diabetes_Percentage: '',
      confirmed_Hypertension: '',
      controlled_Hypertension: '',
      hypertension_Percentage: '',
      confirmed_Both: '',
      controlled_Both: '',
      both_Percentage: '',
    },
  ];
  phrMtmData: any[] = [
    {
      district_Name: '',
      district_Gid: '',
      hud_Name: '',
      hud_Gid: '',
      block_Name: '',
      village_Name: '',
      village_Gid: '',
      user_Facility_Type: '',
      phc: '',
      hsc: '',
      palliative_Care_Mtm_Updated: '',
      physiotherapy_Mtm_Updated: '',
      capd_Mtm_Updated: '',
      both_Mtm_Updated: '',
      confirmed_Diabetes_Mellitus: '',
      confirmed_Both: '',
      confirmed_Hypertension: '',
      controlled_Both: '',
      controlled_Diabetes_Mellitus: '',
      controlled_Hypertension: '',
    },
  ];
  byStaffHealthData: any[] = [
    {
      district_Name: '',
      district_Gid: '',
      hud_Name: '',
      hud_Gid: '',
      block_Name: '',
      block_Gid: '',
      village_Name: '',
      village_Gid: '',
      phc: '',
      hsc: '',
      mlhp_Individual_Screening: '',
      mlhp_Total_Screening: '',
      mlhp_Individual_Drugs: '',
      mlhp_Population_Verified: '',
      whv_Population_Verified: '',
      whv_Total_Screening: '',
      whv_Individual_Screened: '',
      whv_Individual_Drugs: '',
      dph_Population_Verified: '',
      dph_Total_Screening: '',
      dph_Individual_Screening: '',
      dph_Individual_Drugs: '',
      dms_Population_Verified: '',
      dms_Total_Screening: '',
      dms_Individual_Drugs: '',
      dms_Individual_Screening: '',
      dme_Total_Screening: '',
      dme_Individual_Drugs: '',
      dme_Individual_Screening: '',
      dme_Population_Verified: '',
    },
  ];
  byStaffMtmData: any[] = [{}];
  view: [number, number] = [350, 250];
  barview: [number, number] = [600, 300];
  // options
  gradient = false;
  arcWidth = 0.5;
  showLegend = true;
  showLabels = true;
  isDoughnut = true;
  legendPosition: LegendPosition = LegendPosition.Right;
  showXAxis = true;
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
  constructor(private CommunitService: CommunityServiceService) { }
  ngOnInit(): void {
    this.LoadAll();
  }
  SearchFilter() {
    console.log('the search filter is trig');
    const Payl = this.child.PayloadDetails();
    console.log(this.child.PayloadDetails());
    this.LoadAll(Payl);
  }

  LoadAll(payload?: any) {
    this.getTotalPopulationCountPhrPer(payload);
    this.getIndividualScreenedGenderWisePhrPer(payload);
    this.getMTMTargetUniqueScreenedPhrPer(payload);
    this.getFamilyResidentailStatusPhrPer(payload);
    this.getMembersAddedPhrPer(payload);
    this.getFamiliesAddedPhrPer(payload);
    this.getFamiliesUpdatedPhrPer(payload);
    this.getPopulationGivenConsentPhrPer(payload);
    this.getScreenedOnlyOnceAndMultipleTimesPhrPer(payload);
    this.getNCDTargetUniqueScreenedPhrPer(payload);
    this.getPopulationMappedStreetsPhrPer(payload);
    this.getCMCHISBeneficiariesPhrPer(payload);
    this.getCongenitalAnomalyPhrPer(payload);
    this.getScreenedLastSevenDaysPhrPer(payload);
    this.getSchoolTargetUniqueScreenedPhrPer(payload);
    this.getAadhaarLinkedMembersPhrPer(payload);
    this.getUDIDLinkedMembersPhrPer(payload);
    this.getDisabilityBeneficiariesPhrPer(payload);
    this.getIndividualScreeningsPhrPer(payload);
    this.getIndividualReceivedDrugsPhrPer(payload);
    this.getTotalConfirmedMTMBeneficiaryPhrPer(payload);
    this.getFacilityWiseScreeningPhrPer(payload);
    this.getPopulationRDMNDStatusPhrPer(payload);
    this.getMTMBeneficiariesPhrPer(payload);
    this.getPBSConditionScreeningPhrPer(payload);
    this.getPopulationVerifiedNonVerifiedStatusPhrPer(payload);
    this.getIndividualScreenedAgeWisePhrPer(payload);
    this.getLabTestPhrPer(payload);
    this.getScreenedVillageTypeWisePhrPer(payload);
    this.getReferredSplitUpPhrPer(payload);
    this.getUHCConditionScreeningPhrPer(payload);
    this.getDrugsIssuedPhrPer(payload);
    this.getRoleBasedScreeningPhrPer(payload);
    this.getStaffMtmPhrPer(payload);
    this.getStaffHealthPhrPer(payload);
    this.getPHRMTMPhrPer(payload);
    this.getPHRHealthPhrPer(payload);
  }
  getStaffMtmPhrPer(payload?: any) {
    this.CommunitService.getStaffMtmPhrPer(payload).subscribe((res: any) => {
      this.byStaffMtmData = res;
    })
  }
  getStaffHealthPhrPer(payload?: any) {
    this.CommunitService.getStaffHealthPhrPer(payload).subscribe((res: any) => {
      console.log('byStaffHealthData', res);
      this.byStaffHealthData = res;
    })
  }
  getPHRMTMPhrPer(payload?: any) {
    this.CommunitService.getPHRMTMPhrPer(payload).subscribe((res: any) => {
      console.log('phrMtmData', res);
      this.phrMtmData = res;
    })
  }
  getPHRHealthPhrPer(payload?: any) {
    this.CommunitService.getPHRHealthPhrPer(payload).subscribe((res: any) => {
      console.log('phrHealthData', res);
      this.phrHealthData = res;
    })
  }
  getTotalPopulationCountPhrPer(payload: any) {
    this.CommunitService.getTotalPopulationCountPhrPer(payload).subscribe((res: any) => {
      if (res) {
        this.populationTotal = res?.total_population;
      }
    })
  }
  getIndividualScreenedGenderWisePhrPer(payload: any) {
    this.CommunitService.getIndividualScreenedGenderWisePhrPer(payload).subscribe((res: any) => {
      if (res) {
        this.individualScreenedGenderWise = [
          {
            name: 'female',
            value: res.female_Count,
          },
          {
            name: 'male',
            value: res.male_Count,
          },
          {
            name: 'others',
            value: res.other_Count,
          },
        ];
      }
    })
  }
  getMTMTargetUniqueScreenedPhrPer(payload: any) {
    this.CommunitService.getMTMTargetUniqueScreenedPhrPer(payload).subscribe((lists: any) => {
      if (lists) {
        this.mtmTargeUniqueScreened = lists.map((list: any) => ({ name: list.age_Group, value: list.age_Count }))
      }
    })
  }
  getFamilyResidentailStatusPhrPer(payload: any) {
    this.CommunitService.getFamilyResidentailStatusPhrPer(payload).subscribe((res: any) => {
      if (res) {
        this.familyResidentialStatus = res.family_Residential_Status
      }
    })
  }
  getMembersAddedPhrPer(payload: any) {
    this.CommunitService.getMembersAddedPhrPer(payload).subscribe((res: any) => {
      if (res) {
        this.membersAdded = res?.members_Added;
      }
    })
  }
  getFamiliesAddedPhrPer(payload: any) {
    this.CommunitService.getFamiliesAddedPhrPer(payload).subscribe((res: any) => {
      if (res) {
        this.familyAdded = res.families_Added;
      }
    })
  }
  getFamiliesUpdatedPhrPer(payload: any) {
    this.CommunitService.getFamiliesUpdatedPhrPer(payload).subscribe((res: any) => {
      if (res) {
        this.familiesUpdated = res.families_Updated;
      }
    })
  }
  getPopulationGivenConsentPhrPer(payload: any) {
    this.CommunitService.getPopulationGivenConsentPhrPer(payload).subscribe((res: any) => {
      if (res) {
        this.populationGivenConsent = res.population_Given_Consent;
      }
    })
  }
  getScreenedOnlyOnceAndMultipleTimesPhrPer(payload: any) {
    this.CommunitService.getScreenedOnlyOnceAndMultipleTimesPhrPer(payload).subscribe((res: any) => {
      if (res && res.test && res.count && res.days) {
        // this.firstTimeVsRepeatedTimeScreening
      }
    })
  }
  getNCDTargetUniqueScreenedPhrPer(payload: any) {
    this.CommunitService.getNCDTargetUniqueScreenedPhrPer(payload).subscribe((lists: any) => {
      if (lists) {
        this.ncdTargeUniqueScreened = lists.map((list: any) => ({ name: list.age_Group, value: list.age_Count }))
      }
    })
  }
  getPopulationMappedStreetsPhrPer(payload: any) {
    this.CommunitService.getPopulationMappedStreetsPhrPer(payload).subscribe((res: any) => {
      if (res) {
        this.populationMappedWithStreets = res.population_Mapped_Street;
      }
    })
  }
  getCMCHISBeneficiariesPhrPer(payload: any) {
    this.CommunitService.getCMCHISBeneficiariesPhrPer(payload).subscribe((res: any) => {
      if (res) {
        this.cmchisBeneficiary = res.cmchiS_Count;
      }
    })
  }
  getCongenitalAnomalyPhrPer(payload: any) {
    this.CommunitService.getCongenitalAnomalyPhrPer(payload).subscribe((res: any) => {
      if (res) {
        this.congenitalAnomaly = res.congenital_Anomaly;
      }
    })
  }
  getScreenedLastSevenDaysPhrPer(payload: any) {
    this.CommunitService.getScreenedLastSevenDaysPhrPer(payload).subscribe((res: any) => {
      if (res && res.last_Seven_Days && res.count) {
        // this.individualScreenLastSevenDays
      }
    })
  }
  getSchoolTargetUniqueScreenedPhrPer(payload: any) {
    this.CommunitService.getSchoolTargetUniqueScreenedPhrPer(payload).subscribe((lists: any) => {
      if (lists) {
        lists.splice(lists.findIndex((list: any) => !list.age_Group), 1)
        this.schoolTargeUniqueScreened = lists.map((list: any) => ({ name: list.age_Group, value: list.age_Count }))
      }
    })
  }
  getAadhaarLinkedMembersPhrPer(payload: any) {
    this.CommunitService.getAadhaarLinkedMembersPhrPer(payload).subscribe((res: any) => {
      if (res) {
        this.aadhaarLinkedNumbers = res.aadhaar_Linked_Member_Count;
      }
    })
  }
  getUDIDLinkedMembersPhrPer(payload: any) {
    this.CommunitService.getUDIDLinkedMembersPhrPer(payload).subscribe((res: any) => {
      if (res) {
        this.udidLinkedMembers = res.udiD_Linked_Member_Count;
      }
    })
  }
  getDisabilityBeneficiariesPhrPer(payload: any) {
    this.CommunitService.getDisabilityBeneficiariesPhrPer(payload).subscribe((res: any) => {
      if (res) {
        this.disabilityBeneficiaries = res.disability_Beneficiaries_Count;
      }
    })
  }
  getIndividualScreeningsPhrPer(payload: any) {
    this.CommunitService.getIndividualScreeningsPhrPer(payload).subscribe((res: any) => {
      if (res) {
        this.individualScreenings = res.individual_Screening_Count;
      }
    })
  }
  getIndividualReceivedDrugsPhrPer(payload: any) {
    this.CommunitService.getIndividualReceivedDrugsPhrPer(payload).subscribe((res: any) => {
      if (res) {
        this.totalIndividualRecievedDrugs = res.individual_Received_Drug_Count;
      }
    })
  }
  getTotalConfirmedMTMBeneficiaryPhrPer(payload: any) {
    this.CommunitService.getTotalConfirmedMTMBeneficiaryPhrPer(payload).subscribe((res: any) => {
      if (res) {
        this.totalIndividualsConfirmedMTMBeneficiary = res.total_Confirmed_Beneficiary_Count;
      }
    })
  }
  getFacilityWiseScreeningPhrPer(payload: any) {
    this.CommunitService.getFacilityWiseScreeningPhrPer(payload).subscribe((lists: any) => {
      if (lists) {
        this.facilityWiseScreening = lists.map((list: any) => ({ name: list.facility_Type_Name, value: list.facility_Wise_Screening_Count }))
      }
    })
  }
  getPopulationRDMNDStatusPhrPer(payload: any) {
    this.CommunitService.getPopulationRDMNDStatusPhrPer(payload).subscribe((res: any) => {
      if (res) {
        this.populationRDMNDStatus = [
          {
            name: 'resident Count',
            value: res[0].resident_Count,
          },
          {
            name: 'migrant Count',
            value: res[0].migrant_Count,
          },
          {
            name: 'death Count',
            value: res[0].death_Count,
          },
          {
            name: 'duplicate Count',
            value: res[0].duplicate_Count,
          },
          {
            name: 'non Traceable Count',
            value: res[0].non_Traceable_Count,
          },
        ];
      }
    })
  }
  getMTMBeneficiariesPhrPer(payload: any) {
    this.CommunitService.getMTMBeneficiariesPhrPer(payload).subscribe((res: any) => {
      if (res) {
        this.mtmBeneficiaries = [
          {
            name: 'confirmed Diabetes Mellitus',
            value: res.confirmed_Diabetes_Mellitus,
          },
          {
            name: 'confirmed Hypertension',
            value: res.confirmed_Hypertension,
          },
          {
            name: 'confirmed Diabetes Mellitus Hypertension',
            value: res.confirmed_Diabetes_Mellitus_Hypertension,
          },
          {
            name: 'controlled Diabetes Mellitus',
            value: res.controlled_Diabetes_Mellitus,
          },
          {
            name: 'controlled Hypertension',
            value: res.controlled_Hypertension,
          },
          {
            name: 'both',
            value: res.both,
          },
        ];
      }
    })
  }
  getPBSConditionScreeningPhrPer(payload: any) {
    this.CommunitService.getPBSConditionScreeningPhrPer(payload).subscribe((lists: any) => {
      if (lists) {
        this.pbsConditionScreenings = lists.map((list: any) => ({ name: list.diagnosis_Name, value: list.disease_Count }))
      }
    })
  }
  getPopulationVerifiedNonVerifiedStatusPhrPer(payload: any) {
    this.CommunitService.getPopulationVerifiedNonVerifiedStatusPhrPer(payload).subscribe((lists: any) => {
      if (lists) {
        this.verifiedVsNonVerfiedPopulations = [
          {
            name: 'Population Verified ',
            value: lists[0].population_Verified_Count,
          },
          {
            name: 'Non-population Verified',
            value: lists[0].population_Non_Verified_Count,
          },
        ];
      }
    })
  }
  getIndividualScreenedAgeWisePhrPer(payload: any) {
    this.CommunitService.getIndividualScreenedAgeWisePhrPer(payload).subscribe((lists: any) => {
      if (lists) {
        this.individualScreenedAgeWise = lists.map((list: any) => ({ name: list.age_Group, value: list.age_Count }))
      }
    })
  }
  getLabTestPhrPer(payload: any) {
    this.CommunitService.getLabTestPhrPer(payload).subscribe((lists: any) => {
      if (lists) {
        this.labTests = [...calculatePercentage(lists,'lab_Test_Count')];
      }
    })
  }
  getScreenedVillageTypeWisePhrPer(payload: any) {
    this.CommunitService.getScreenedVillageTypeWisePhrPer(payload).subscribe((lists: any) => {
      if (lists) {
        this.individualScreenedVillageTypeWise = lists.map((list: any) => ({ name: list.village_Type, value: list.village_Type_Count }))
      }
    })
  }
  getReferredSplitUpPhrPer(payload: any) {
    this.CommunitService.getReferredSplitUpPhrPer(payload).subscribe((lists: any) => {
      if (lists) {
        this.noOfIndividualsReferredSplitUp = [...calculatePercentage(lists,'referred_Count')];
      }
    })
  }
  getUHCConditionScreeningPhrPer(payload: any) {
    this.CommunitService.getUHCConditionScreeningPhrPer(payload).subscribe((lists: any) => {
      if (lists) {
        this.uhc16ConditionScreening = [...calculatePercentage(lists,'total_Screening_Count')];
      }
    })
  }
  getDrugsIssuedPhrPer(payload: any) {
    this.CommunitService.getDrugsIssuedPhrPer(payload).subscribe((lists: any) => {
      if (lists) {
        this.drugIssued = [...calculatePercentage(lists,'drug_Count')];
      }
    })
  }
  getRoleBasedScreeningPhrPer(payload: any) {
    this.CommunitService.getRoleBasedScreeningPhrPer(payload).subscribe((lists: any) => {
      if (lists) {
        this.roleScreeningCount = [...calculatePercentage(lists,'total_Screening_Count')];
      }
    })
  }
}


// Function to generate a random number between min (inclusive) and max (inclusive)
function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
// function generateListsFromModel(length: number, dynObj: Object) {
//   var testArray = [];
//   for (var i=0; i< length; i++) {
//     var testObj= {};
//     for (const key in dynObj) {
//       testObj[`${key}`] = Math.floor(getRandomNumber(1, 100));
//     }
//   }
// }
function generateLists(
  name: string,
  length: number,
  key1: string,
  key2: string
) {
  // Array to hold the objects
  var testArray = [];
  // Generate 10 objects with random values
  for (var i = 0; i < length; i++) {
    var testObject = {
      [key1]: name + ' ' + (i + 1),
      [key2]: Math.floor(getRandomNumber(1, 100)),
    };

    testArray.push(testObject);
  }
  // Output the array
  console.log(testArray);
  return testArray;
}
// Big o Notation O(n^2);
function calculatePercentage(array: any[], keyToAdd: string) {
  var total = 0;

  // Calculate the total count
  for (var i = 0; i < array.length; i++) {
    total += parseInt(array[i][keyToAdd]);
  }

  // Calculate and store the percentage for each object
  for (var i = 0; i < array.length; i++) {
    array[i].percentage = (parseInt(array[i][keyToAdd]) / total) * 100;
  }

  // Return the updated array
  return array;
}
