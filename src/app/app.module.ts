import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LaunchesComponent } from './launches/launches.component';
import { LaunchesService } from './launches/launches.service';

@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LaunchesService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
