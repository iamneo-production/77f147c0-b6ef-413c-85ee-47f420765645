import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  


  login:Login = new Login ();
  private currentUser: any;

<<<<<<< HEAD
  private baseurl1='https://8080-faafcafbddfacbdcaababfebeecbbaefdfd.project.examly.io/user/login'
=======
  private baseurl1='http://localhost:8080/user/login'
>>>>>>> f6c32e5fe4e87dad0c7f76042a97fc081493ed6d

  constructor(private httpclient:HttpClient) { }
  
  loginUser(login:Login): Observable<Object>{
    return this.httpclient.post(`${this.baseurl1}`, login);
  }

  
<<<<<<< HEAD
}
=======
}
>>>>>>> f6c32e5fe4e87dad0c7f76042a97fc081493ed6d
