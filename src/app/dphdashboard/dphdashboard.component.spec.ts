import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DphdashboardComponent } from './dphdashboard.component';

describe('DphdashboardComponent', () => {
  let component: DphdashboardComponent;
  let fixture: ComponentFixture<DphdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DphdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DphdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
