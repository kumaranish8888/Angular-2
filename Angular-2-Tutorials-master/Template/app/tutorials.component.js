"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.date = new Date();
    }
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorials',
            template: "<h2>{{date}}</h2>\n                <h2>{{date | date: 'fullDate'}}</h2>\n                <h2>{{date | date: 'shortDate'}}</h2>\n                <h2>{{date | date: 'mediumTime'}}</h2>\n                <h2>{{date | date: 'shortTime'}}</h2>"
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//<h2>{{date}}</h2>     Sun Jun 04 2017 14:24:08 GMT-0400 (Eastern Daylight Time)
//<h2>{{date | date: 'fullDate'}}</h2>      Sunday, June 4, 2017
//# sourceMappingURL=tutorials.component.js.map