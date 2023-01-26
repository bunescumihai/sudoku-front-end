import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgMatrixComponent } from './alg-matrix.component';

describe('AlgMatrixComponent', () => {
  let component: AlgMatrixComponent;
  let fixture: ComponentFixture<AlgMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgMatrixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
