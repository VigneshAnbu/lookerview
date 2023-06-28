import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CommunityServiceService } from '../Services/community-service.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  constructor(
    private CommunitService: CommunityServiceService,
    private fb: FormBuilder
  ) {}

  districtlist: any[] = [];
  hudlist: any[] = [];
  blocklist: any[] = [];
  rolelist: any[] = [];
  directoratelist: any[] = [];
  villagelist: any[] = [];
  facilitylist: any[] = [];
  institutiondistrictlist: any[] = [];
  institutionhudlist: any[] = [];
  institutionblocklist: any[] = [];
  Institutionfacilitylist: any[] = [];
  communityBlockTypeList: any[] = [
    {
      id: 'Corporation',
      name: 'Corporation'
    },
    {
      id: 'Municipality',
      name: 'Municipality'
    },
    {
      id: 'Rural Block',
      name: 'Rural Block'
    },
    {
      id: 'Others',
      name: 'Others'
    },
  ];
  communityAgeList = [
    {
      name: '1'
    }
  ];
  communityGenderList = [
    {
      name: 'Male'
    },
    {
      name: 'Female'
    },
    {
      name: 'Other'
    },
  ];
  districtsettings: IDropdownSettings = {};
  institutiondistrictsettings: IDropdownSettings = {};
  hudsettings: IDropdownSettings = {};
  institutionhudsettings: IDropdownSettings = {};
  blocksettings: IDropdownSettings = {};
  institutionblocksettings: IDropdownSettings = {};
  rolesettings: IDropdownSettings = {};
  directoratesettings: IDropdownSettings = {};
  villagesettings: IDropdownSettings = {};
  facilitysettings: IDropdownSettings = {};
  institutionfacilitysettings: IDropdownSettings = {};
  communityBlockType: IDropdownSettings = {
    idField: 'id',
    textField: 'name',
    allowSearchFilter: true,
  };
  communityAgeSetting: IDropdownSettings = {
    idField: 'name',
    textField: 'name',
    allowSearchFilter: true,
  }
  communityGenderSetting: IDropdownSettings = {
    idField: 'name',
    textField: 'name',
    allowSearchFilter: true,
  }
  form!: FormGroup;
  districtselectedItems: any[] = [];
  institutiondistrictselectedItems: any[] = [];
  hudselectedItems: any[] = [];
  institutionhudselectedItems: any[] = [];
  blockselectedItems: any[] = [];
  institutionblockselectedItems: any[] = [];
  roleselectedItems: any[] = [];
  directorateselectedItems: any[] = [];
  villageselectedItems: any[] = [];
  facilityselectedItems: any[] = [];
  institutionfacilityselectedItems: any[] = [];
  @Input() dphDashboard: boolean = false;
  @Input() phrPerformanceDashboard: boolean = false;
  @Input() showSearch: boolean = false;
  @Output() searchFilter: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.form = this.fb.group({
      districtmyItems: [],
      institutiondistrictmyItems: [],
      hudmyItems: [],
      institutionhudmyItems: [],
      blockmyItems: [],
      institutionblockmyItems: [],
      communityBlockTypeKey: [],
      communityAgeKey: [],
      communityGenderKey: [],
      rolemyItems: [],
      directoratemyItems: [],
      villagemyItems: [],
      facilitymyItems: [],
      institutionfacilitymyItems: [],
      searchfacility: '',
      searchvillage: '',
      searchinstitutionfacility: '',
    });

    this.CommunitService.getdistrictmaster().subscribe((item) => {
      this.districtlist = item.districtWise;
      this.districtsettings = {
        idField: 'district_id',
        textField: 'district_name',
        allowSearchFilter: true,
      };
    });

    this.CommunitService.getdistrictmaster().subscribe((item) => {
      this.institutiondistrictlist = item.districtWise;
      this.institutiondistrictsettings = {
        idField: 'district_id',
        textField: 'district_name',
        allowSearchFilter: true,
      };
    });

    this.CommunitService.gethudmasterlooker().subscribe((item) => {
      this.hudlist = item.hudWise;
      this.hudsettings = {
        idField: 'hud_id',
        textField: 'hud_name',
        allowSearchFilter: true,
      };
    });

    this.CommunitService.gethudmasterlooker().subscribe((item) => {
      this.institutionhudlist = item.hudWise;
      this.institutionhudsettings = {
        idField: 'hud_id',
        textField: 'hud_name',
        allowSearchFilter: true,
      };
    });

    this.CommunitService.getblockmasterlooker().subscribe((item) => {
      this.blocklist = item.blockWise;
      this.blocksettings = {
        idField: 'block_id',
        textField: 'block_name',
        allowSearchFilter: true,
      };
    });

    this.CommunitService.getblockmasterlooker().subscribe((item) => {
      this.institutionblocklist = item.blockWise;
      this.institutionblocksettings = {
        idField: 'block_id',
        textField: 'block_name',
        allowSearchFilter: true,
      };
    });

    this.CommunitService.getrolemasterlooker().subscribe((item) => {
      this.rolelist = item;
      this.rolesettings = {
        idField: 'role_id',
        textField: 'role_name',
        allowSearchFilter: true,
      };
    });

    this.CommunitService.getdirectoratemasterlooker().subscribe((item) => {
      this.directoratelist = item;
      this.directoratesettings = {
        idField: 'directorate_id',
        textField: 'directorate_name',
        allowSearchFilter: true,
      };
    });
  }

  PayloadDetails() {
    var DistrictParam = '';
    var HudParam = '';
    var blockParam = '';
    var FacilityParam = '';
    var InstitutiondistrictParam = '';
    var InstitutionhudParam = '';
    var InstitutionblockParam = '';
    var communityBlockTyParam = '';
    var communityAgeParam = '';
    var communityGenderParam = '';
    var villageParam = '';
    var DirectorateParam = '';
    var RoleParam = '';
    var InstitutionfacilityParam = '';

    var payload: any = {};

    if (
      this.form.value.districtmyItems != '' &&
      this.form.value.districtmyItems != null
    ) {
      for (var i = 0; this.form.value.districtmyItems.length > i; i++) {
        DistrictParam =
          DistrictParam + this.form.value.districtmyItems[i].district_id + ',';
      }
      payload['district_id'] = DistrictParam.substring(
        0,
        DistrictParam.length - 1
      );
    }

    if (
      this.form.value.hudmyItems != '' &&
      this.form.value.hudmyItems != null
    ) {
      for (var i = 0; this.form.value.hudmyItems.length > i; i++) {
        HudParam = HudParam + this.form.value.hudmyItems[i].hud_id + ',';
      }
      payload['hud_id'] = HudParam.substring(0, HudParam.length - 1);
    }

    if (
      this.form.value.blockmyItems != '' &&
      this.form.value.blockmyItems != null
    ) {
      for (var i = 0; this.form.value.blockmyItems.length > i; i++) {
        blockParam =
          blockParam + this.form.value.blockmyItems[i].block_id + ',';
      }
      payload['block_id'] = blockParam.substring(0, blockParam.length - 1);
    }

    if (
      this.form.value.facilitymyItems != '' &&
      this.form.value.facilitymyItems != null
    ) {
      for (var i = 0; this.form.value.facilitymyItems.length > i; i++) {
        FacilityParam =
          FacilityParam + this.form.value.facilitymyItems[i].facility_id + ',';
      }
      payload['facility_id'] = FacilityParam.substring(
        0,
        FacilityParam.length - 1
      );
    }

    if (
      this.form.value.institutiondistrictmyItems != '' &&
      this.form.value.institutiondistrictmyItems != null
    ) {
      for (
        var i = 0;
        this.form.value.institutiondistrictmyItems.length > i;
        i++
      ) {
        InstitutiondistrictParam =
          InstitutiondistrictParam +
          this.form.value.institutiondistrictmyItems[i].district_id +
          ',';
      }

      payload['indistrict_id'] = InstitutiondistrictParam.substring(
        0,
        InstitutiondistrictParam.length - 1
      );
    }

    if (
      this.form.value.institutionhudmyItems != '' &&
      this.form.value.institutionhudmyItems != null
    ) {
      for (var i = 0; this.form.value.institutionhudmyItems.length > i; i++) {
        InstitutionhudParam =
          InstitutionhudParam +
          this.form.value.institutionhudmyItems[i].hud_id +
          ',';
      }

      payload['inhud_id'] = InstitutionhudParam.substring(
        0,
        InstitutionhudParam.length - 1
      );
    }

    if (
      this.form.value.institutionblockmyItems != '' &&
      this.form.value.institutionblockmyItems != null
    ) {
      for (var i = 0; this.form.value.institutionblockmyItems.length > i; i++) {
        InstitutionblockParam =
          InstitutionblockParam +
          this.form.value.institutionblockmyItems[i].block_id +
          ',';
      }

      payload['inblock_id'] = InstitutionblockParam.substring(
        0,
        InstitutionblockParam.length - 1
      );
    }
    if (
      this.form.value.communityBlockTypeKey != '' &&
      this.form.value.communityBlockTypeKey != null
    ) {
      for (var i = 0; this.form.value.communityBlockTypeKey.length > i; i++) {
        communityBlockTyParam =
          communityBlockTyParam +
          this.form.value.communityBlockTypeKey[i].name +
          ',';
      }

      payload['block_type'] = communityBlockTyParam.substring(
        0,
        communityBlockTyParam.length - 1
      );
    }
    if (
      this.form.value.communityAgeKey != '' &&
      this.form.value.communityAgeKey != null
    ) {
      for (var i = 0; this.form.value.communityAgeKey.length > i; i++) {
        communityAgeParam =
          communityAgeParam +
          this.form.value.communityAgeKey[i].name +
          ',';
      }

      payload['age'] = communityAgeParam.substring(
        0,
        communityAgeParam.length - 1
      );
    }
    if (
      this.form.value.communityGenderKey != '' &&
      this.form.value.communityGenderKey != null
    ) {
      for (var i = 0; this.form.value.communityGenderKey.length > i; i++) {
        communityGenderParam =
          communityGenderParam +
          this.form.value.communityGenderKey[i].name +
          ',';
      }

      payload['gender'] = communityGenderParam.substring(
        0,
        communityGenderParam.length - 1
      );
    }
    if (
      this.form.value.villagemyItems != '' &&
      this.form.value.villagemyItems != null
    ) {
      for (var i = 0; this.form.value.villagemyItems.length > i; i++) {
        villageParam =
          villageParam + this.form.value.villagemyItems[i].village_id + ',';
      }
      payload['village_id'] = villageParam.substring(
        0,
        villageParam.length - 1
      );
    }

    if (
      this.form.value.directoratemyItems != '' &&
      this.form.value.directoratemyItems != null
    ) {
      for (var i = 0; this.form.value.directoratemyItems.length > i; i++) {
        DirectorateParam =
          DirectorateParam +
          this.form.value.directoratemyItems[i].directorate_id +
          ',';
      }
      payload['directorate_id'] = DirectorateParam.substring(
        0,
        DirectorateParam.length - 1
      );
    }

    if (
      this.form.value.rolemyItems != '' &&
      this.form.value.rolemyItems != null
    ) {
      for (var i = 0; this.form.value.rolemyItems.length > i; i++) {
        RoleParam = RoleParam + this.form.value.rolemyItems[i].role_id + ',';
      }

      payload['role'] = RoleParam.substring(0, RoleParam.length - 1);
    }

    if (
      this.form.value.institutionfacilitymyItems != '' &&
      this.form.value.institutionfacilitymyItems != null
    ) {
      for (
        var i = 0;
        this.form.value.institutionfacilitymyItems.length > i;
        i++
      ) {
        InstitutionfacilityParam =
          InstitutionfacilityParam +
          this.form.value.institutionfacilitymyItems[i].facility_id +
          ',';
      }
      payload['infacility_id'] = InstitutionfacilityParam.substring(
        0,
        InstitutionfacilityParam.length - 1
      );
    }

    //const payload =

    //{
    //  "district_id": DistrictParam,
    //  "hud_id": HudParam,
    //  "block_id": blockParam,
    //  "facility_id": FacilityParam,
    //  "indistrict_id": InstitutiondistrictParam,
    //  "inhud_id": InstitutionhudParam,
    //  "inblock_id": InstitutionblockParam,
    //  "village_id": villageParam,
    //  "directorate_id": DirectorateParam,
    //  "role": RoleParam,
    //  "infacility_id": InstitutionfacilityParam

    //}

    return payload;
  }

  Search: any = '';

  onSearch(evt: any) {
    //console.log(evt.target.value);
    this.villagelist = [];
    var querystring = evt.target.value;
    this.CommunitService.getvillagemasterlooker(querystring).subscribe(
      (item) => {
        this.villagelist = item;
        //console.log(this.villagelist)

        this.villagesettings = {
          idField: 'village_id',
          textField: 'village_name',
          allowSearchFilter: true,
        };
      }
    );
  }

  getformdata() {
    return 'I am so cool';
  }

  searchfacility: any = '';

  onSearchFacility(evt: any) {
    //console.log(evt.target.value);
    this.facilitylist = [];
    var querystring = evt.target.value;
    this.CommunitService.getfacilitymasterlooker(querystring).subscribe(
      (item) => {
        this.facilitylist = item;
        //console.log(this.villagelist)

        this.facilitysettings = {
          idField: 'facility_id',
          textField: 'facility_name',
          allowSearchFilter: true,
        };
      }
    );
  }

  InstitutionFacility: any = '';

  onSearchInstitutionFacility(evt: any) {
    //console.log(evt.target.value);
    this.Institutionfacilitylist = [];
    var querystring = evt.target.value;
    this.CommunitService.getfacilitymasterlooker(querystring).subscribe(
      (item) => {
        this.Institutionfacilitylist = item;
        //console.log(this.villagelist)

        this.institutionfacilitysettings = {
          idField: 'facility_id',
          textField: 'facility_name',
          allowSearchFilter: true,
        };
      }
    );
  }
}
