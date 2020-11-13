import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MovableBoxComponent } from './components/movable-box/movable-box.component';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    MovableBoxComponent,
    ToggleSwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
