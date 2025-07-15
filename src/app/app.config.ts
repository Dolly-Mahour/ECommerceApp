import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { ItemsListService } from './items-list.service';
import { ItemsListAtCartService } from './items-list-at-cart.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,withComponentInputBinding()),
    ItemsListService,
    ItemsListAtCartService,
    // provideRouter(appRoutes, withComponentInputBinding()),
  ]
};
