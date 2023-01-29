import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OliveResidencesComponent } from './olive-residences.component';

describe('OliveResidencesComponent', () => {
  let component: OliveResidencesComponent;
  let fixture: ComponentFixture<OliveResidencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OliveResidencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OliveResidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
