import { Component, OnInit } from '@angular/core';
import { CardDataType } from '../card-data';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-notes',
  templateUrl: './user-notes.component.html',
  styleUrls: ['./user-notes.component.css']
})
export class UserNotesComponent implements OnInit {

  userData: CardDataType[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    console.log(this.getData());
  }

  getData(): void {
    this.userService.getCardData()
    .subscribe(userData => this.userData = userData);
  }

}
