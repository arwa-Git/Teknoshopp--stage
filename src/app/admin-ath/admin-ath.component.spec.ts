import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAthComponent } from './admin-ath.component';

describe('AdminAthComponent', () => {
  let component: AdminAthComponent;
  let fixture: ComponentFixture<AdminAthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
