import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgMenuComponent } from './alg-menu.component';

describe('AlgMenuComponent', () => {
  let component: AlgMenuComponent;
  let fixture: ComponentFixture<AlgMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
