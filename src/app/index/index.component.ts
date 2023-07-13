import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
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
