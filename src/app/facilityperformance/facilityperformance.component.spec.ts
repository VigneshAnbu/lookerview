import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityperformanceComponent } from './facilityperformance.component';

describe('FacilityperformanceComponent', () => {
  let component: FacilityperformanceComponent;
  let fixture: ComponentFixture<FacilityperformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityperformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
