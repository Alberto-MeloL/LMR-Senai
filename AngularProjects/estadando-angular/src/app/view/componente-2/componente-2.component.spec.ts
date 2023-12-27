import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2Component } from './componente-2.component';

describe('Componente2Component', () => {
  let component: Componente2Component;
  let fixture: ComponentFixture<Componente2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Componente2Component]
    });
    fixture = TestBed.createComponent(Componente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
