import {Component} from '@angular/core';

@Component ({
    selector: 'my-app',
    template: `<div>
        <h2>{{name}}</h2>
    </div>`
})

export class aboutusComponent {
    name: string = "Aboutus Page";
}
