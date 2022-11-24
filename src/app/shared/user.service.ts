import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, map, tap, throwError } from "rxjs";
import { User, UserLoginModel, UserModel } from "./user.model";


export interface AuthResponseData {
    idToken: string;
    username: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}



@Injectable({
    providedIn:'root'
})

export class UserService{
    // user = new BehaviorSubject<UserModel>(null);
    user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer: any = null;
  
    constructor(private http :HttpClient, private router: Router){    
    }

//    formModel= this.fb.group({
//     username:['', Validators.required],
//     email:['',Validators.required],
//     password:['',Validators.required],
//     phonenNumber:['',Validators.required],
//     gender:[ , Validators.required],
//    })
    
    signUp(body : UserModel){ 
        return this.http.post<AuthResponseData>('https://localhost:7037/api/Authenticate/register', {body, returnSecureToken:true})
        // .pipe(catchError(this.handleError), tap(resData => {
        //     this.handleAuthentication(resData.username, resData.localId, resData.idToken, +resData.expiresIn)
        // }));
    }

    login(body: UserLoginModel){

        return this.http.post('https://localhost:7037/api/Authenticate/login', body);
 
     }

    //  private handleAuthentication(username: string, userId: string, token: string, expiresIn: number) {
    //     const expirtionDate = new Date(new Date().getTime() + expiresIn * 1000);

    //     const user = new User(
    //         username,
    //         userId,
    //         token,
    //         expirtionDate);

    //     this.user.next(user);
    //     this.autoLogOut(expiresIn * 1000);
    //     localStorage.setItem('userData', JSON.stringify(user));
    // }

    //  autoLogin() {
    //     const userData: {
    //         username: string,
    //         id: string,
    //         _token: string,
    //         _tokenExpiryDate: string
    //     } = JSON.parse(localStorage.getItem('userData'));
    //     if (!userData) {
    //         return;
    //     };
    //     const loadedUser = new User(userData.username, userData.id, userData._token, new Date(userData._tokenExpiryDate));

    //     if (loadedUser.token) {
    //         this.user.next(loadedUser);
    //         const expirationDuration = new Date(userData._tokenExpiryDate).getTime() - new Date().getTime();
    //         this.autoLogOut(expirationDuration);
    //     }
    // }

    // logout() {
    //     this.user.next(null);
    //     this.router.navigate(['/auth']);
    //     if (this.tokenExpirationTimer) {
    //         clearTimeout(this.tokenExpirationTimer);
    //     }
    //     this.tokenExpirationTimer = null;
    // }

    // autoLogOut(expirationNumber: number) {
    //     this.tokenExpirationTimer = setTimeout(() => {
    //         this.logout();
    //     }, expirationNumber);
    // }


    // private handleError(errorRes: HttpErrorResponse) {
    //     let errorMessage = 'An Unknown Error Occurd';
    //     if (!errorRes.error || !errorRes.error.error.message) {
    //         return throwError(errorMessage);
    //     }
    //     switch (errorRes.error.error.message) {
    //         case 'EMAIL_EXISTS':
    //             errorMessage = 'Email already exists!';
    //             break;
    //         case 'EMAIL_NOT_FOUND':
    //             errorMessage = 'Email Not Found!';
    //             break;
    //         case 'INVALID_PASSWORD':
    //             errorMessage = 'Incorrect Password';
    //     }
    //     return throwError(errorMessage);
    // }


}