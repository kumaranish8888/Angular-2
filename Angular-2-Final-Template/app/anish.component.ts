import { Component, OnInit } from '@angular/core';
import { AnishService } from './anish.service';

@Component ({
    selector: 'anish-app',
    template: `<h2>Employee list</h2>
                <ul *ngFor="let employee of employees">
                <li>{{employee.name}}</li>
                </ul>`
})

export class AnishComponent implements OnInit { 

    employees = [];

    constructor (private _anishservice: AnishService){}


    ngOnInit(){
        this._anishservice.getEmployees()
            .subscribe(resEmployeeData => this.employees = resEmployeeData );
    }
 }