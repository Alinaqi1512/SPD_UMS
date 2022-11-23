import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService ,private router :Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
  }


  onLogin(form:NgForm){
    this.userService.login(form.value.email, form.value.password).pipe(first()).subscribe({
      next:() =>{
         this.router.navigate(['/forgetpass'], {relativeTo: this.route});
      }
    });
  }
}
