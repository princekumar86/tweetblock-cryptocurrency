import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbcallbackComponent } from './fbcallback.component';

describe('FbcallbackComponent', () => {
  let component: FbcallbackComponent;
  let fixture: ComponentFixture<FbcallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbcallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbcallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
