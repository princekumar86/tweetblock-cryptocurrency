import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittercallbackComponent } from './twittercallback.component';

describe('TwittercallbackComponent', () => {
  let component: TwittercallbackComponent;
  let fixture: ComponentFixture<TwittercallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwittercallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwittercallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
