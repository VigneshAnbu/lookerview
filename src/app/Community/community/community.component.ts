import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DistrictWise } from '../../Models/Models.DistrictWise';
import { CommunityServiceService } from '../../Services/community-service.service';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements AfterViewInit {



  canvas: any;
  ctx: any;
  @ViewChild('pieCanvas') pieCanvas!: { nativeElement: any };

  pieChart: any;


  ngAfterViewInit(): void {
    
  }

  pieChartBrowser(): void {
    this.canvas = this.pieCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    this.pieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: ['High Risk', 'Low Risk', 'Medium Risk', 'Normal'],
        datasets: [
          {
            backgroundColor: [
              '#2ecc71',
              '#3498db',
              '#95a5a6',
              '#9b59b6',
            ],
            data: [this.distobj.high, this.distobj.low, this.distobj.medium, this.distobj.normal ],
          },
        ],
      },
    });
  }

    
  distobj: any = {};
  //distobj: DistrictWise[] = [];

  constructor(private CommunitService: CommunityServiceService) {
  }

  ngOnInit(): void {



    

    //this.CommunitService.getDistrictWiseList()
    //  .subscribe({
    //    next: distobj => {
    //      console.log(distobj);
    //    },
    //    error: (Response) => {
    //      console.log(Response);
    //    }
    //  })
    this.CommunitService.getDistrictWiseList()
      .subscribe(item => {
        this.distobj = item;
        console.log(this.distobj)

        this.pieChartBrowser();

      })


    
   

  }



}
