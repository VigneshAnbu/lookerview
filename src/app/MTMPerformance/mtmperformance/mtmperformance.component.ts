import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { FiltersComponent } from '../../filters/filters.component';
import { CommunityServiceService } from '../../Services/community-service.service';


@Component({
  selector: 'app-mtmperformance',
  templateUrl: './mtmperformance.component.html',
  styleUrls: ['./mtmperformance.component.css']
})
export class MtmperformanceComponent implements AfterViewInit {


  @ViewChild(FiltersComponent) child !: FiltersComponent;

  /*@ViewChild('child') private child: FiltersComponent;*/
  secondheading: string = "MTM Performance";

  @ViewChild('lineCanvas') lineCanvas: ElementRef | undefined;
  lineChart: any;

  @ViewChild('lineCanvas1') lineCanvas1: ElementRef | undefined;
  lineChart1: any;

  @ViewChild('lineCanvasdrug') lineCanvasdrug: ElementRef | undefined;
  lineChartdrug: any;

  @ViewChild('barCanvas') barCanvas: ElementRef | undefined;
  barChart: any;

  @ViewChild('barCanvas1') barCanvas1: ElementRef | undefined;

  barChart1: any;

  @ViewChild('barCanvasmtm') barCanvasmtm: ElementRef | undefined;

  barChartmtm: any;

  @ViewChild('barCanvasdrug') barCanvasdrug: ElementRef | undefined;

  barChartdrug: any;

  @ViewChild('barCanvasreferred') barCanvasreferred: ElementRef | undefined;

  barChartreferred: any;

  @ViewChild('barCanvasScreened') barCanvasScreened: ElementRef | undefined;

  barChartScreened: any;


  canvas: any;
  ctx: any;
  @ViewChild('pieCanvas') pieCanvas!: { nativeElement: any };

  pieChart: any;

  ngAfterViewInit(): void {

  }
  dashtot: any = {};
  dashscreening: any = {};
  dashscreeningind: any = {};
  dashdrug: any = {};
  dashdrugind: any = {};
  dashmtm: any = {};
  dashmtmdrug: any = {};


  rolebaseddata: any = [];
  districtmtm: any = {};
  hudmtm: any = {};


  referredobj: any = {};
  screeningobj: any = {};

  distobj: any = {};

  genderList: any = {};
  blockList: any = {};
  mtmBlockList: any = {};
  drugList: any = {};
  piechartlist: any = {};
  weekList: any = {};
  mtmWeekList: any = {};
  mtmWeekListDrug: any = {};



  districtdrug: any = {};

  blockdrug: any = {};
  blockmtm: any = {};
  villagedrug: any = {};

  districtagewise: any = {};

  huddrug: any = {};
  hudtotpop: any = {};

  constructor(private CommunitService: CommunityServiceService) {
  }



  SearchFilter() {
    //console.log(this.child)
    //console.log(this.child.form.value.districtmyItems)

    const Payl = this.child.PayloadDetails()

    console.log(this.child.PayloadDetails());

    this.LoadAll(Payl);
  }


