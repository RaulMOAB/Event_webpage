export class Event{
    _id:number;
    _name:string
    _type:string
    _date:Date
    _location:string
    _price:string
  


    public constructor(id:number =0, name:string="", type:string="", date:Date=new Date(), location:string="", price:string=""){
        this._id        = id;
        this._name      = name;
        this._type      = type;
        this._date      = date;
        this._location  = location;
        this._price     = price;
    }

    public set id (id:number){
        this._id = id;
    }

    public set name (name:string){
        this._name = name;
    }

    public set type (type:string){
        this._type = type;
    }

    public set date (date:Date){
        this._date = date;
    }

    public set location (location:string){
        this._location = location;
    }
    
    public set price (price:string){
        this._price = price;
    }


    public get id (){
        return this._id;
    }

    public get name (){
        return this._name;
    }

    public get type (){
        return  this._type ;
    }

    public get date (){
        return  this._date;
    }

    public get location (){
        return this._location;
    }
    
    public get price (){
        return this._price ;
    }
}