import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunityComponent } from './Community/community/community.component';
import { MtmperformanceComponent } from './MTMPerformance/mtmperformance/mtmperformance.component';
import { PopulationdashboardComponent } from './populationdashboard/populationdashboard.component';
import { MtmbeneficiariesComponent } from './mtmbeneficiaries/mtmbeneficiaries.component';
import { FacilityperformanceComponent } from './facilityperformance/facilityperformance.component';
import { PopulationdashboardkpiComponent } from './populationdashboardkpi/populationdashboardkpi.component';
import { FiltersComponent } from './filters/filters.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FieldcomponentComponent } from './fieldcomponent/fieldcomponent.component';
import { PbsscreeningComponent } from './pbsscreening/pbsscreening.component';
import { DataqualityComponent } from './dataquality/dataquality.component';
import { UserperformanceComponent } from './userperformance/userperformance.component';
import { LoginComponent } from './login/login.component';
import { ServicemonitoringComponent } from './servicemonitoring/servicemonitoring.component';
import { DphdashboardComponent } from './dphdashboard/dphdashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PhrperformanceComponent } from './phrperformance/phrperformance.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'Mtmperformance',
    component: MtmperformanceComponent,
  },
  {
    path: 'Community',
    component: CommunityComponent,
  },
  {
    path: 'Populationdashboard',
    component: PopulationdashboardComponent,
  },
  {
    path: 'Mtmbeneficiaries',
    component: MtmbeneficiariesComponent,
  },
  {
    path: 'Facilityperformance',
    component: FacilityperformanceComponent,
  },
  {
    path: 'Populationdashboardkpi',
    component: PopulationdashboardkpiComponent,
  },
  {
    path: 'FieldVerification',
    component: FieldcomponentComponent,
  },
  {
    path: 'Pbsscreening',
    component: PbsscreeningComponent,
  },
  {
    path: 'DataQuality',
    component: DataqualityComponent,
  },
  {
    path: 'UserPeroformance',
    component: UserperformanceComponent,
  },
  {
    path: 'Servicemonitoring',
    component: ServicemonitoringComponent,
  },
  {
    path: 'dphdashboard',
    component: DphdashboardComponent,
  },
  {
    path: 'phrperformancedashboard',
    component: PhrperformanceComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CommunityComponent,
    MtmperformanceComponent,
    PopulationdashboardComponent,
    MtmbeneficiariesComponent,
    FacilityperformanceComponent,
    PopulationdashboardkpiComponent,
    FiltersComponent,
    FieldcomponentComponent,
    PbsscreeningComponent,
    DataqualityComponent,
    UserperformanceComponent,
    LoginComponent,
    ServicemonitoringComponent,
    DphdashboardComponent,
    PhrperformanceComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
