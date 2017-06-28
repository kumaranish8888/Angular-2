import { Component, OnInit } from '@angular/core';
import { AnishService } from './anish.service';

@Component ({
    selector: 'anish-detail',
    template: `<h2>Employee data in detail</h2>
                <ul *ngFor="let employee of employees">
                    <li>{{employee.id}} {{ employee.name}}  {{employee.email}}</li>
                </ul>`
})

export class AnishdetailComponent implements OnInit {

     employees = [];

     constructor(private _anishservice: AnishService){}

     ngOnInit(){
        this._anishservice.getEmployees()
            .subscribe(resEmployeeData => this.employees = resEmployeeData );
    }
 }

