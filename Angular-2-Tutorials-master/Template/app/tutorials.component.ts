import { Component } from "@angular/core";

@Component ({
    selector: 'my-tutorials',
    template: `<h2>{{title}}</h2>
                <div [class.myClass]="applyClass">My Content in Red</div>
                <div [style.color]="applyBlue? 'blue' : 'orange'">This should be in blue</div>`,
    styles: [`.myClass {
        color: Red;
    }`]
})


export class TutorialsComponent {
    public title = "My New Tutorial is published";
    public applyClass = true;
    public applyBlue = true;
}