import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { InputOutputComponent } from './input-output/input-output.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    ItemOutputComponent,
    InputOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
