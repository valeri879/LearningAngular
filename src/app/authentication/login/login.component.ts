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
	inputPassword: Users;
	focused = false;

	constructor(private userService: UserService) { }

	ngOnInit() {
		// this.userService.getUsers().subscribe(pass => this.Users = pass);
		// console.log(this.Users);
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
