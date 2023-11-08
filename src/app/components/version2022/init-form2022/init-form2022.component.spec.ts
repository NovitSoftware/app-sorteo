import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitForm2022Component } from './init-form2022.component';

describe('InitFormComponent', () => {
  let component: InitForm2022Component;
  let fixture: ComponentFixture<InitForm2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitForm2022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitForm2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
