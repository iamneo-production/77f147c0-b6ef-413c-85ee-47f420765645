import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applyform } from './applyform';

@Injectable({
  providedIn: 'root'
})
export class UpdateformService {

<<<<<<< HEAD
  private baseurl='https://8080-faafcafbddfacbdcaababfebeecbbaefdfd.project.examly.io/customer/getProfileByEmail'
  private baseurl2='https://8080-faafcafbddfacbdcaababfebeecbbaefdfd.project.examly.io/customer/editProfile'
=======
  private baseurl='https://8080-faedbefabcfcbbeadacbdcaababfebeedcefbdfdacea.project.examly.io/customer/getProfileByEmail'
  private baseurl2='https://8080-faedbefabcfcbbeadacbdcaababfebeedcefbdfdacea.project.examly.io/customer/editProfile'
>>>>>>> f6c32e5fe4e87dad0c7f76042a97fc081493ed6d
  
  constructor(private httpclient:HttpClient) { }


  updateUser(email: string, formData): Observable<Object> {
    const url = `${this.baseurl2}/${email}`;
    return this.httpclient.put(url, formData);
  }
  getProfileByEmail(email: string) {
    return this.httpclient.get<Applyform>(`${this.baseurl}/${email}`);
  }
  getProfile(id: number) {
    return this.httpclient.get<Applyform>(`${this.baseurl}/${id}`);
  }
  
<<<<<<< HEAD
}
=======
}
>>>>>>> f6c32e5fe4e87dad0c7f76042a97fc081493ed6d
