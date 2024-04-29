import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { InterceptorService } from './shared/util/loader.interceptor';
import { ScrollToTopService } from './shared/util/ScrollToTopService';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideHttpClient(withFetch()),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  },
    ScrollToTopService],


};
