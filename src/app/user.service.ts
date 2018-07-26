import { Injectable } from '@angular/core';
// get user data
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Users } from './users';
import { USERS } from './users-mock';
import { CardDataType } from './card-data';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    private noteUrl = 'https://my.api.mockaroo.com/users.json?key=5ebe6c00';

    getCardData(): Observable<CardDataType[]> {
        return this.http.get<CardDataType[]>(this.noteUrl)
    }

    getUsers(): Observable<Users[]> {
        return of(USERS);
    }
}
