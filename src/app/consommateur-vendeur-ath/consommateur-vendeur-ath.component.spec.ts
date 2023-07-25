import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsommateurVendeurAthComponent } from './consommateur-vendeur-ath.component';

describe('ConsommateurVendeurAthComponent', () => {
  let component: ConsommateurVendeurAthComponent;
  let fixture: ComponentFixture<ConsommateurVendeurAthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsommateurVendeurAthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsommateurVendeurAthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
