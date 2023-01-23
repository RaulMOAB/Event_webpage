export class Event{
    _name:string
    _type:string
    _date:Date
    _location:string
    _price:string


    public constructor(name:string, type:string, date:Date, location:string, price:string){
        this._name      = name;
        this._type      = type;
        this._date      = date;
        this._location  = location;
        this._price     = price;
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
}