import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { SubComponent }  from './sub.component';
import { AnishComponent } from './anish.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule],
  declarations: [ AppComponent, SubComponent, AnishComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
