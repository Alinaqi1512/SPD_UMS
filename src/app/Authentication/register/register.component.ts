import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

enum Gender
{
    Male = 1,
    Female = 2,
    Others = 3
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// service: any;
Gender:Gender;

  constructor(private userService:UserService, private route: ActivatedRoute, private router: Router) { }

  // formModel= this.form.value({
  //   username:['', Validators.required],
  //   email:['',Validators.required],
  //   password:['',Validators.required],
  //   phonenNumber:['',Validators.required],
  //   gender:[ , Validators.required],
  //  })


  ngOnInit(): void {

  }

  // onSignUp(form:NgForm){
  //   this.userService.signUp(form.value).subscribe({
  //     next: () => {
  //         this.router.navigate(['../login'], { relativeTo: this.route });
  //     }
  // })}

  onSubmit(form: NgForm){
//  console.log(form.value.PhoneNumber);
 
    var body = {
      username: form.value.username,
      email: form.value.email,
      password: form.value.password,
      PhoneNumber: form.value.PhoneNumber,           
      Gender: form.value.Gender
  }
 
    // this.userService.signUp(form.value);
    this.userService.signUp(body).subscribe(
      res=>{
        if (res) {
        form.reset();
        }
        console.log(form.value.PhoneNumber);
        
      },
      err=>{console.log(err);
      }
    )
  }


}
