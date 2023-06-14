import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbsscreeningComponent } from './pbsscreening.component';

describe('PbsscreeningComponent', () => {
  let component: PbsscreeningComponent;
  let fixture: ComponentFixture<PbsscreeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbsscreeningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbsscreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
