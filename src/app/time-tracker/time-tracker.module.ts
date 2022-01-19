import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTrackerRoutingModule } from './time-tracker-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TimeTrackingPanelComponent } from './time-tracking-panel/time-tracking-panel.component';
import { TimeTrackerComponent } from './time-tracker/time-tracker.component';
import { TimerComponent } from './timer/timer.component';


@NgModule({
  declarations: [
    SearchBarComponent,
    TimeTrackingPanelComponent,
    TimeTrackerComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    TimeTrackerRoutingModule
  ]
})
export class TimeTrackerModule { }
