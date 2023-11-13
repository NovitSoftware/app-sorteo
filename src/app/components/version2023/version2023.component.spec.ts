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
});
