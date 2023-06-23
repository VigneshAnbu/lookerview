import { Component, ViewChild } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { CommunityServiceService } from '../Services/community-service.service';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-phrperformance',
  templateUrl: './phrperformance.component.html',
  styleUrls: ['./phrperformance.component.css']
})
export class PhrperformanceComponent {
  @ViewChild(FiltersComponent) child!: FiltersComponent;
  populationTotal = 67830166;
  familyResidentialStatus = 67830166;
  membersAdded = 652689;
  familyAdded = 32569854;
  familiesUpdated = 569854;
  population = 6452684;
  populationMappedWithStreets = 5698326;
  cmchisBeneficiary = 5698326;
  congenitalAnomaly = 5698326;
  populationGivenConsent = 5698326;
  aadhaarLinkedNumbers = 562398;
  udidLinkedMembers = 659832;
  disabilityBeneficiaries = 569823;
  individualScreenings = 549856;
  totalIndividualsConfirmedMTMBeneficiary = 569832;
  totalIndividualRecievedDrugs = 569832;
  individualScreenedGenderWise = [
    {
      name: 'female',
      value: 51.77,
    },
    {
      name: 'male',
      value: 48.19,
    },
    {
      name: 'others',
      value: 0.4,
    },
  ];
  mtmTargeUniqueScreened = [
    {
      name: 'Below 18',
      value: 721632,
    },
    {
      name: '18 to 45',
      value: 8707124,
    },
    {
      name: '46 to 59',
      value: 4507124,
    },
    {
      name: '60 above',
      value: 3807124,
    },
  ]
  ncdTargeUniqueScreened = [
    {
      name: 'Below 18',
      value: 721632,
    },
    {
      name: '18 to 29',
      value: 8707124,
    },
    {
      name: '30 above',
      value: 4507124,
    },
  ]
  firstTimeVsRepeatedTimeScreening = [
    {
      "name": "screened only once",
      "series": [
        {
          "name": "2016",
          "value": "15000"
        },
        {
          "name": "2017",
          "value": "20000"
        },
        {
          "name": "2018",
          "value": "25000"
        },
        {
          "name": "2019",
          "value": "30000"
        }
      ],
    },
    {
      "name": "Multiple Time screened",
      "series": [
        {
          "name": "2016",
          "value": "4000"
        },
        {
          "name": "2017",
          "value": "4500"
        },
        {
          "name": "2018",
          "value": "10000"
        },
        {
          "name": "2019",
          "value": "15000"
        }
      ],
    },
  ]
  individualScreenLastSevenDays = [
    {
      "name": "screened",
      "series": [
        {
          "name": "2016",
          "value": "4000"
        },
        {
          "name": "2017",
          "value": "4500"
        },
        {
          "name": "2018",
          "value": "10000"
        },
        {
          "name": "2019",
          "value": "15000"
        }
      ],
    },
  ];
  schoolTargeUniqueScreened = [
    {
      name: 'Below 3',
      value: 211632,
    },
    {
      name: '3 to 6',
      value: 8707124,
    },
    {
      name: '7 to 9',
      value: 4507124,
    },
    {
      name: '10 to 19',
      value: 3807124,
    },
  ];
  facilityWiseScreening = [
    {
      name: 'mcc',
      value: 211632,
    },
    {
      name: 'woman and child',
      value: 807124,
    },
    {
      name: 'rural HSC',
      value: 4507124,
    },
    {
      name: 'MCH',
      value: 3807124,
    },
    {
      name: 'MCH1',
      value: 3824,
    },
    {
      name: 'MCH2',
      value: 407124,
    },
    {
      name: 'MCH3',
      value: 30124,
    },
    {
      name: 'MCH4',
      value: 47124,
    },
    {
      name: 'MCH5',
      value: 38124,
    },

  ]
  populationRDMNDStatus = [
    {
      "name": "populationRDMNDStatus",
      "series": [
        {
          "name": "2010",
          "value": 122875
        },
        {
          "name": "2011",
          "value": 226875
        },
        {
          "name": "2012",
          "value": 16875
        }
      ]
    }
  ]
  mtmBeneficiaries = [
    {
      "name": "mtmBeneficiaries",
      "series": [
        {
          "name": "2010",
          "value": 122275
        },
        {
          "name": "2011",
          "value": 12875
        },
        {
          "name": "2012",
          "value": 22265
        },
        {
          "name": "2013",
          "value": 2265
        },
        {
          "name": "2014",
          "value": 2265
        },
      ]
    }
  ];
  verifiedVsNonVerfiedPopulations = [
    {
      "name": "-",
      "series": [
        {
          "name": "Population Verified ",
          "value": 122275
        },
        {
          "name": "Non-population Verified",
          "value": 12875
        },
      ]
    }
  ]
  pbsConditionScreenings = [
    {
      name: 'Hypertension',
      value: 2632,
    },
    {
      name: 'Physiotherapy',
      value: 87124,
    },
    {
      name: 'oral Cancer screening',
      value: 4724,
    },
    {
      name: 'Tuberculosis',
      value: 37124,
    },
    {
      name: 'Chronic kidney',
      value: 3124,
    },
    {
      name: 'CAPD',
      value: 3124,
    },
  ];
  individualScreenedAgeWise = [
    {
      name: 'Below 10',
      value: 211632,
    },
    {
      name: '10 to 19',
      value: 807124,
    },
    {
      name: '20 to 29',
      value: 4507124,
    },
    {
      name: '30 to 39',
      value: 3807124,
    },
    {
      name: '40 to 49',
      value: 3824,
    },
    {
      name: '50 to 59',
      value: 407124,
    },
    {
      name: '60 to 69',
      value: 30124,
    },
    {
      name: '70 to 79',
      value: 47124,
    },
    {
      name: 'Above 80',
      value: 38124,
    },
  ];
  individualScreenedVillageTypeWise = [
    {
      name: 'VP',
      value: 211632,
    },
    {
      name: 'TP',
      value: 807124,
    },
    {
      name: 'MP',
      value: 4507124,
    },
    {
      name: 'CO',
      value: 3807124,
    },
    {
      name: 'other',
      value: 3824,
    },
    {
      name: 'OT',
      value: 3824,
    },
  ]
  labTests: any[] = [...calculatePercentage(generateLists('test', 20, 'testName', 'testCount'), 'testCount')];
  noOfIndividualsReferredSplitUp: any[] = [...calculatePercentage(generateLists('category', 20, 'catagoryName', 'referralCount'), 'referralCount')]
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
  constructor(
    private CommunitService: CommunityServiceService,
  ) {

  }
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

  }
}

// Function to generate a random number between min (inclusive) and max (inclusive)
function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}


function generateLists(name: string, length: number, key1: string, key2: string) {
  // Array to hold the objects
  var testArray = [];

  // Generate 10 objects with random values
  for (var i = 0; i < length; i++) {
    var testObject = {
      [key1]: name + " " + (i + 1),
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
    total += array[i][keyToAdd];
  }

  // Calculate and store the percentage for each object
  for (var i = 0; i < array.length; i++) {
    array[i].percentage = (array[i][keyToAdd] / total) * 100;;
  }

  // Return the updated array
  return array;
}
