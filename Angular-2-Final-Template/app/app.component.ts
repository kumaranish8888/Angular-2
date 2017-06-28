import { Component, OnInit } from '@angular/core';
import { AnishService } from './anish.service';

@Component({
  selector: 'my-app',
  
  template: `<h1>Random Company</h1>
            <anish-app></anish-app>
            <anish-detail></anish-detail>
            <anish-practice></anish-practice>`,
  providers: [AnishService]
})

export class AppComponent { 

 }
