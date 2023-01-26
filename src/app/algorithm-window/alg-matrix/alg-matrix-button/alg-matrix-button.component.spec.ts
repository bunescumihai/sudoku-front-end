import { ComponentFixture, TestBed } from '@angular/core/testing';

import {AlgMatrixButtonComponent} from './alg-matrix-button.component';

describe('AlgMatrixButtonComponent', () => {
  let component: AlgMatrixButtonComponent;
  let fixture: ComponentFixture<AlgMatrixButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgMatrixButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgMatrixButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
