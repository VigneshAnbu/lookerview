import { Component, ViewChild } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { CommunityServiceService } from '../Services/community-service.service';

@Component({
  selector: 'app-mtmbeneficiaries',
  templateUrl: './mtmbeneficiaries.component.html',
  styleUrls: ['./mtmbeneficiaries.component.css']
})
export class MtmbeneficiariesComponent {

  @ViewChild(FiltersComponent) child !: FiltersComponent;

  districtlist: any = []
  blocklist: any = []
  //facilitylist: any = []
  constructor(private CommunitService: CommunityServiceService) {
  }
  ngOnInit(): void {
    this.CommunitService.getdistrictmtmkpi()
      .subscribe(item => {
        this.districtlist = item;

        this.CommunitService.getht(this.districtlist)
          .subscribe(item => {
            var disl = item;
            for (var i = 0; i < disl.length; i++)
              for (var j = 0; j < this.districtlist.length; j++)
                if (disl[i].district_id == this.districtlist[j].district_id) {
                  console.log(disl[i].district_id)
                  console.log(this.districtlist[j])
                  this.districtlist[j].ht = disl[i].ht;
                }
            this.loadblockwisedata();
          });
        this.CommunitService.getdt(this.districtlist)
          .subscribe(item => {
            var disl = item;
            for (var i = 0; i < disl.length; i++)
              for (var j = 0; j < this.districtlist.length; j++)
                if (disl[i].district_id == this.districtlist[j].district_id)
                  this.districtlist[j].dt = disl[i].dt;
          })
        this.CommunitService.gethtdt(this.districtlist)
          .subscribe(item => {
            var disl = item;
            for (var i = 0; i < disl.length; i++)
              for (var j = 0; j < this.districtlist.length; j++)
                if (disl[i].district_id == this.districtlist[j].district_id)
                  this.districtlist[j].htdt = disl[i].htdt;
          })
        this.CommunitService.getpallative(this.districtlist)
          .subscribe(item => {
            var disl = item;
            for (var i = 0; i < disl.length; i++)
              for (var j = 0; j < this.districtlist.length; j++)
                if (disl[i].district_id == this.districtlist[j].district_id)
                  this.districtlist[j].pallative = disl[i].pallative;
          })
        this.CommunitService.getphysio(this.districtlist)
          .subscribe(item => {
            var disl = item;
            for (var i = 0; i < disl.length; i++)
              for (var j = 0; j < this.districtlist.length; j++)
                if (disl[i].district_id == this.districtlist[j].district_id)
                  this.districtlist[j].physio = disl[i].physio;
          })
        this.CommunitService.getcapd(this.districtlist)
          .subscribe(item => {
            var disl = item;
            for (var i = 0; i < disl.length; i++)
              for (var j = 0; j < this.districtlist.length; j++)
                if (disl[i].district_id == this.districtlist[j].district_id)
                  this.districtlist[j].capd = disl[i].capd;
          })
        this.CommunitService.getDistrictDrug()
          .subscribe(item => {
            var disl = item.districtWise;
            for (var i = 0; i < disl.length; i++)
              for (var j = 0; j < this.districtlist.length; j++)
                if (disl[i].district_gid == this.districtlist[j].district_gid)
                  this.districtlist[j].drugreceived = disl[i].totalCount;
          })
        this.CommunitService.getDistrictmtm()
          .subscribe(item => {
            var disl = item.districtWise;
            for (var i = 0; i < disl.length; i++)
              for (var j = 0; j < this.districtlist.length; j++)
                if (disl[i].district_gid == this.districtlist[j].district_gid)
                  this.districtlist[j].mtmcount = disl[i].totalCount;
          })
        //screening district wise
        this.CommunitService.mtmkpiscreening()
          .subscribe(item => {
            var disl = item;
            for (var i = 0; i < disl.length; i++)
              for (var j = 0; j < this.districtlist.length; j++)
                if (disl[i].district_id == this.districtlist[j].district_id) {
                  this.districtlist[j].uniquescreening = disl[i].uniquescreening;
                  this.districtlist[j].totalscreening = disl[i].totalscreening;
                }
          })

      })
    /*Block Wise Start*/

    /*Block Wise End*/
  }

  SearchFilter() {

  }

  loadblockwisedata() {
    this.CommunitService.getblockmaster()
      .subscribe(item => {
        this.blocklist = item.blockWise;

        this.CommunitService.gethtblock()
          .subscribe(item => {
            var disl = item;
            for (var i = 0; i < disl.length; i++)
              for (var j = 0; j < this.blocklist.length; j++)
                if (disl[i].block_id == this.blocklist[j].block_id) {
                  this.blocklist[j].ht = disl[i].ht;
                }
          });
        this.CommunitService.getdtblock()
          .subscribe(item => {
            var disl = item;
            for (var i = 0; i < disl.length; i++)
              for (var j = 0; j < this.blocklist.length; j++)
                if (disl[i].block_id == this.blocklist[j].block_id)
                  this.blocklist[j].dt = disl[i].dt;
          })
        this.CommunitService.gethtdtblock()
          .subscribe(item => {
            var disl = item;
            for (var i = 0; i < disl.length; i++)
              for (var j = 0; j < this.blocklist.length; j++)
                if (disl[i].block_id == this.blocklist[j].block_id)
                  this.blocklist[j].htdt = disl[i].htdt;
          })
        this.CommunitService.getpallativeblock()
          .subscribe(item => {
            var disl = item;
            for (var i = 0; i < disl.length; i++)
              for (var j = 0; j < this.blocklist.length; j++)
                if (disl[i].block_id == this.blocklist[j].block_id)
                  this.blocklist[j].pallative = disl[i].pallative;
          })
        this.CommunitService.getphysioblock()
          .subscribe(item => {
            var disl = item;
            for (var i = 0; i < disl.length; i++)
              for (var j = 0; j < this.blocklist.length; j++)
                if (disl[i].block_id == this.blocklist[j].block_id)
                  this.blocklist[j].physio = disl[i].physio;
          })
        this.CommunitService.getcapdblock()
          .subscribe(item => {
            var disl = item;
            for (var i = 0; i < disl.length; i++)
              for (var j = 0; j < this.blocklist.length; j++)
                if (disl[i].block_id == this.blocklist[j].block_id)
                  this.blocklist[j].capd = disl[i].capd;
          })
        this.CommunitService.getBlockDrug()
          .subscribe(item => {           
            var disl = item;
            console.log(disl)
            for (var i = 0; i < disl.length; i++)
              for (var j = 0; j <  this.blocklist.length; j++)
                if (disl[i].block_gid == this.blocklist[j].block_gid)
                  this.blocklist[j].drugreceived = disl[i].totalCount;
        })
        this.CommunitService.getblockmtm()
          .subscribe(item => {
            var disl = item;
            for (var i = 0; i < disl.length; i++)
              for (var j = 0; j <  this.blocklist.length; j++)
                if (disl[i].block_id == this.blocklist[j].block_id)
                   this.blocklist[j].mtmcount = disl[i].totalCount;
          })
        this.CommunitService.mtmkpiscreeningblock()
          .subscribe(item => {
            var disl = item;
            for (var i = 0; i < disl.length; i++)
              for (var j = 0; j < this.blocklist.length; j++)
                if (disl[i].block_id == this.blocklist[j].block_id) {
                  this.blocklist[j].uniquescreening = disl[i].uniquescreening;
                  this.blocklist[j].totalscreening = disl[i].totalscreening;
                }
          })

      })
  }
}
