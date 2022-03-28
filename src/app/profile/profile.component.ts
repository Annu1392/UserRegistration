import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service';




@Component({ templateUrl: 'profile.component.html' })
export class ProfileComponent implements OnInit {
 jsonData:string;
 testData : any;
    constructor(  
         private registrationService: RegistrationService
    ) { }

    ngOnInit() {  

     this.registrationService.getProfile().subscribe(
        data => {
           this.jsonData = JSON.stringify(data)  ;
           this.testData  = JSON.parse(this.jsonData);
           console.log(this.testData);
        },
        error => {
            
            
        });;

      
    }

  
   
   
}