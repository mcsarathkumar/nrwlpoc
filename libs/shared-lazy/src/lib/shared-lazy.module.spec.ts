import { async, TestBed } from '@angular/core/testing';
import { SharedLazyModule } from './shared-lazy.module';

describe('SharedLazyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedLazyModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedLazyModule).toBeDefined();
  });
});
