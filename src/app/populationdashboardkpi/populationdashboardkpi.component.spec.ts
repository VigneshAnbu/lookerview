import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationdashboardkpiComponent } from './populationdashboardkpi.component';

describe('PopulationdashboardkpiComponent', () => {
  let component: PopulationdashboardkpiComponent;
  let fixture: ComponentFixture<PopulationdashboardkpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationdashboardkpiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopulationdashboardkpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
