import { Component, OnInit, ViewChild } from '@angular/core';
import { Users } from '../../users';
import { USERS } from '../../users-mock';
import { UserService } from '../../user.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	Users = USERS;
	currUser: string;
	pass: Users[];

	cu: string;

	inputPassword: Users;
	focused: boolean = false;
	focusedPassword: boolean = false;
	focusedUserName: boolean = false;
	showPassword: boolean = false;


	constructor(private userService: UserService) { }

	ngOnInit() {
		this.userService.getUsers().subscribe(pass => this.Users = pass);
		console.log(this.Users);

		console.log(this.cu);
	}
	onSelect(user: Users) {
		this.userService.getUsers().subscribe(pass => this.Users = pass);
		this.inputPassword = user;
		console.log(this.inputPassword);
	}
	// getUsers(): void {
	// 	this.userService.getUsers().subscribe(pass => this.Users = pass);
	// }
}
