import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserperformanceComponent } from './userperformance.component';

describe('UserperformanceComponent', () => {
  let component: UserperformanceComponent;
  let fixture: ComponentFixture<UserperformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserperformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
