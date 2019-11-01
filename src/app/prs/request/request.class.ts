

export class Request {
    
    id: number = 0;
    description: string = "Required";
    justification: string = "Required";
    rejectionReason: string;
    deliveryMode: string = "Required";
    status: string = "NEW";
    total: number = 0.01; 

    userId: number = 0;



}