import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsTrafficComponent } from './visitors-traffic.component';

describe('VisitorsTrafficComponent', () => {
  let component: VisitorsTrafficComponent;
  let fixture: ComponentFixture<VisitorsTrafficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorsTrafficComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorsTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
