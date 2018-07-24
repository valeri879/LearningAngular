import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service'
import { Users } from '../../users';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    constructor(private userService: UserService) { }

    showPassword: boolean = false;
    showConfirmationPassword: boolean = false;

    password: string;
    confirmPassword: string;

    checkPasswords(userData): void {

        console.log();

        /* if(this.checkPasswords) {
            console.log('valid');
        } */
    }

    ngOnInit() {
    }

}
