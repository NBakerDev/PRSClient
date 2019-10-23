export  class User {
    id: number = 0;
    username: string = "Required";
    password: string = "Required";
    firstname: string = "Required";
    lastname: string = "Required"; 
    phone: string;
    email: string;
    isReviewer: boolean = false;
    isAdmin: boolean = false;

    constructor(){};
}