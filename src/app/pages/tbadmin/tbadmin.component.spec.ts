import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbadminComponent } from './tbadmin.component';

describe('TbadminComponent', () => {
  let component: TbadminComponent;
  let fixture: ComponentFixture<TbadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
