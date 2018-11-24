import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { ScreenService } from './screen.service';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TempFormComponent } from './temp-form/temp-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TempFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  	WebsocketService,
  	ScreenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
