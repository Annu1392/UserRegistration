import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class RegistrationService {
    registered: boolean = false;
    constructor(
        private httpClient: HttpClient
    ){

    }

    
    register(user: User) {
        this.registered = true;
        return this.httpClient.get(`https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d`);
    }

    getProfile(){
        return this.httpClient.get('https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2');
    }
}