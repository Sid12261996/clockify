import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackingPanelComponent } from './time-tracking-panel.component';

describe('TimeTrackingPanelComponent', () => {
  let component: TimeTrackingPanelComponent;
  let fixture: ComponentFixture<TimeTrackingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeTrackingPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTrackingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
