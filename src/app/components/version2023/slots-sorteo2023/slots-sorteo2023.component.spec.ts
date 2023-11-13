import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsSorteo2023Component } from './slots-sorteo2023.component';

describe('SlotsSorteo2023Component', () => {
  let component: SlotsSorteo2023Component;
  let fixture: ComponentFixture<SlotsSorteo2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotsSorteo2023Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsSorteo2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
