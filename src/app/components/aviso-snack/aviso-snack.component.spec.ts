import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoSnackComponent } from './aviso-snack.component';

describe('AvisoSnackComponent', () => {
  let component: AvisoSnackComponent;
  let fixture: ComponentFixture<AvisoSnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisoSnackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
