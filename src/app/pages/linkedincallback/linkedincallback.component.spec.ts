import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedincallbackComponent } from './linkedincallback.component';

describe('LinkedincallbackComponent', () => {
  let component: LinkedincallbackComponent;
  let fixture: ComponentFixture<LinkedincallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedincallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedincallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
