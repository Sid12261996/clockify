import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimeTrackerComponent} from "./time-tracker/time-tracker.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeTrackerRoutingModule {
}
