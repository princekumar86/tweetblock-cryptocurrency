import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglecallbackComponent } from './googlecallback.component';

describe('GooglecallbackComponent', () => {
  let component: GooglecallbackComponent;
  let fixture: ComponentFixture<GooglecallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglecallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglecallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
