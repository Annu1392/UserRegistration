import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RegistrationService } from '../service/registration.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private registrationService: RegistrationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
 
        if (this.registrationService.registered) {
          
            return true;
        }

       
        this.router.navigate([''], { queryParams: { returnUrl: state.url }});
        return false;
    }
}