import { Injectable } from '@angular/core';
// get user data
import { Observable, of } from 'rxjs';

import { Users } from './users';
import { USERS } from './users-mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  getUsers(): Observable<Users[]> {
    return of(USERS);
  }
}
