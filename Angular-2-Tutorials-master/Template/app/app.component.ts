import { Component } from '@angular/core';
import { TutorialsComponent } from './tutorials.component';

@Component({
  selector: 'my-app',
  template: `<h1>Angular 2 application started</h1>
              <my-tutorials></my-tutorials>`,
  directives: [TutorialsComponent]
})
export class AppComponent { 

}
