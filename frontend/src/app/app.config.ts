import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { authInterceptor } from './global/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),
    provideRouter(routes),provideHttpClient(withFetch()),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};
