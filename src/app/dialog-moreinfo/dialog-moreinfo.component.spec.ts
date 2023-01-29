import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMoreinfoComponent } from './dialog-moreinfo.component';

describe('DialogMoreinfoComponent', () => {
  let component: DialogMoreinfoComponent;
  let fixture: ComponentFixture<DialogMoreinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMoreinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogMoreinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
