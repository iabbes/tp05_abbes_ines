import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantTetiereComponent } from './composant-tetiere.component';

describe('ComposantTetiereComponent', () => {
  let component: ComposantTetiereComponent;
  let fixture: ComponentFixture<ComposantTetiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantTetiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantTetiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
