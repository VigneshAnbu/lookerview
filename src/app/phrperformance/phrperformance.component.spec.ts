import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrperformanceComponent } from './phrperformance.component';

describe('PhrperformanceComponent', () => {
  let component: PhrperformanceComponent;
  let fixture: ComponentFixture<PhrperformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhrperformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhrperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
