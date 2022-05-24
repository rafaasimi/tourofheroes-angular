import { Component, Input, OnInit } from '@angular/core';
import { IMenuItem } from '../../models/menu-items.model';

@Component({
  selector: 'app-navigation-menu-top',
  templateUrl: './navigation-menu-top.component.html',
  styleUrls: ['./navigation-menu-top.component.scss'],
})
export class NavigationMenuTopComponent implements OnInit {
  @Input() title: string = '';
  @Input() menuItems: IMenuItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
