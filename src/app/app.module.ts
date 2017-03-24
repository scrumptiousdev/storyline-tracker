import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoryComponent } from './story.component';
import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicles.component';
import { VehiclesService } from './vehicles.service';

@NgModule({
  declarations: [
    StoryComponent,
    AppComponent,
    VehiclesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [VehiclesService],
  bootstrap: [VehiclesComponent]
})
export class AppModule { }
