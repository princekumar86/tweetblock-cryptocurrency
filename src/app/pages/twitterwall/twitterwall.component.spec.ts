import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwiiterwallComponent } from './twiiterwall.component';

describe('TwiiterwallComponent', () => {
  let component: TwiiterwallComponent;
  let fixture: ComponentFixture<TwiiterwallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwiiterwallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwiiterwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
