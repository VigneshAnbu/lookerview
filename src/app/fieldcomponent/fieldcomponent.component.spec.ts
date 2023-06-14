import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldcomponentComponent } from './fieldcomponent.component';

describe('FieldcomponentComponent', () => {
  let component: FieldcomponentComponent;
  let fixture: ComponentFixture<FieldcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
