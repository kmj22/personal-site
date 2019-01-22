import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMePanelComponent } from './contact-me-panel.component';

describe('ContactMePanelComponent', () => {
  let component: ContactMePanelComponent;
  let fixture: ComponentFixture<ContactMePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
