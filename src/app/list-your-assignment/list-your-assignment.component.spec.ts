import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListYourAssignmentComponent } from './list-your-assignment.component';

describe('ListYourAssignmentComponent', () => {
  let component: ListYourAssignmentComponent;
  let fixture: ComponentFixture<ListYourAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListYourAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListYourAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
