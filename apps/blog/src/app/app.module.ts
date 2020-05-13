import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Route } from '@angular/router';
import { EmailsubscriptionModule } from '@nrwlpoc/emailsubscription';
import { HttpClientModule } from '@angular/common/http';

const routes: Route[] = [
  {path: 'share', loadChildren: () => import('@nrwlpoc/shared-lazy').then(m => m.SharedLazyModule)}
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    EmailsubscriptionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
