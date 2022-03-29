import { RegisterComponent } from "./register.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';


let testComponent = RegisterComponent;
beforeEach(async()=>{
    await TestBed.configureTestingModule({
        declarations:[RegisterComponent],
        imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
})

it('should create the app', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Test a FORM GROUP element count', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const formElements = fixture.debugElement.nativeElement.querySelector('#form');
    const inputElements = formElements.querySelectorAll('input');
    expect(inputElements.length).toEqual(4);
 
  });

