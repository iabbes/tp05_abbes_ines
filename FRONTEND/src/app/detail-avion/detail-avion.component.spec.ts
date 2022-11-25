import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAvionComponent } from './detail-avion.component';

describe('DetailAvionComponent', () => {
  let component: DetailAvionComponent;
  let fixture: ComponentFixture<DetailAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAvionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
