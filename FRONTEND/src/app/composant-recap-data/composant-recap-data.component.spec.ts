import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantRecapDataComponent } from './composant-recap-data.component';

describe('ComposantRecapDataComponent', () => {
  let component: ComposantRecapDataComponent;
  let fixture: ComponentFixture<ComposantRecapDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantRecapDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantRecapDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
