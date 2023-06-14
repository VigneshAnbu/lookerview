import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicemonitoringComponent } from './servicemonitoring.component';

describe('ServicemonitoringComponent', () => {
  let component: ServicemonitoringComponent;
  let fixture: ComponentFixture<ServicemonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicemonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicemonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
