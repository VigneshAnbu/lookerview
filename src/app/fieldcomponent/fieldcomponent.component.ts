import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { FiltersComponent } from '../filters/filters.component';
import { CommunityServiceService } from '../Services/community-service.service';

@Component({
  selector: 'app-fieldcomponent',
  templateUrl: './fieldcomponent.component.html',
  styleUrls: ['./fieldcomponent.component.css']
})
export class FieldcomponentComponent implements AfterViewInit {


  @ViewChild(FiltersComponent) child !: FiltersComponent;

  @ViewChild('barCanvasdrug') barCanvasdrug: ElementRef | undefined;

  barChartdrug: any;

  objtotalVerified: any = {};

  objfamilymember: any = {};

  districtwiselist: any = {};

  hudwiselist: any = {};

  blockwiselist: any = {};

  villagewiselist: any = {};

  residentwiselist: any = {};

  objresident: any = {};


  ngAfterViewInit(): void {

  }

  constructor(private CommunitService: CommunityServiceService) {

  }

  barChartMethodBlockDrug() {


    this.barChartdrug = new Chart(this.barCanvasdrug?.nativeElement, {
      type: 'bar',
      data: {
        labels: [
          'Resident Count',
          'Death',
          'Non Treaceable',
          'Visitor'
        ],


        datasets: [
          {
            label: 'Member Status',
            data: [
              this.objresident.total_population,
              this.objresident.death,
              this.objresident.nontraceable,              
              this.objresident.visitor
            ],

            backgroundColor: [

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

  SearchFilter() {
    //console.log(this.child)
    //console.log(this.child.form.value.districtmyItems)

    const Payl = this.child.PayloadDetails()

    console.log(this.child.PayloadDetails());

    this.LoadAll(Payl);
  }

  ngOnInit(): void {

    const payload = {}


    this.LoadAll(payload);
  }


  LoadAll(payload: any) {

    this.CommunitService.getGetfieldverificationTotalVerified(payload)
      .subscribe(item => {
        this.objtotalVerified = item;

        console.log(this.objtotalVerified)

      })

    this.CommunitService.getGetfieldverificationFamilyMember(payload)
      .subscribe(item => {
        this.objfamilymember = item;
        console.log(this.objfamilymember)
      })

    this.CommunitService.getGetfieldverificationDistrictWise(payload)
      .subscribe(item => {
        this.districtwiselist = item;
        console.log(this.districtwiselist)
      })

    this.CommunitService.getGetfieldverificationHUDWise(payload)
      .subscribe(item => {
        this.hudwiselist = item;
      })

    this.CommunitService.getGetfieldverificationblockWise(payload)
      .subscribe(item => {
        this.blockwiselist = item;
      })

    this.CommunitService.getGetfieldverificationvillageWise(payload)
      .subscribe(item => {
        this.villagewiselist = item;
      })


    this.CommunitService.getGetfieldverificationresidentwise(payload)
      .subscribe(item => {
        this.objresident = item;
      })




    //hudwiselist

  }

}
