import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { CommunityServiceService } from '../Services/community-service.service';

@Component({
  selector: 'app-facilityperformance',
  templateUrl: './facilityperformance.component.html',
  styleUrls: ['./facilityperformance.component.css']
})
export class FacilityperformanceComponent implements AfterViewInit {


  secondheading: string = "Facility Performance";

  @ViewChild('barCanvasdrug') barCanvasdrug: ElementRef | undefined;

  barChartdrug: any;

  facilityobj: any = {};

  facilityobjdistrictwise: any = {};

  facilityobjblockwise: any = {};

  ngAfterViewInit(): void {

  }

  constructor(private CommunitService: CommunityServiceService) {

  }

  barChartMethodBlockDrug() {


    this.barChartdrug = new Chart(this.barCanvasdrug?.nativeElement, {
      type: 'bar',
      data: {
        labels: [
          this.facilityobj[0].facility_name,
          this.facilityobj[1].facility_name,
          this.facilityobj[2].facility_name,
          this.facilityobj[3].facility_name,
          this.facilityobj[4].facility_name,
          this.facilityobj[5].facility_name,
          this.facilityobj[6].facility_name,
          this.facilityobj[7].facility_name,
          this.facilityobj[8].facility_name,
          this.facilityobj[9].facility_name

        ],


        datasets: [
          {
            label: 'Top 10 Facility Performance',
            data: [
              this.facilityobj[0].count,
              this.facilityobj[1].count,
              this.facilityobj[2].count,
              this.facilityobj[3].count,
              this.facilityobj[4].count,
              this.facilityobj[5].count,
              this.facilityobj[6].count,
              this.facilityobj[7].count,
              this.facilityobj[8].count,
              this.facilityobj[9].count],


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


  ngOnInit(): void {
    this.CommunitService.getfacilityperformance()
      .subscribe(item => {
        this.facilityobj = item;

        this.barChartMethodBlockDrug();

        //console.log(this.facilityobj)

      })


    this.CommunitService.getfacilityperformance_Dashboard()
      .subscribe(item => {
        this.facilityobjdistrictwise = item;
      })

    this.CommunitService.getfacilityperformance_block()
      .subscribe(item => {
        this.facilityobjblockwise = item;
      })

  }

}
