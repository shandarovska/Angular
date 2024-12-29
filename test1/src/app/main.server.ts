import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../../../test/src/app/app.component';
import { config } from '../../../test/src/app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;