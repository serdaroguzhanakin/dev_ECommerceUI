import { Component, OnInit } from '@angular/core';

@Component({
    selector: '',
    templateUrl: './detail.component.html'
})

export class DetailComponent implements OnInit {
    title: string="detail page";
    constructor() {
        console.log('oguzhan akin!!!');
     }

    ngOnInit() { }
}