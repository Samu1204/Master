import { ConditionalExpr } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {employes} from '../datamodel/employes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'list1';

  val: string = '';
  selectedEmployeeName: string ="";

  
  empolyess :employes[] = [];
  onSearchChange(searchValue: string): void {  
    let currentEmployee = this.empolyess.filter(em => em.name.toLowerCase().includes(searchValue.toLowerCase()))
    this.selectedEmployeeName = currentEmployee ? currentEmployee[0].name: "";
  }

  constructor() { }
  
  ngOnInit() {
    this.empolyess =[
     
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
          "street": "Kulas Light",
          "city": "Gwenborough",
        "mobile": 1770736803156442 ,
        "zipcode": 929983874,
        "website": "hildegard.org",
        "companyname" : "Romaguera-Crona",
      },
      
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "street": "Victor Plains",
          "city": "Wisokyburgh",
          "mobile" : 10692659309125,
          "zipcode" : 905667771 ,
          "website": "anastasia.net",
          "companyname": "Deckow-Crist",
          
          
        },
      
        {
          "id": 3,
          "name": " Clementine Bauch",
          "username": "Samantha",
          "email": " Nathan@yesenia.net",
          "street": "Douglas Extension",
          "city": " McKenziehaven",
          "mobile" : 14631234447,
          "zipcode" : 595904157,
          "website": "ramiro.info",
          "companyname": "Romaguera-Jacobson",

        },

        {
          "id": 4,
          "name": "Patricia Lebsack",
          "username": " Karianne ",
          "email": " Julianne.OConner@kory.org ",
         "street": "Hoeger Mall",
          "city": "South Elvis",
          "mobile" : 4931709623156,
          "zipcode" :  539194257,
          "website": "kale.biz",
          "companyname": "Robel-Corkery",
 
        },

        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "username": "Kamren",
          "email": "Lucio_Hettinger@annie.ca",
          "street": "Skiles Walks",
          "city": "Roscoeview",
          "mobile" : 2549541289 ,
          "zipcode" : 33263 ,
          "website": "demarco.info",
          "companyname": "Keebler LLC",
 
        },

        {
          "id": 6,
          "name": "Mrs. Dennis Schulist",
          "username": "Leopoldo_Corkery",
          "email": "Karley_Dach@jasper.info",
          "street": "Norberto Crossing",
          "city": "South Christy",
          "mobile" : 147793584786430,
          "zipcode" :  235051337,
          "website": "ola.org",
          "companyname": "Considine-Lockman",
 
        },

    
        {
          "id": 7,
          "name": "Kurtis Weissnat",
          "username": "Elwyn.Skiles",
          "email": "Telly.Hoeger@billy.biz",
          "street": "Rex Trail",
          "city": "Howemouth",
          "mobile" : 2100676132 ,
          "zipcode" :  588041099,
          "website": "elvis.io",
          "companyname": "Johns Group",
 
        },

        {
          "id": 8,
          "name": "Nicholas Runolfsdottir V",
          "username": "Maxime_Nienow",
          "email": "Sherwood@rosamond.me",
          "street": "Ellsworth Summit",
          "city": "Aliyaview",
          "mobile": 5864936943140,
          "zipcode": 45169,
          "website": "jacynthe.com",
          "companyname":  "Abernathy Group",
            
          
        },

        {
          "id": 9,
          "name": "Glenna Reichert",
          "username": "Delphine",
          "email": "Chaim_McDermott@dana.io",
          "street": "Dayna Park",
          "city": "Bartholomebury",
          "mobile": 775976679441206,
          "zipcode": 76495-3109,
          "website": "conrad.com",
          "companyname":  "Yost and Sons",
            
        },
      
        {
          "id": 10,
          "name": "Clementina DuBuque",
          "username": "Moriah.Stanton",
          "email": "Rey.Padberg@karina.biz",
          "street": "Kattie Turnpike",
          "city": "Lebsackbury",
          "mobile": 246483804,
          "zipcode": 314282261,
          "website": "ambrose.net",
          "companyname":  "Hoeger LLC",
          }
      
    ]
  }


}
