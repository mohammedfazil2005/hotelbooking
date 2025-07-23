import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  toggleVal:boolean=true

 @Output() customEvent=new EventEmitter()

 sendData(){
  this.customEvent.emit('close')
 }

}
