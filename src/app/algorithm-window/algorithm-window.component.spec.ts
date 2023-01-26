import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmWindowComponent } from './algorithm-window.component';

describe('AlgorithmWindowComponent', () => {
  let component: AlgorithmWindowComponent;
  let fixture: ComponentFixture<AlgorithmWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgorithmWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgorithmWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
