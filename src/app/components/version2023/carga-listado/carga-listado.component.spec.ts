import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaListadoComponent } from './carga-listado.component';

describe('CargaListadoComponent', () => {
  let component: CargaListadoComponent;
  let fixture: ComponentFixture<CargaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
