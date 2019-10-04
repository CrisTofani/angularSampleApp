import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDirectiveDirective } from './shared/directives/test-directive.directive';
import { TestPipe } from './shared/pipes/test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestDirectiveDirective,
    TestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
