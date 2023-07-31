import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Correctiondocs } from './correctiondocs';

@Injectable({
  providedIn: 'root'
})
export class CorrectiondocsService{
  private url1 ='https://8080-edbbacbdcaababfebeecbbaefdfd.project.examly.io/admin/correctionDocuments'
  constructor(private httpclient:HttpClient) { }
  getAllUpdatedProfile(): Observable<Correctiondocs[]> {
    return this.httpclient.get<Correctiondocs[]>(this.url1);
  }
  getProfile(id:number) {
    console.log(id);
    return this.httpclient.get<Correctiondocs>(`https://8080-edbbacbdcaababfebeecbbaefdfd.project.examly.io/admin/getProfile/${id}`); // Replace '1' with the actual user ID
  }
}
