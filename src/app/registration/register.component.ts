import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';
import { first } from 'rxjs/operators';
import { RegistrationService } from '../service/registration.service';



@Component({ templateUrl: 'register.component.html' ,
styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
         private registrationService: RegistrationService,
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['username', Validators.required],
            email: ['email', Validators.required],          
            password: ['password', [Validators.required, Validators.minLength(6)]],
            bio: ['bio', Validators.required]
        });
    }

  
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;   
       
       
        if (this.form.invalid) {
            return;
        }
  
        this.loading = true;
  
        this.registrationService.register(this.form.value)
        .pipe(first())
        .subscribe(
            data => {
               
                this.router.navigate(['../profile'], { relativeTo: this.route });
            },
            error => {
                
                this.loading = false;
            });

   
    }
}