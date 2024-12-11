import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Version2023Component } from './version2023.component';

describe('Version2023Component', () => {
  let component: Version2023Component;
  let fixture: ComponentFixture<Version2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Version2023Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Version2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable start if listadoswen is invalid', () => {
    component.listadoswen = { isInvalid: () => true } as any;
    expect(component.disableStart()).toBeTrue();
  });

  it('should enable start if listadoswen is valid', () => {
    component.listadoswen = { isInvalid: () => false } as any;
    expect(component.disableStart()).toBeFalse();
  });

  it('should reset sorteo', () => {
    component.listadoswen = { resetearSorteo: jasmine.createSpy() } as any;
    component.slotsSorteo = { resetearSorteo: jasmine.createSpy() } as any;
    component.resetearSorteo();
    expect(component.listadoswen.resetearSorteo).toHaveBeenCalled();
    expect(component.slotsSorteo.resetearSorteo).toHaveBeenCalled();
  });

  it('should start sorteo', () => {
    component.listadoswen = { getListados: () => [] } as any;
    component.slotsSorteo = { startSorteo: jasmine.createSpy() } as any;
    component.comenzarSorteo();
    expect(component.slotsSorteo.startSorteo).toHaveBeenCalledWith({ wen: [] });
  });
});
