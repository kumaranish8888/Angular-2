import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { SubComponent }  from './sub.component';
import { AnishComponent } from './anish.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnishdetailComponent } from './anishdetail.component';
import { HttpModule } from '@angular/http';
import { AnishPractice } from './anish.practice';


@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, HttpModule],
  declarations: [ AppComponent, SubComponent, AnishComponent, AnishdetailComponent, AnishPractice],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
