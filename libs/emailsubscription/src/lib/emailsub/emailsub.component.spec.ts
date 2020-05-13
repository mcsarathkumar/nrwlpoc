import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsubComponent } from './emailsub.component';

describe('EmailsubComponent', () => {
  let component: EmailsubComponent;
  let fixture: ComponentFixture<EmailsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
