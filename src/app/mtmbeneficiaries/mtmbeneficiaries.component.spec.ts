import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtmbeneficiariesComponent } from './mtmbeneficiaries.component';

describe('MtmbeneficiariesComponent', () => {
  let component: MtmbeneficiariesComponent;
  let fixture: ComponentFixture<MtmbeneficiariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtmbeneficiariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtmbeneficiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
