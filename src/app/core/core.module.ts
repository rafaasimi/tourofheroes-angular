import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MessagesComponent } from './components/messages/messages.component';
import { NavigationMenuTopComponent } from './components/navigation-menu-top/navigation-menu-top.component';

import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const COMPONENTS = [
  MessagesComponent,
  NavigationMenuTopComponent,
  PageNotFoundComponent,
];

const MODULES = [MaterialModule, RouterModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [COMPONENTS, MODULES],
})
export class CoreModule {
  // Não permitir que o CoreModule seja importado em outros lugares
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import this module in the AppModule.'
      );
    }
  }
}
