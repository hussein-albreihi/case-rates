import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { appConfig } from './app/app.config';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
}).catch(err => console.error(err));