export  class User {
    id: number = 0;
    Username: string = "Required";
    password: string = "Required";
    Firstname: string = "Required";
    Lastname: string = "Required"; 
    Phone: string;
    Email: string;
    IsReviewer: boolean = false;
    IsAdmin: boolean = false;

    constructor(){};
}