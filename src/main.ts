import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { environment } from './environments/environment';

console.log('Environment: ', environment);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

