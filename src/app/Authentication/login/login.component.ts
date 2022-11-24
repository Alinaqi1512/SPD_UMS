import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/shared/user.service';

import { NgForm } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';



@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {



  service: any;

  isLoggedIn = false;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void { }

  login(form: NgForm) {

    var body = {

      username: form.value.username,

      password: form.value.password,

    }

    this.userService.login(body).subscribe(

      res => {

        if (res) {

          this.isLoggedIn = true;

          form.reset();
        }

        this.router.navigate(['/home'], { relativeTo: this.route });

      },

      err => { console.log(err); })
  }
}