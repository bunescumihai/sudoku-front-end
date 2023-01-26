import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixButtonComponent } from './matrix-button.component';

describe('MatrixButtonComponent', () => {
  let component: MatrixButtonComponent;
  let fixture: ComponentFixture<MatrixButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrixButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrixButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
