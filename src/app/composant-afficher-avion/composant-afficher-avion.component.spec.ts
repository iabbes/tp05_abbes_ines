import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantAfficherAvionComponent } from './composant-afficher-avion.component';

describe('ComposantAfficherAvionComponent', () => {
  let component: ComposantAfficherAvionComponent;
  let fixture: ComponentFixture<ComposantAfficherAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantAfficherAvionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantAfficherAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
