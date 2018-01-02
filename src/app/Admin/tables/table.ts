export class table_data{

    id:number;
    fullname:String; 
    email:String;
    password:String;
    phone:number;
    username:String;
    stat:String;

    constructor(id:number,fullname:String,username:String,password:String,phone:number,email:String,stat:String){
        this.id=id;
        this.fullname=fullname;
        this.username=username;
        this.password=password;
        this.phone=phone;
        this.email=email;
        this.stat=stat;
    }
}