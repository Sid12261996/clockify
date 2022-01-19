import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

interface INavBarItems {
  name: string;
  icon: string;
  redirectTo?: string
  // isActive: boolean;

}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router) {
  }

  navBar: { [key: string]: INavBarItems[] } = {
    '': [{name: 'TIME TRACKER', icon: 'i', redirectTo: '/tracker'}, {name: 'calendar', icon: 'i',}],
    'Analyse': [{name: 'dashboard', icon: 'i'}, {name: 'reports', icon: 'i'},],
    'Manage': [{name: 'projects', icon: 'i'}, {
      name: 'Team',
      icon: 'i'
    }, {name: 'client', icon: 'i'}, {
      name: 'Tags',
      icon: 'i',

    }, {name: 'settings', icon: 'i',}],
  }

  navBarKeys = Object.keys(this.navBar);


  ngOnInit(): void {
  }

  onRedirect(redirectTo: string | undefined) {
    this.router.navigate([redirectTo])

  }
}
