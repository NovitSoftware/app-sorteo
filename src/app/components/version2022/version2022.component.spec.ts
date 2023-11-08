import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Version2022Component } from './version2022.component';

describe('Version2022Component', () => {
  let component: Version2022Component;
  let fixture: ComponentFixture<Version2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Version2022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Version2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
