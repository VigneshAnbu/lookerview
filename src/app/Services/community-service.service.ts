import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DistrictWise } from '../Models/Models.DistrictWise';

@Injectable({
  providedIn: 'root'
})
export class CommunityServiceService {

  // BaseURL: string = "https://localhost:7177/";

  /*BaseURL: string = "https://localhost:44347/";*/

  BaseURL: string = "http://142.132.206.93:9025/";



  /*BaseURL: string = "https://localhost:44347/";*/

  /*BaseURL: string = "http://newanalytics.tnmtm.in/api/tnphrAnalytics/";*/

  // BaseURL: string = "http://localhost:6093/";



  constructor(private http: HttpClient) {

  }

  getblockmaster(): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'getblockmaster');
  }

  getDistrictWiseList(): Observable<DistrictWise[]> {
    return this.http.get<DistrictWise[]>(this.BaseURL + 'GetList');
  }

  getChartList(): Observable<DistrictWise[]> {
    return this.http.get<DistrictWise[]>(this.BaseURL + 'GetChart');
  }

  getChartListFilter(payload: any) {

    return this.http.post(this.BaseURL + 'GetChart', payload);
  }


  getChartList1Filter(payload: any) {

    return this.http.get(this.BaseURL + 'GetChart1', { params: payload });
  }

  getloginUser(payload: any) {

    return this.http.get(this.BaseURL + 'LoginForm', { params: payload });
  }

  

  getChartList2Filter(payload: any) {

    return this.http.get(this.BaseURL + 'GetChart2', { params: payload });
  }

  getChartList3Filter(payload: any) {

    return this.http.get(this.BaseURL + 'GetChart3', { params: payload });
  }

  getChartList4Filter(payload: any) {

    return this.http.get(this.BaseURL + 'GetChart4', { params: payload });
  }

  getChartList5Filter(payload: any) {

    return this.http.get(this.BaseURL + 'GetChart5', { params: payload });
  }

  getChartList6Filter(payload: any) {

    return this.http.get(this.BaseURL + 'GetChart6', { params: payload });
  }

  getChartList7Filter(payload: any) {

    return this.http.get(this.BaseURL + 'GetChart7', { params: payload });
  }

  getChartList8Filter(payload: any) {

    return this.http.get(this.BaseURL + 'GetChart8', { params: payload });
  }

  getChartList9Filter(payload: any) {

    return this.http.get(this.BaseURL + 'GetChart9', { params: payload });
  }




  getDistrictDrugFilter(payload: any) {
    return this.http.get(this.BaseURL + 'getdrugdistrict', { params: payload });
  }

  getDistrictDrug(): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'getdrugdistrict');
  }

  getBlockDrugFilter(payload: any) {
    return this.http.get(this.BaseURL + 'getdrugBlock', { params: payload });
  }
  getBlockmtmFilter(payload: any) {
    return this.http.get(this.BaseURL + 'GetmtmbenBlock', { params: payload });
  }

  getBlockDrug(): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'getdrugBlock');
  }

  getVillageDrugFilter(payload: any) {
    return this.http.get(this.BaseURL + 'getdrugVillage', { params: payload });
  }

  getVillageDrug(): Observable<any[]> {
    return this.http.get<DistrictWise[]>(this.BaseURL + 'getdrugVillage');
  }


  GetDistrictScreenAgeWise(): Observable<any[]> {
    return this.http.get<DistrictWise[]>(this.BaseURL + 'Getdistrictpopulation');
  }

  GetDistrictScreenAgeWiseFilter(payload: any) {
    return this.http.get(this.BaseURL + 'Getdistrictpopulation', { params: payload });
  }


  getHUDDrugFilter(payload: any) {
    return this.http.get(this.BaseURL + 'GetDrughud', { params: payload });
  }

  getHUDDrug(): Observable<any[]> {
    return this.http.get<DistrictWise[]>(this.BaseURL + 'GetDrughud');
  }



  GetDistrictPopScreenAgeWise(): Observable<any[]> {
    return this.http.get<DistrictWise[]>(this.BaseURL + 'GetHUDScreenPopulationAgeWise');
  }

  GetDistrictPopScreenAgeWiseFilter(payload: any) {
    return this.http.get(this.BaseURL + 'GetHUDScreenPopulationAgeWise', { params: payload });
  }

  gettot(): Observable<any[]> {
    return this.http.get<DistrictWise[]>(this.BaseURL + 'gettotalpopulation');
  }

  gettotFilter(payload: any) {
    return this.http.get(this.BaseURL + 'gettotalpopulation', { params: payload });
  }

  getscreening(): Observable<any[]> {
    return this.http.get<DistrictWise[]>(this.BaseURL + 'gettotalscreening');
  }

  getscreeningFilter(payload: any) {
    return this.http.get(this.BaseURL + 'gettotalscreening', { params: payload });
  }

  getscreeningind(): Observable<any[]> {
    return this.http.get<DistrictWise[]>(this.BaseURL + 'gettotalindscreening');
  }

  getscreeningindFilter(payload: any) {
    return this.http.get(this.BaseURL + 'gettotalindscreening', { params: payload });
  }

  getdrug(): Observable<any[]> {
    return this.http.get<DistrictWise[]>(this.BaseURL + 'gettotaldrug');
  }

  getdrugFilter(payload: any) {
    return this.http.get(this.BaseURL + 'gettotaldrug', { params: payload });
  }

  

  getdrugind(): Observable<any[]> {
    return this.http.get<DistrictWise[]>(this.BaseURL + 'gettotalinddrug');
  }


  getdrugindFilter(payload: any) {
    return this.http.get(this.BaseURL + 'gettotalinddrug', { params: payload });
  }


  gettotalmtmbenfvget(querystring: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'gettotalmtmbenfvget?district_id=' + querystring + '');
  }

  getmtmben(): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'gettotalmtmbenf');
  }

  getmtmbenFilter(payload: any) {
    return this.http.get(this.BaseURL + 'gettotalmtmbenf', { params: payload });
  }

  getdrugmtm(): Observable<any[]> {
    return this.http.get<DistrictWise[]>(this.BaseURL + 'getmtmdrugissues');
  }

  getdrugmtmFilter(payload: any) {
    return this.http.get(this.BaseURL + 'getmtmdrugissues', { params: payload });
  }

  getrolebased(): Observable<any[]> {
    return this.http.get<DistrictWise[]>(this.BaseURL + 'rolewisescreening');
  }

  //getrolebasedpost(): Observable<any[]> {
  //  return this.http.post<DistrictWise[]>(this.BaseURL + 'rolewisescreening');
  //}

  getrolebasedpost(payload: any) {

    return this.http.post(this.BaseURL + 'rolewisescreening', payload);
  }

  getrolebasedFilter(payload: any) {
    return this.http.get(this.BaseURL + 'rolewisescreening', { params: payload });
  }

  getDistrictmtm(): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'getdistrictmtm');
  }

  getDistrictmtmFilter(payload: any) {
    return this.http.get(this.BaseURL + 'getdistrictmtm', { params: payload });
  }

  getHUDmtm(): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'gethudmtm');
  }

  getHUDmtmFilter(payload: any) {
    return this.http.get(this.BaseURL + 'GetDrughud', { params: payload });
  }

  getFacilityScreeningFilter(payload: any) {
    return this.http.get(this.BaseURL + 'GetFacilityScreeningFilter', { params: payload });
  }

  getReferredFacilityFilter(payload: any) {
    return this.http.get(this.BaseURL + 'GetReferredFacility', { params: payload });
  }


  
  

  getdiagnosisreport(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'diagnosisreport');
  }
  getfacilityreport(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetOPDashboard');
  }

  getfacilityperformance(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetFacilityScreening');
  }

  getfacilityperformance_Dashboard(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'getuserperdistrictwise');
  }

  getfacilityperformance_block(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'getuserperBlockwise');
  }

  getpopulationkpi_dashboard(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getpopulationkpidashboard');
  }

  getpopulationkpi_district(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetKPIDistrictWise');
  }

  getpopulationkpi_hud(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetKPIHUDWise');
  }


  /*Service Monitoring Start*/

  getDrugQuantity(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'getDrugQuantity');
  }

  getLabTestsinlast(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'getLabTestsinlast');
  }

  getStreetswithundelivered(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'getStreetswithundelivered');
  }

  getServiceMon_Noofstreetswithservicesdelivered(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'getServiceMon_Noofstreetswithservicesdelivered');
  }

  getservicemon_streetswithundelivered90(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'getservicemon_streetswithundelivered90');
  }

  getServiceMon_ScreeningPeruser(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'getServiceMon_ScreeningPeruser');
  }

  getServiceMon_StreetwithScreeningcount(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'getServiceMon_StreetwithScreeningcount');
  }


  GetServicesMonitoringDistrictWise(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetServicesMonitoringDistrictWise');
  }

  GetServicesMonitoringHUDWise(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetServicesMonitoringHUDWise');
  }

  GetServicesMonitoringBlockWise(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetServicesMonitoringBlockWise');
  }



  /*Data Quality Start*/

  GetFamiliesstreetunallocated(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetFamiliesstreetunallocated');
  }

  GetFamiliesfacilityunallocated(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetFamiliesfacilityunallocated');
  }

  GetFamilieswithnull(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetFamilieswithnull');
  }

  GetFamilieswithmore(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetFamilieswithmore');
  }

  Getmemberswithstreetsunallocated(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getmemberswithstreetsunallocated');
  }

  Getmemberswithfacilityunallocated(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getmemberswithfacilityunallocated');
  }

  Getmemberswithaadhaar_number(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getmemberswithaadhaar_number');
  }

  Getverifiedmembers(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getverifiedmembers');
  }

  Getstreetswithfacilityunallocated(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getstreetswithfacilityunallocated');
  }

  Getshopswithnomappinfstreets(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getshopswithnomappinfstreets');
  }

  Getmembersinhistorynothavingscreening(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getmembersinhistorynothavingscreening');
  }

  Getmembershavingscreeningnothavinghistory(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getmembershavingscreeningnothavinghistory');
  }

  Getmobilenumbermorethan(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getmobilenumbermorethan');
  }

  Getmemberswithmobilenumber(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getmemberswithmobilenumber');
  }

  Getpopulationmappedwithstreet(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getpopulationmappedwithstreet');
  }

  GetMembersmappedtoUnallocatedfacility(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetMembersmappedtoUnallocatedfacility');
  }

  GetMemberswithstreetasUnAllocated(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetMemberswithstreetasUnAllocated');
  }


  getUserPerformanceDistrict(): Observable<any> {
    return this.http.get(this.BaseURL + 'getuserperstate');
  }



  /*Data Quality End*/


  /*PBS Screening start*/

  getGetdistrictpbs(payload: any) {

    return this.http.post(this.BaseURL + 'Getdistrictpbs', payload);
  }

  getGethudpbs(payload: any) {

    return this.http.post(this.BaseURL + 'Gethudpbs', payload);
  }

  getGetblockpbs(payload: any) {

    return this.http.post(this.BaseURL + 'Getblockpbs', payload);
  }

  getGetvillagepbs(payload: any) {

    return this.http.post(this.BaseURL + 'Getvillagepbs', payload);
  }

  /*PBS Screening End*/



  /*Field Verification start*/


  getGetfieldverificationTotalVerified(payload: any) {

    return this.http.get(this.BaseURL + 'GetfieldverificationTotalVerified', { params: payload });
  }

  getGetfieldverificationFamilyMember(payload: any) {

    return this.http.get(this.BaseURL + 'GetfieldverificationFamilyMember', { params: payload });
  }

  getGetfieldverificationDistrictWise(payload: any) {

    return this.http.get(this.BaseURL + 'GetfieldverificationDistrictWise', { params: payload });
  }

  getGetfieldverificationHUDWise(payload: any) {

    return this.http.get(this.BaseURL + 'GetfieldverificationHUDWise', { params: payload });
  }

  getGetfieldverificationblockWise(payload: any) {

    return this.http.get(this.BaseURL + 'GetfieldverificationblockWise', { params: payload });
  }

  getGetfieldverificationvillageWise(payload: any) {

    return this.http.get(this.BaseURL + 'GetfieldverificationvillageWise', { params: payload });
  }

  getGetfieldverificationresidentwise(payload: any) {

    return this.http.get(this.BaseURL + 'Getfieldverificationresidentwise', { params: payload });
  }


  /*Field Verification End*/

  /*mtm beneficiaries start*/
  getdistrictmtmkpi(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'getmtmkidistrict');
  }

  getht(distlist:any): Observable<any[]> {
    return this.http.post<any[]>(this.BaseURL + 'getht',distlist);
  }
  getdt(distlist: any): Observable<any[]> {
    return this.http.post<any[]>(this.BaseURL + 'getdt', distlist);
  }
  gethtdt(distlist: any): Observable<any[]> {
    return this.http.post<any[]>(this.BaseURL + 'gethtdt', distlist);
  }
  getpallative(distlist: any): Observable<any[]> {
    return this.http.post<any[]>(this.BaseURL + 'getpallative', distlist);
  }
  getphysio(distlist: any): Observable<any[]> {
    return this.http.post<any[]>(this.BaseURL + 'getphysio', distlist);
  }
  getcapd(distlist: any): Observable<any[]> {
    return this.http.post<any[]>(this.BaseURL + 'getcapd', distlist);
  }
  mtmkpiscreening(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'mtmkpiscreening');
  }

  gethtblock(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'gethtblock');
  }
  getdtblock(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'getdtblock');
  }
  gethtdtblock(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'gethtdtblock');
  }
  getpallativeblock(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'getpallativeblock');
  }
  getphysioblock(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'getphysioblock');
  }
  getcapdblock(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'getcapdblock');
  }
  mtmkpiscreeningblock(): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'mtmkpiscreeningblock');
  }
  getblockmtm(): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'getblockmtm');
  }
  /*mtm beneficiaries end*/


  /*Filter serivces*/

  getdistrictmaster(): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'getdistrictmasterlooker');
  }

  gethudmasterlooker(): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'gethudmasterlooker');
  }

  getblockmasterlooker(): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'getblockmasterlooker');
  }

  getrolemasterlooker(): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'getrolemasterlooker');
  }

  getdirectoratemasterlooker(): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'getdirectoratemasterlooker');
  }

  getfacilitymasterlooker(querystring: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'getfacilitymasterlooker?facility_name=' + querystring + '');
  }

  getvillagemasterlooker(querystring: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'getvillagemasterlooker?village_name=' + querystring +'');
  }

  getPopulationCount(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetPopulationCount', { params: payload });
  }
  getTotalScreeningCount(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetTotalScreeningCount', { params: payload });
  }
  getConfirmedCasesCount(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetConfirmedCasesCount', { params: payload });
  }
  getDiabetesvsHypertensionvsBoth(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetDiabetesvsHypertensionvsBoth', { params: payload });
  }
  getConfirmedControlledUncontrolledDiabetes(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetConfirmedControlledUncontrolledDiabetes', { params: payload });
  }
  getConfirmedControlledUncontrolledHypertension(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetConfirmedControlledUncontrolledHypertension', { params: payload });
  }
  getConfirmedControlledUncontrolledBoth(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetConfirmedControlledUncontrolledBoth', { params: payload });
  }
  getDistrictWisePopulation(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetDistrictWisePopulation', { params: payload });
  }
  getHudWisePopulation(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetHudWisePopulation', { params: payload });
  }
  getBlockWisePopulation(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetBlockWisePopulation', { params: payload });
  }
  getVillageWisePopulation(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetVillageWisePopulation', { params: payload });
  }
}