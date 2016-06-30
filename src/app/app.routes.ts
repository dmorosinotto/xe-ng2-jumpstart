import { RouterConfig, provideRouter } from '@angular/router';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { DatabindComponent } from './databind';
import { QuestionsComponent } from './questions';

export const routes: RouterConfig = [
    { path: 'basic', component: DatabindComponent },
    { path: 'questions', component: QuestionsComponent },
    { path: '', redirectTo: 'basic' }
];


export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
//  , { provide: LocationStrategy, useClass: HashLocationStrategy }
];
