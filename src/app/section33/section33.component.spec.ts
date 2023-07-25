import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section33Component } from './section33.component';

describe('Section33Component', () => {
  let component: Section33Component;
  let fixture: ComponentFixture<Section33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section33Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
