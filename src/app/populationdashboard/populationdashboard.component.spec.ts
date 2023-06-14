import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationdashboardComponent } from './populationdashboard.component';

describe('PopulationdashboardComponent', () => {
  let component: PopulationdashboardComponent;
  let fixture: ComponentFixture<PopulationdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopulationdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
