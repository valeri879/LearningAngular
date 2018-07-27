import { Injectable } from '@angular/core';
// get user data
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Users } from './users';
import { USERS } from './users-mock';
import { CardDataType, ListData } from './card-data';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    private noteUrl = 'api/Users.json';
    private listUrl = 'api/List.json';

    getCardData(): Observable<CardDataType[]> {
        return this.http.get<CardDataType[]>(this.noteUrl)
    }

    getListData(): Observable<ListData[]> {
        return this.http.get<ListData[]>(this.listUrl)
    }

    getUsers(): Observable<Users[]> {
        return of(USERS);
    }
}
