import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentHistoryPageComponent } from './employment-history-page.component';

describe('EmploymentHistoryPageComponent', () => {
  let component: EmploymentHistoryPageComponent;
  let fixture: ComponentFixture<EmploymentHistoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentHistoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
