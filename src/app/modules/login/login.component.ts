import { Component } from '@angular/core';
import packageJson from '../../../../package.json';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm: FormGroup;
  spinnerLogin: boolean = false;
  error: boolean = false;
  public version: string = packageJson.version;
  public versionBack: string = "1.0.1"

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ){
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  Ok():void {
    this.spinnerLogin= true;
    // this.loginService.singIn(this.form.value.user, this.form.value.password)
    //   .pipe(first())
    //   .subscribe({
    //     next: (data) => {
    //       this.login = true;
    //       //
    //       // console.log("DATA DEVUELTA"  ,data)
    //       setTimeout(() => {
    //         return this.login = false;
    //       }, 3000);
    //       this.router.navigate(["/main/main"]);

    //     },
    //     error: errors => {
    //       const error = errors;
    //       // console.log("salida por error:", error);
    //       // this.Outlogin = true;
    //       this.spinnerlogin = false;
    //       this.Outlogin = true;
    //         setTimeout(() => {
    //         return this.Outlogin = false;
    //       }, 5000);
    //     }
    //   });
    this.router.navigate(["/MesaRendicion"]);
    if(this.loginForm.invalid){
      this.loginForm.reset();
      this.error=true;
    }
    console.log(this.loginForm.value)
    console.log(this.error)
  }
}
