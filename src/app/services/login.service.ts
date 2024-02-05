import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  singIn(username: string, password: string ): void{
    const userSignIn: any = {
      username,
      password,
    }
    // this.encryptService.getCotoCryptic(password).pipe(
    //   tap(encryptedPassword => {
    //       userSignIn.password = userSignIn.password;
    //   }),
    //   switchMap(encryptedPassword =>
  //   return this.http.post<Dataprime>(`${environment.generalApi}Login`, userSignIn)),
  //     tap((signInResponse: Dataprime) => {
  //           const data: Data = signInResponse.data;
  //           const token = data.token ?? "";
  //           const legajo = data.legajo;
  //           localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
  //           localStorage.setItem(Legajo, legajo)
  //           // console.log("token", token);
  //           this.profileSvc.setupUser(data);
  //     }),);
  // }
  }
}
