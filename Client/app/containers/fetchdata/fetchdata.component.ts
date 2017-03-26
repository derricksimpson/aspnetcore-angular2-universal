import { 
    Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent implements OnInit {
    
    public users: IUser[];

    // Use "constructor"s only for dependency injection
    constructor(private http: Http) { }

    // Here you want to handle anything with @Input()'s @Output()'s
    // Data retrieval / etc - this is when the Component is "ready" and wired up
    ngOnInit() {
        this.http.get('http://localhost:56031/api/test/users').map(res => res.json()).subscribe(result => {
            this.users = result as IUser[];
        });
    }
}

interface IUser {
    id: number;
    name: string;
}
