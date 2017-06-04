import { Component } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component ({
    selector: 'my-tutorials',
    template: `<h2>{{date}}</h2>
                <h2>{{date | date: 'fullDate'}}</h2>
                <h2>{{date | date: 'shortDate'}}</h2>
                <h2>{{date | date: 'mediumTime'}}</h2>
                <h2>{{date | date: 'shortTime'}}</h2>`
})

export class TutorialsComponent {
    date = new Date();
}

//<h2>{{date}}</h2>     Sun Jun 04 2017 14:24:08 GMT-0400 (Eastern Daylight Time)
//<h2>{{date | date: 'fullDate'}}</h2>      Sunday, June 4, 2017
//<h2>{{date | date: 'shortDate'}}</h2>     6/4/2017
//<h2>{{date | date: 'mediumTime'}}</h2>    2:30:05 PM
//<h2>{{date | date: 'shortTime'}}</h2>     2:30 PM




