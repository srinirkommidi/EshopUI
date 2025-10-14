import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogserviceSvc } from '../../Services/logservice.svc';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login.component',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

 loginObj:any={
    Emailid:"",
    Password:""
  };
    logStat:boolean=false;
  constructor(private route:Router, private logSvc:LogserviceSvc)  {  }

  onLogin(){
    alert(this.loginObj.Emailid);
    alert(this.loginObj.Password);
   if (this.logSvc.onLoginService(this.loginObj))
    {
      alert("Successfull");
      this.route.navigateByUrl('/dashboard')
    }
    else
    {
      alert ("Unsuccessfull");
    }
  }
}
