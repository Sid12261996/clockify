import {Component, OnInit} from '@angular/core';
import {interval, of, timer} from "rxjs";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() {
  }

  timer$ = of(0);

  ngOnInit(): void {
  }

  onAddProject() {

  }

  onStart() {
    this.timer$ = timer(0, 1000)
  }
}
