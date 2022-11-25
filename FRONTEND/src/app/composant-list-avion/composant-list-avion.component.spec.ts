import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantListAvionComponent } from './composant-list-avion.component';

describe('ComposantListAvionComponent', () => {
  let component: ComposantListAvionComponent;
  let fixture: ComponentFixture<ComposantListAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantListAvionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantListAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
