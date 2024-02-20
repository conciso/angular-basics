import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import {
  FundamentalNgxCoreModule, provideDialogService,
  provideTheming,
  themingInitializer
} from '@fundamental-ngx/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from '@angular-basics-schulung/common';
import { provideRouter } from '@angular/router';
import { FundamentalNgxPlatformModule } from '@fundamental-ngx/platform';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    importProvidersFrom(FundamentalNgxCoreModule),
    importProvidersFrom(FundamentalNgxPlatformModule),
    provideRouter([]),
    provideTheming({
      defaultTheme: 'sap_horizon',
      changeThemeOnQueryParamChange: true,
    }),
    themingInitializer(),
    provideDialogService(),
    provideHttpClient(
      withInterceptors([authInterceptor]),
    ),
  ],
};