  barChartMethod() {


    this.barChart = new Chart(this.barCanvas?.nativeElement, {
      type: 'bar',
      data: {
        labels: [this.genderList[0].gender, this.genderList[1].gender, this.genderList[2].gender],
        datasets: [
          {
            label: 'Unique Screening Gender Wise',
            data: [this.genderList[0].count, this.genderList[1].count, this.genderList[2].count],
            backgroundColor: [
              //'rgba(255, 99, 132, 0.2)',
              //'rgba(54, 162, 235, 0.2)',
              //'rgba(255, 206, 86, 0.2)',

              '#3792cb',
              '#d63384',
              '#FFA500'
            ],
            borderColor: [
              '#3792cb',
              '#d63384',
              '#FFA500'
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }


  barChartMethodReferred() {


    this.barChartreferred = new Chart(this.barCanvasreferred?.nativeElement, {
      type: 'bar',
      data: {
        labels: [this.referredobj[0].facility_name, this.referredobj[1].facility_name, this.referredobj[2].facility_name, this.referredobj[3].facility_name, this.referredobj[4].facility_name, this.referredobj[5].facility_name],
        datasets: [
          {
            label: 'Total number of Referred',
            data: [this.referredobj[0].count, this.referredobj[1].facility_name, this.referredobj[2].count, this.referredobj[3].count, this.referredobj[4].count, this.referredobj[5].count],
            backgroundColor: [
              //'rgba(255, 99, 132, 0.2)',
              //'rgba(54, 162, 235, 0.2)',
              //'rgba(255, 206, 86, 0.2)',

              'rgb(232, 113, 10)',
              'rgb(232, 113, 10)',
              'rgb(232, 113, 10)',
              'rgb(232, 113, 10)',
              'rgb(232, 113, 10)',
              'rgb(232, 113, 10)',
            ],
            borderColor: [
              'rgb(232, 113, 10)',
              'rgb(232, 113, 10)',
              'rgb(232, 113, 10)',
              'rgb(232, 113, 10)',
              'rgb(232, 113, 10)',
              'rgb(232, 113, 10)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }


  barChartMethodScreening() {


    this.barChartScreened = new Chart(this.barCanvasScreened?.nativeElement, {
      type: 'bar',
      data: {
        labels: [this.screeningobj[0].facility_name, this.screeningobj[1].facility_name, this.screeningobj[2].facility_name, this.screeningobj[3].facility_name, this.screeningobj[4].facility_name, this.screeningobj[5].facility_name, this.screeningobj[6].facility_name, this.screeningobj[7].facility_name, this.screeningobj[8].facility_name, this.screeningobj[9].facility_name],
        datasets: [
          {
            label: 'Total number of Referred',
            data: [this.screeningobj[0].count, this.screeningobj[1].count, this.screeningobj[2].count, this.screeningobj[3].count, this.screeningobj[4].count, this.screeningobj[5].count, this.screeningobj[6].count, this.screeningobj[7].count, this.screeningobj[8].count, this.screeningobj[9].count],
            backgroundColor: [
              //'rgba(255, 99, 132, 0.2)',
              //'rgba(54, 162, 235, 0.2)',
              //'rgba(255, 206, 86, 0.2)',

              'rgb(26, 115, 232)',
              'rgb(26, 115, 232)',
              'rgb(26, 115, 232)',
              'rgb(26, 115, 232)',
              'rgb(26, 115, 232)',
              'rgb(26, 115, 232)',
              'rgb(26, 115, 232)',
              'rgb(26, 115, 232)',
              'rgb(26, 115, 232)',
              'rgb(26, 115, 232)'
            ],
            borderColor: [
              'rgb(26, 115, 232)',
              'rgb(26, 115, 232)',
              'rgb(26, 115, 232)',
              'rgb(26, 115, 232)',
              'rgb(26, 115, 232)',
              'rgb(26, 115, 232)',
              'rgb(26, 115, 232)',
              'rgb(26, 115, 232)',
              'rgb(26, 115, 232)',
              'rgb(26, 115, 232)'
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  barChartMethodBlock() {


    this.barChart1 = new Chart(this.barCanvas1?.nativeElement, {
      type: 'bar',
      data: {
        labels: [this.blockList[0].block_Name, this.blockList[1].block_Name, this.blockList[2].block_Name, this.blockList[3].block_Name, this.blockList[4].block_Name],



        datasets: [
          {
            label: 'Top 5 Screened Blocks',
            data: [this.blockList[0].count, this.blockList[1].count, this.blockList[2].count, this.blockList[3].count, this.blockList[4].count],


            backgroundColor: [
              '#3792cb',
              '#3792cb',
              '#3792cb',
              '#3792cb',
              '#3792cb'
            ],
            borderColor: [
              '#3792cb',
              '#3792cb',
              '#3792cb',
              '#3792cb',
              '#3792cb'
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  barChartMethodBlockMTM() {


    this.barChartmtm = new Chart(this.barCanvasmtm?.nativeElement, {
      type: 'bar',
      data: {
        labels: [
          this.mtmBlockList[0].block_Name,
          this.mtmBlockList[1].block_Name,
          this.mtmBlockList[2].block_Name,
          this.mtmBlockList[3].block_Name,
          this.mtmBlockList[4].block_Name,
          this.mtmBlockList[5].block_Name,
          this.mtmBlockList[6].block_Name,
          this.mtmBlockList[7].block_Name,
          this.mtmBlockList[8].block_Name,
          this.mtmBlockList[9].block_Name

        ],


        datasets: [
          {
            label: 'Top 10 MTM Benefited Blocks',
            data: [
              this.mtmBlockList[0].count,
              this.mtmBlockList[1].count,
              this.mtmBlockList[2].count,
              this.mtmBlockList[3].count,
              this.mtmBlockList[4].count,
              this.mtmBlockList[5].count,
              this.mtmBlockList[6].count,
              this.mtmBlockList[7].count,
              this.mtmBlockList[8].count,
              this.mtmBlockList[9].count],


            backgroundColor: [
              '#7CB342',
              '#7CB342',
              '#7CB342',
              '#7CB342',
              '#7CB342',
              '#7CB342',
              '#7CB342',
              '#7CB342',
              '#7CB342',
              '#7CB342',
            ],
            borderColor: [
              '#7CB342',
              '#7CB342',
              '#7CB342',
              '#7CB342',
              '#7CB342',
              '#7CB342',
              '#7CB342',
              '#7CB342',
              '#7CB342',
              '#7CB342',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  barChartMethodBlockDrug() {


    this.barChartdrug = new Chart(this.barCanvasdrug?.nativeElement, {
      type: 'bar',
      data: {
        labels: [
          this.drugList[0].drug,
          this.drugList[1].drug,
          this.drugList[2].drug,
          this.drugList[3].drug,
          this.drugList[4].drug,
          this.drugList[5].drug,
          this.drugList[6].drug,
          this.drugList[7].drug,
          this.drugList[8].drug,
          this.drugList[9].drug

        ],


        datasets: [
          {
            label: 'Top 10 Drugs Issued',
            data: [
              this.drugList[0].count,
              this.drugList[1].count,
              this.drugList[2].count,
              this.drugList[3].count,
              this.drugList[4].count,
              this.drugList[5].count,
              this.drugList[6].count,
              this.drugList[7].count,
              this.drugList[8].count,
              this.drugList[9].count],


            backgroundColor: [

              '#FFA500',
              '#FFA500',
              '#FFA500',
              '#FFA500',
              '#FFA500',
              '#FFA500',
              '#FFA500',
              '#FFA500',
              '#FFA500',
              '#FFA500',


            ],
            borderColor: [
              '#FFA500',
              '#FFA500',
              '#FFA500',
              '#FFA500',
              '#FFA500',
              '#FFA500',
              '#FFA500',
              '#FFA500',
              '#FFA500',
              '#FFA500',


            ],
            borderWidth: 1,
            barPercentage: 0.5,
            categoryPercentage: 1
          },
        ],
      },
      options: {
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  pieChartBrowser(): void {
    this.canvas = this.pieCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    this.pieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: ['Below 18', '18 to 30', 'Above 30'],
        datasets: [
          {
            backgroundColor: [
              '#2ecc71',
              '#3498db',
              '#95a5a6',
            ],
            data: [this.piechartlist.below, this.piechartlist.middle, this.piechartlist.above],
          },
        ],
      },
    });
  }


  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: [
          this.weekList[0].months,
          this.weekList[1].months,
          this.weekList[2].months,
          this.weekList[3].months,
          this.weekList[4].months,
          this.weekList[5].months,
          this.weekList[6].months,
          this.weekList[7].months,
          this.weekList[8].months,
          this.weekList[9].months,
          this.weekList[10].months,
          this.weekList[11].months,
          this.weekList[12].months,
          this.weekList[13].months

        ],
        datasets: [
          {
            label: 'Screening count in past 10 weeks + 4 weeks projection',
            //  lineTension: 0.2,
            //fill: false,
            backgroundColor: '#3792cb',
            borderColor: '#3792cb',
            pointStyle: 'circle',
            pointRadius: 5,
            pointHoverRadius: 15,
            pointBackgroundColor: '#3792cb',

            //borderCapStyle: 'butt',
            //borderDash: [],
            //borderDashOffset: 0.1,
            //borderJoinStyle: 'miter',
            //pointBorderColor: 'rgba(75,192,192,1)',
            //pointBackgroundColor: '#fff',
            //pointBorderWidth: 1,
            //pointHoverRadius: 5,
            //pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            //pointHoverBorderColor: 'rgba(220,220,220,1)',
            //pointHoverBorderWidth: 2,
            //pointRadius: 1,
            //pointStyle: 'rectRot',
            //pointHitRadius: 10,


            data: [
              this.weekList[0].count,
              this.weekList[1].count,
              this.weekList[2].count,
              this.weekList[3].count,
              this.weekList[4].count,
              this.weekList[5].count,
              this.weekList[6].count,
              this.weekList[7].count,
              this.weekList[8].count,
              this.weekList[9].count,
              this.weekList[10].count,
              this.weekList[11].count,
              this.weekList[12].count,
              this.weekList[13].count
            ],
            spanGaps: false,
          },
        ],
      }
    });
  }


  lineChartMethodMTM() {
    this.lineChart1 = new Chart(this.lineCanvas1?.nativeElement, {
      type: 'line',
      data: {
        labels: [
          this.mtmWeekList[0].months,
          this.mtmWeekList[1].months,
          this.mtmWeekList[2].months,
          this.mtmWeekList[3].months,
          this.mtmWeekList[4].months,
          this.mtmWeekList[5].months,
          this.mtmWeekList[6].months,
          this.mtmWeekList[7].months,
          this.mtmWeekList[8].months,
          this.mtmWeekList[9].months,
          this.mtmWeekList[10].months,
          this.mtmWeekList[11].months,
          this.mtmWeekList[12].months,
          this.mtmWeekList[13].months

        ],
        datasets: [
          {
            label: 'Confirmed MTM count in past 10 weeks + 4 weeks projection',
            backgroundColor: '#7CB342',
            borderColor: '#7CB342',
            pointStyle: 'circle',
            pointRadius: 5,
            pointHoverRadius: 15,
            pointBackgroundColor: '#7CB342',
            //  lineTension: 0.2, 
            //fill: false,
            //backgroundColor: 'rgba(75,192,192,0.4)',
            //borderColor: 'rgba(75,192,192,1)',
            //borderCapStyle: 'butt',
            //borderDash: [],
            //borderDashOffset: 0.1,
            //borderJoinStyle: 'miter',
            //pointBorderColor: 'rgba(75,192,192,1)',
            //pointBackgroundColor: '#fff',
            //pointBorderWidth: 1,
            //pointHoverRadius: 5,
            //pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            //pointHoverBorderColor: 'rgba(220,220,220,1)',
            //pointHoverBorderWidth: 2,
            //pointRadius: 1,
            //pointHitRadius: 10,
            data: [
              this.mtmWeekList[0].count,
              this.mtmWeekList[1].count,
              this.mtmWeekList[2].count,
              this.mtmWeekList[3].count,
              this.mtmWeekList[4].count,
              this.mtmWeekList[5].count,
              this.mtmWeekList[6].count,
              this.mtmWeekList[7].count,
              this.mtmWeekList[8].count,
              this.mtmWeekList[9].count,
              this.mtmWeekList[10].count,
              this.mtmWeekList[11].count,
              this.mtmWeekList[12].count,
              this.mtmWeekList[13].count
            ],
            spanGaps: false,
          },
        ],
      },
    });
  }

  lineChartMethodMTMDrug() {
    this.lineChartdrug = new Chart(this.lineCanvasdrug?.nativeElement, {
      type: 'line',
      data: {
        labels: [
          this.mtmWeekListDrug[0].months,
          this.mtmWeekListDrug[1].months,
          this.mtmWeekListDrug[2].months,
          this.mtmWeekListDrug[3].months,
          this.mtmWeekListDrug[4].months,
          this.mtmWeekListDrug[5].months,
          this.mtmWeekListDrug[6].months,
          this.mtmWeekListDrug[7].months,
          this.mtmWeekListDrug[8].months,
          this.mtmWeekListDrug[9].months,
          this.mtmWeekListDrug[10].months,
          this.mtmWeekListDrug[11].months,
          this.mtmWeekListDrug[12].months,
          this.mtmWeekListDrug[13].months

        ],
        datasets: [
          {
            label: 'Drug issued count in past 10 weeks + 4 weeks projection',
            //  lineTension: 0.2,
            backgroundColor: '#FFA500',
            borderColor: '#FFA500',
            pointStyle: 'circle',
            pointRadius: 5,
            pointHoverRadius: 15,
            pointBackgroundColor: '#FFA500',
            //fill: false,
            //backgroundColor: 'rgba(75,192,192,0.4)',
            //borderColor: 'rgba(75,192,192,1)',
            //borderCapStyle: 'butt',
            //borderDash: [],
            //borderDashOffset: 0.1,
            //borderJoinStyle: 'miter',
            //pointBorderColor: 'rgba(75,192,192,1)',
            //pointBackgroundColor: '#fff',
            //pointBorderWidth: 1,
            //pointHoverRadius: 5,
            //pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            //pointHoverBorderColor: 'rgba(220,220,220,1)',
            //pointHoverBorderWidth: 2,
            //pointRadius: 1,
            //pointHitRadius: 10,
            data: [
              this.mtmWeekListDrug[0].count,
              this.mtmWeekListDrug[1].count,
              this.mtmWeekListDrug[2].count,
              this.mtmWeekListDrug[3].count,
              this.mtmWeekListDrug[4].count,
              this.mtmWeekListDrug[5].count,
              this.mtmWeekListDrug[6].count,
              this.mtmWeekListDrug[7].count,
              this.mtmWeekListDrug[8].count,
              this.mtmWeekListDrug[9].count,
              this.mtmWeekListDrug[10].count,
              this.mtmWeekListDrug[11].count,
              this.mtmWeekListDrug[12].count,
              this.mtmWeekListDrug[13].count
            ],
            spanGaps: false,
          },
        ],
      },
    });
  }


  ngOnInit(): void {


    const payload: any = {};

    //{
    //  "district_id": "",
    //  "hud_id": "",
    //  "block_id": "",
    //  "facility_id": "",
    //  "indistrict_id": "",
    //  "inhud_id": "",
    //  "inblock_id": "",
    //  "village_id": "",
    //  "directorate_id": "",
    //  "role": "",
    //  "infacility_id": ""

    //}



    this.LoadAll(payload);

  }

  LoadAll(payload: any) {
    this.CommunitService.gettotFilter(payload)
      .subscribe(item => {
        this.dashtot = item;

        console.log(item)

        console.log("Testtot")

        console.log(this.dashtot)
      })
    this.CommunitService.getscreeningFilter(payload)
      .subscribe(item => {
        this.dashscreening = item;
      })

    this.CommunitService.getscreeningindFilter(payload)
      .subscribe(item => {
        this.dashscreeningind = item;
      })
    this.CommunitService.getdrugFilter(payload)
      .subscribe(item => {
        this.dashdrug = item;
      })
    this.CommunitService.getdrugindFilter(payload)
      .subscribe(item => {
        this.dashdrugind = item;
      })


    this.CommunitService.getmtmbenFilter(payload)
      .subscribe(item => {
        this.dashmtm = item;
      })

    //var querystring = "0ec6d91c-262f-49ff-bcd6-712ee6c71e9b";

    //this.CommunitService.gettotalmtmbenfvget(querystring)
    //  .subscribe(item => {
    //    this.dashmtm = item;
    //  })

    //gettotalmtmbenfvget



    this.CommunitService.getdrugmtmFilter(payload)
      .subscribe(item => {
        this.dashmtmdrug = item;
      })


    this.CommunitService.getrolebasedFilter(payload)
      .subscribe(item => {

        console.log('Role')

        console.log(item)
        this.rolebaseddata = item;
      })

    this.CommunitService.getReferredFacilityFilter(payload)
      .subscribe(item => {
        this.referredobj = item;

        this.barChartMethodReferred();

      })

    this.CommunitService.getFacilityScreeningFilter(payload)
      .subscribe(item => {
        this.screeningobj = item;

        this.barChartMethodScreening();
      })


    this.CommunitService.getChartList1Filter(payload)
      .subscribe(item => {
        this.genderList = item;

        this.barChartMethod();
      })

    this.CommunitService.getChartList2Filter(payload)
      .subscribe(item => {
        this.piechartlist = item;

        console.log("Brinf")

        console.log(item)

        console.log(this.piechartlist)

        this.pieChartBrowser();
      })

    this.CommunitService.getChartList3Filter(payload)
      .subscribe(item => {
        this.weekList = item;

        this.lineChartMethod();
      })

    this.CommunitService.getChartList5Filter(payload)
      .subscribe(item => {
        this.blockList = item;

        this.barChartMethodBlock();
      })

    this.CommunitService.getChartList6Filter(payload)
      .subscribe(item => {
        this.mtmWeekList = item;

        this.lineChartMethodMTM();
      })

    this.CommunitService.getChartList6Filter(payload)
      .subscribe(item => {
        this.mtmWeekList = item;

        this.lineChartMethodMTM();
      })

    this.CommunitService.getChartList7Filter(payload)
      .subscribe(item => {
        this.mtmBlockList = item;

        this.barChartMethodBlockMTM();
      })

    this.CommunitService.getChartList8Filter(payload)
      .subscribe(item => {
        this.mtmWeekListDrug = item;

        this.lineChartMethodMTMDrug();
      })


    this.CommunitService.getChartList9Filter(payload)
      .subscribe(item => {
        this.drugList = item;

        this.barChartMethodBlockDrug();
      })





    this.CommunitService.getDistrictDrugFilter(payload)
      .subscribe(item => {
        this.districtdrug = item;
        console.log(item);
        this.CommunitService.GetDistrictScreenAgeWiseFilter(payload)
          .subscribe(item => {
            this.districtagewise = item;
            console.log(item);

          })

      })
    this.CommunitService.getBlockDrugFilter(payload)
      .subscribe(item => {
        this.blockdrug = item;
        console.log('Test');
        console.log(item);
      })
    this.CommunitService.getBlockmtmFilter(payload)
      .subscribe(item => {
        this.blockmtm = item;

      })
    this.CommunitService.getVillageDrugFilter(payload)
      .subscribe(item => {
        this.villagedrug = item;
      })
    this.CommunitService.getHUDDrugFilter(payload)
      .subscribe(item => {
        this.huddrug = item;
        console.log('H');
        console.log(item);
        this.CommunitService.GetDistrictPopScreenAgeWiseFilter(payload)
          .subscribe(item => {
            this.hudtotpop = item;
            console.log(item)
          })
      })
    this.CommunitService.getDistrictmtmFilter(payload)
      .subscribe(item => {
        this.districtmtm = item;
      })
    this.CommunitService.getHUDmtmFilter(payload)
      .subscribe(item => {
        this.hudmtm = item;
      })
  }

  loadtabledata(): void {

  }
}
