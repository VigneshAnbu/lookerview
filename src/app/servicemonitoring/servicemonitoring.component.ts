import { Component } from '@angular/core';
import { CommunityServiceService } from '../Services/community-service.service';

@Component({
  selector: 'app-servicemonitoring',
  templateUrl: './servicemonitoring.component.html',
  styleUrls: ['./servicemonitoring.component.css']
})
export class ServicemonitoringComponent {
  constructor(private CommunitService: CommunityServiceService) {


  }

  objDrugQuantity: any = {};

  objLabTestsinlast: any = {};

  objStreetswithundelivered: any = {};

  objServiceMon_Noofstreetswithservicesdelivered: any = {};

  objservicemon_streetswithundelivered90: any = {};

  objServiceMon_ScreeningPeruser: any = {};

  objServiceMon_StreetwithScreeningcount: any = {};

  objServicesMonitoringDistrictWise: any = {};

  objServicesMonitoringHUDWise: any = {};

  objServicesMonitoringBlockWise: any = {};

  ngOnInit(): void {
    this.CommunitService.getDrugQuantity()
      .subscribe(item => {
        this.objDrugQuantity = item;

        console.log(this.objDrugQuantity)

      })

    this.CommunitService.getLabTestsinlast()
      .subscribe(item => {
        this.objLabTestsinlast = item;

        console.log(this.objLabTestsinlast)

      })


    this.CommunitService.getStreetswithundelivered()
      .subscribe(item => {
        this.objStreetswithundelivered = item;

        console.log(this.objStreetswithundelivered)
      })

    this.CommunitService.getServiceMon_Noofstreetswithservicesdelivered()
      .subscribe(item => {
        this.objServiceMon_Noofstreetswithservicesdelivered = item;

        console.log(this.objServiceMon_Noofstreetswithservicesdelivered)
      })

    this.CommunitService.getservicemon_streetswithundelivered90()
      .subscribe(item => {
        this.objservicemon_streetswithundelivered90 = item;

        console.log(this.objservicemon_streetswithundelivered90)
      })

    this.CommunitService.getServiceMon_ScreeningPeruser()
      .subscribe(item => {
        this.objServiceMon_ScreeningPeruser = item;

        console.log(this.objServiceMon_ScreeningPeruser)
      })


    this.CommunitService.getServiceMon_StreetwithScreeningcount()
      .subscribe(item => {
        this.objServiceMon_StreetwithScreeningcount = item;
      })

    this.CommunitService.GetServicesMonitoringDistrictWise()
      .subscribe(item => {
        this.objServicesMonitoringDistrictWise = item;
      })


    this.CommunitService.GetServicesMonitoringHUDWise()
      .subscribe(item => {
        this.objServicesMonitoringHUDWise = item;
      })

    this.CommunitService.GetServicesMonitoringBlockWise()
      .subscribe(item => {
        this.objServicesMonitoringBlockWise = item;
      })

  }

}
