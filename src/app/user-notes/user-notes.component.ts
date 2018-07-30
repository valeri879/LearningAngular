import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CardDataType, ListData } from '../card-data';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user-notes',
    templateUrl: './user-notes.component.html',
    styleUrls: ['./user-notes.component.css'],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class UserNotesComponent implements OnInit {

    @Input() id: string;

    page: number = 1;

    userData: CardDataType[];
    listData: ListData[];
    fixed: boolean = false;

    constructor(
        private userService: UserService
    ) { }


    ngOnInit() {
        console.log(this.getData());
    }

    getData(): void {
        this.userService.getCardData().subscribe(userData => this.userData = userData);
        this.userService.getListData().subscribe(listData => this.listData = listData);
    }

}
