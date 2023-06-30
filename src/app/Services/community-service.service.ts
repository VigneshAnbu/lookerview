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

  getpopulationkpi_dashboard(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getpopulationkpidashboard',{params: payload});
  }

  getpopulationkpi_district(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetKPIDistrictWise',{params: payload});
  }

  getpopulationkpi_hud(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetKPIHUDWise',{params: payload});
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

  GetFamiliesstreetunallocated(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetFamiliesstreetunallocated', { params: payload });
  }

  GetFamiliesfacilityunallocated(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetFamiliesfacilityunallocated', { params: payload });
  }

  GetFamilieswithnull(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetFamilieswithnull', { params: payload });
  }

  GetFamilieswithmore(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetFamilieswithmore', { params: payload });
  }

  Getmemberswithstreetsunallocated(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getmemberswithstreetsunallocated', { params: payload });
  }

  Getmemberswithfacilityunallocated(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getmemberswithfacilityunallocated', { params: payload });
  }

  Getmemberswithaadhaar_number(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getmemberswithaadhaar_number', { params: payload });
  }

  Getverifiedmembers(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getverifiedmembers', { params: payload });
  }

  Getstreetswithfacilityunallocated(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getstreetswithfacilityunallocated', { params: payload });
  }

  Getshopswithnomappinfstreets(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getshopswithnomappinfstreets', { params: payload });
  }

  Getmembersinhistorynothavingscreening(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getmembersinhistorynothavingscreening', { params: payload });
  }

  Getmembershavingscreeningnothavinghistory(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getmembershavingscreeningnothavinghistory', { params: payload });
  }

  Getmobilenumbermorethan(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getmobilenumbermorethan', { params: payload });
  }

  Getmemberswithmobilenumber(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getmemberswithmobilenumber', { params: payload });
  }

  Getpopulationmappedwithstreet(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'Getpopulationmappedwithstreet', { params: payload });
  }

  GetMembersmappedtoUnallocatedfacility(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetMembersmappedtoUnallocatedfacility', { params: payload });
  }

  GetMemberswithstreetasUnAllocated(payload?: any): Observable<any[]> {
    return this.http.get<any[]>(this.BaseURL + 'GetMemberswithstreetasUnAllocated', { params: payload });
  }

  /*Data Quality End*/

  getUserPerformanceDistrict(): Observable<any> {
    return this.http.get(this.BaseURL + 'getuserperstate');
  }


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

  // DPH Dashboard 
  
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
  getStaffMtmPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetStaffMTMPhrPer', { params: payload });
  }
  getStaffHealthPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetStaffHealthPhrPer', { params: payload });
  }
  getPHRMTMPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetPHRMTMPhrPer', { params: payload });
  }
  getPHRHealthPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetPHRHealthPhrPer', { params: payload });
  }
  
  // PHR Performance Dashboard
  getTotalPopulationCountPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetTotalPopulationCountPhrPer', { params: payload });
  }
  getIndividualScreenedGenderWisePhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetIndividualScreenedGenderWisePhrPer', { params: payload });
  }
  getMTMTargetUniqueScreenedPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetMTMTargetUniqueScreenedPhrPer', { params: payload });
  }
  getFamilyResidentailStatusPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetFamilyResidentailStatusPhrPer', { params: payload });
  }
  getMembersAddedPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetMembersAddedPhrPer', { params: payload });
  }
  getFamiliesAddedPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetFamiliesAddedPhrPer', { params: payload });
  }
  getFamiliesUpdatedPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetFamiliesUpdatedPhrPer', { params: payload });
  }
  getPopulationGivenConsentPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetPopulationGivenConsentPhrPer', { params: payload });
  }
  getScreenedOnlyOnceAndMultipleTimesPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetScreenedOnlyOnceAndMultipleTimesPhrPer', { params: payload });
  }
  getNCDTargetUniqueScreenedPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetNCDTargetUniqueScreenedPhrPer', { params: payload });
  }
  getPopulationMappedStreetsPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetPopulationMappedStreetsPhrPer', { params: payload });
  }
  getCMCHISBeneficiariesPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetCMCHISBeneficiariesPhrPer', { params: payload });
  }
  getCongenitalAnomalyPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetCongenitalAnomalyPhrPer', { params: payload });
  }
  getScreenedLastSevenDaysPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetScreenedLastSevenDaysPhrPer', { params: payload });
  }
  getSchoolTargetUniqueScreenedPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetSchoolTargetUniqueScreenedPhrPer', { params: payload });
  }
  getAadhaarLinkedMembersPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetAadhaarLinkedMembersPhrPer', { params: payload });
  }
  getUDIDLinkedMembersPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetUDIDLinkedMembersPhrPer', { params: payload });
  }
  getDisabilityBeneficiariesPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetDisabilityBeneficiariesPhrPer', { params: payload });
  }
  getIndividualScreeningsPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetIndividualScreeningsPhrPer', { params: payload });
  }
  getIndividualReceivedDrugsPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetIndividualReceivedDrugsPhrPer', { params: payload });
  }
  getTotalConfirmedMTMBeneficiaryPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetTotalConfirmedMTMBeneficiaryPhrPer', { params: payload });
  }
  getFacilityWiseScreeningPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetFacilityWiseScreeningPhrPer', { params: payload });
  }
  getPopulationRDMNDStatusPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetPopulationRDMNDStatusPhrPer', { params: payload });
  }
  getMTMBeneficiariesPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetMTMBeneficiariesPhrPer', { params: payload });
  }
  getPBSConditionScreeningPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetPBSConditionScreeningPhrPer', { params: payload });
  }
  getPopulationVerifiedNonVerifiedStatusPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetPopulationVerifiedNonVerifiedStatusPhrPer', { params: payload });
  }
  getIndividualScreenedAgeWisePhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetIndividualScreenedAgeWisePhrPer', { params: payload });
  }
  getLabTestPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetLabTestPhrPer', { params: payload });
  }
  getScreenedVillageTypeWisePhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetScreenedVillageTypeWisePhrPer', { params: payload });
  }
  getReferredSplitUpPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetReferredSplitUpPhrPer', { params: payload });
  }
  getUHCConditionScreeningPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetUHCConditionScreeningPhrPer', { params: payload });
  }
  getDrugsIssuedPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetDrugsIssuedPhrPer', { params: payload });
  }
  getRoleBasedScreeningPhrPer(payload: any): Observable<any> {
    return this.http.get<any>(this.BaseURL + 'GetRoleBasedScreeningPhrPer', { params: payload });
  }
}