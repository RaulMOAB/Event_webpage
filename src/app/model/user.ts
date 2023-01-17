export class User{
     _username:string 
     _email:string 
     _password:string
     _role:string
     _civil_status:any
     _gender:any
     _information!:any



    public constructor(username:string, email:string, civil_status:any, gender:any, information:any, password:string = '12345678', role:string = 'buyer'){
        this._username = username;     
        this._email = email;
        this._password = password
        this._role = role;
        this._civil_status = civil_status;
        this._gender = gender;
        this._information = information;
    }

    //Getters and Setters

    public get username (){
        return this._username
    }

    public get password (){
        return this._password
    }

    // public get repeat_password (){
    //     return this.#_repeat_password
    // }

    public get email (){
        return this._email
    }

    public get civil_status (){
        return this._civil_status
    }

    public get role (){
        return this._role;
    }
    public get gender (){
        return this._gender
    }

    public get information (){
        return this._information
    }

    public set username (username:string){
        this._username = username;
    }

    public set password (password:string){
        this._password = password;
    }

    // public set repeat_password (repeat_password:string){
    //     this.#_repeat_password = repeat_password;
    // }

    public set email (email:string){
        this._email = email;
    }

    public set civil_status (civil_status:string){
        this._civil_status = civil_status;
    }

    public set gender (gender:string){
        this._gender = gender;
    }

    public set role (role:string){
        this._role = role;
    }
    public set information (information:string){
        this._information = information;
    }

}