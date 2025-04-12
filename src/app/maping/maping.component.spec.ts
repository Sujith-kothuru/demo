import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapingComponent } from './maping.component';

describe('MapingComponent', () => {
  let component: MapingComponent;
  let fixture: ComponentFixture<MapingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
