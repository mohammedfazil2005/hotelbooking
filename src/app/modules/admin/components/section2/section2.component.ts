import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/apiservice/api.service';
import { apiResponce } from '../../../../interfaces/userInterface';

@Component({
  selector: 'app-section2',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component {

  hotelForm:FormGroup;
  previewImage:string=""
  imagefile:File|string=""
  facilitesArray:Array<string>=[]
  
  constructor(private formBuilder:FormBuilder,private api:ApiService){
    this.hotelForm=this.formBuilder.group({
      hotelname:['',[Validators.required,Validators.minLength(4)]],
      hotelDescription:['',[Validators.required,Validators.minLength(5)]],
      hotelRate:['',[Validators.required,Validators.pattern('[0-9]+')]],
      hotelAllotedGuests:['',[Validators.required,Validators.pattern('[0-9]+')]],
      hotelBeds:['',[Validators.required,Validators.pattern('[0-9]+')]],
      pincode:['',[Validators.required,Validators.pattern('[0-9]+')]],
      contact:['',[Validators.required,Validators.maxLength(10)]]
      // AddtionalFacilities:['',[Validators.required]]
    })
  }

  onImageInputChange(event:Event){
    let targetetedElements=event.target as HTMLInputElement
    
    if(targetetedElements.files&&targetetedElements.files[0]){
         this.imagefile=targetetedElements.files[0]
      this.previewImage=URL.createObjectURL(targetetedElements.files[0])
    }
  }

  onAddFacilites(input:HTMLInputElement){
    if(input.value){
      this.facilitesArray.push(input.value)
      input.value=""
 
    }else{
      alert("Please enter the facilites to add!")
    }
  }

  onAddHotelClick(){
   if(this.hotelForm.valid&&this.facilitesArray.length>0&&this.imagefile){
    console.log(this.hotelForm.value)
    let form=new FormData()

    Object.entries(this.hotelForm.value).forEach(([key,value])=>{
      form.append(key,String(value))
    })

    form.append("hotelimage",this.imagefile)

    form.append("AddtionalFacilities",this.facilitesArray.join(''))

    
    this.api.onAddHotel(form).subscribe({
      next:(responce:apiResponce)=>{
        console.log(responce)
        alert(responce.message)
      },
      error:(reason:apiResponce)=>{
        console.log(reason)
        alert(reason.error.message)
      }
    })
    
   }else{
    console.log(this.facilitesArray)
    console.log(this.imagefile)
    console.log(this.hotelForm)
    console.log("Rejected Form")
   }
  }



}
