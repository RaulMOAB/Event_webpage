import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersDbService{

  users!:User[];
  private logged_in = new BehaviorSubject(false);
  private user_role = new BehaviorSubject('buyer');

  public login = this.logged_in.asObservable();
  public role  = this.user_role.asObservable();

  is_logged(login:boolean){
    this.logged_in.next(login);//next envia la variable a todos los que estan suscritos
  }

  update_role(role:string){
    this.user_role.next(role);
  }

  constructor() { 
    this.users = this.createUsers();

  }
 

  createUsers():User[]{

    let registered_users:User[] = [];
    let usernames = ['Marquez',
    'Shakayla', 
    'Alize' ,
    'Cory', 
    'Diamond' ,
    'Shannon',
    'Lamar',
    'Mohammed' ,
    'Wayne', 
    'Kavon', 
    'Garret', 
    'Dorothy',
    'Korey',
    'Livia',
    'Bonnie',
    'Devin',
    'Josue',
    'Nikhil' ,
    'Mordechai', 
    'Kylan',
    'Trey',
    'Toby',
    'Dezmond',
    'Isaias', 
    'Katlyn', 
    'Daron', 
    'Jarrod', 
    'Taj', 
    'Arthur', 
    'Fred'];

    let emails = ['Marquez@gmail.com',
    'Shakayla@gmail.com', 
    'Alize@gmail.com' ,
    'Cory@gmail.com', 
    'Diamond@gmail.com' ,
    'Shannon@gmail.com',
    'Lamar@gmail.com',
    'Mohammed@gmail.com' ,
    'Wayne@gmail.com', 
    'Kavon@gmail.com', 
    'Garret@gmail.com', 
    'Dorothy@gmail.com',
    'Korey@gmail.com',
    'Livia@gmail.com',
    'Bonnie@gmail.com',
    'Devin@gmail.com',
    'Josue@gmail.com',
    'Nikhil@gmail.com' ,
    'Mordechai@gmail.com', 
    'Kylan@gmail.com',
    'Trey@gmail.com',
    'Toby@gmail.com',
    'Dezmond@gmail.com',
    'Isaias@gmail.com', 
    'Katlyn@gmail.com', 
    'Daron@gmail.com', 
    'Jarrod@gmail.com', 
    'Taj@gmail.com', 
    'Arthur@gmail.com', 
    'Fred@gmail.com' ];

    const password:string = '12345678';
    const role:string[] = ['buyer', 'admin'] ;
    const civil_status: string[] = ['Casado/a', 'Soltero/a', 'Divorciado/a'];
    const gender:string[] = ['Hombre', 'Mujer', 'Otros'];
    const information:string[]  = ['Videojuegos', 'Accesorios', 'Novedades del mercado'];

    const user_admin = new User('raulmontoro', 'rma@gmail.com','Soltero/a','Hombre', 'Videojuegos', '12345678','admin');
    const user_buyer = new User('alvingarcia', 'amg@gmail.com','Soltero/a','Hombre', 'Videojuegos', '12345678','buyer');
    registered_users.push(...[user_admin, user_buyer]);

    //console.table(registered_users);

    for (let i = 0; i < 18; i++) {
     let random = Math.trunc(Math.random() * 20) + 1;
     let random_of_2 =  Math.trunc(Math.random() * 2) + 1;
     let random_of_3 =  Math.trunc(Math.random() * civil_status.length);

     let user:User = new User(usernames[random], emails[random],civil_status[random_of_3], gender[random_of_3], information[random_of_3]);
     registered_users.push(user) ;
    }
    //console.table(registered_users);
    

    return registered_users;
  
 }



check_login(username:string, password:string):string{
  let exist:string = '';
  this.users.forEach(user =>{
    if ((user._username === username) && (user._password === password)) {
      exist = user._role;
    } 
  })

  return exist;
 
 }
}
