import { async, TestBed } from '@angular/core/testing';
import { EmailsubscriptionModule } from './emailsubscription.module';

describe('EmailsubscriptionModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EmailsubscriptionModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EmailsubscriptionModule).toBeDefined();
  });
});
