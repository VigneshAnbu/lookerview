import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtmperformanceComponent } from './mtmperformance.component';

describe('MtmperformanceComponent', () => {
  let component: MtmperformanceComponent;
  let fixture: ComponentFixture<MtmperformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtmperformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtmperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
