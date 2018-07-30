export class CardDataType {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    date: string;
    about: string;
}

export class ListData {
    id: number = -1;
    lists: string = '';
    fixed: boolean = false;
}