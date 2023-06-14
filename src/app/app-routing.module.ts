import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './Community/community/community.component';
import { FacilityperformanceComponent } from './facilityperformance/facilityperformance.component';
import { MtmbeneficiariesComponent } from './mtmbeneficiaries/mtmbeneficiaries.component';
import { MtmperformanceComponent } from './MTMPerformance/mtmperformance/mtmperformance.component';
import { PopulationdashboardComponent } from './populationdashboard/populationdashboard.component';
import { PopulationdashboardkpiComponent } from './populationdashboardkpi/populationdashboardkpi.component';

const routes: Routes = [];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
