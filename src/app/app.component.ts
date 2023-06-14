import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }
  title = 'PHRLockerView';

  secondheading: string = "MTM Performance";


  filterDiv: boolean = true;

  ShowHideFilter() {
    
    if (this.filterDiv == true) {
      this.filterDiv = false;
    }
    else if (this.filterDiv == false) {
      this.filterDiv = true;
    }
  }




}
