import { Component } from '@angular/core';
import { IMenuItem } from './core/models/menu-items.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of Heroes | Angular';

  menuItems: IMenuItem[] = [
    {
      icon: 'dashboard',
      tooltipText: 'Dashboard',
      routerLink: '/dashboard',
    },
    {
      icon: 'sports_martial_arts',
      tooltipText: 'Heroes',
      routerLink: '/heroes',
    },
  ];
}
