import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { BehaviorSubject, map } from "rxjs";
import { UserModel } from "./user.model";


enum Gender
{
    Male = 1,
    Female = 2,
    Others = 3
}

@Injectable({
    providedIn:'root'
})

export class UserService{
    // user = new BehaviorSubject<UserModel>(null);
  
    constructor(private http :HttpClient, private fb:FormBuilder){    
    }

//    formModel= this.fb.group({
//     username:['', Validators.required],
//     email:['',Validators.required],
//     password:['',Validators.required],
//     phonenNumber:['',Validators.required],
//     gender:[ , Validators.required],
//    })
    
    signUp(body : UserModel){ 
        return this.http.post('https://localhost:7037/api/Authenticate/register', body);
    }

    login(email, password){
       return this.http.post<UserModel>('https://localhost:7037/api/Authenticate/login', {
            email: email,
            password: password
        }).pipe(map(user=>{
           
        }));
    }


}