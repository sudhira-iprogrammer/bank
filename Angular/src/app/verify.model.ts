export class verifyUser{
    id:String='';
    phoneNumber:String='';
    panNumber:String='';
    requestedAmount:String='';
    

    constructor(id:String, phoneNumber:String,panNumber:String,requestedAmount:String){
        this.id= id;
        this.phoneNumber=phoneNumber;
        this.panNumber=panNumber;
        this.requestedAmount=requestedAmount
    }
}