import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../services/apiservice/api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { apiResponce } from '../../interfaces/userInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  toggleVal: boolean = true
  registerForm: FormGroup;

  formError: string = ""

  @Output() customEvent = new EventEmitter()

  constructor(private api: ApiService, private formBuilder: FormBuilder,private router:Router) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]
    })

  
  }


  sendData() {
    this.customEvent.emit('close')
  }

  //  reactive forms
  onLoginClick(e: any, val: string) {
    e.preventDefault()
    if (val == "register") {
      if (this.registerForm.valid) {
        this.api.onRegister(this.registerForm.value).subscribe({
          next: (responce: apiResponce) => {
            console.log(responce)
            alert(responce.message)
            this.registerForm.reset()
          },
          error: (reason: apiResponce) => {
            alert(reason.error.message)
          }
        })
      } else {
        alert("Please check the form!")
      }

    } else {
     if(this.registerForm.get("email")?.value&&this.registerForm.get('password')?.value){
       this.api.onLogin(this.registerForm.value).subscribe({
        next:(responce:apiResponce)=>{
          sessionStorage.setItem("token",responce.token)
          sessionStorage.setItem("role",responce.role)
          alert(responce.message)
          if(responce.role=="users"){
            this.router.navigateByUrl('/hotel')
          }else{
            this.router.navigateByUrl('/admin')
          }
        },
        error:(reason:apiResponce)=>{
          alert(reason.error.message)
        }
      })
     }else{
      alert("Please check the form!")
     }
}

  }

}