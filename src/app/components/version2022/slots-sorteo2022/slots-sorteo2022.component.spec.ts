import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsSorteo2022Component } from './slots-sorteo2022.component';

describe('SlotsSorteo2022Component', () => {
  let component: SlotsSorteo2022Component;
  let fixture: ComponentFixture<SlotsSorteo2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotsSorteo2022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsSorteo2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
