import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, ReplaySubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRegisterUserRequest, IRegisterUserResponse } from '../constants/types';
import { NotifierService} from 'angular-notifier';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private SERVER_URL = environment.serverUrl;
  public user$: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);


  constructor(private http: HttpClient,private notifier: NotifierService) { }

  public getAllDevelopers(): Observable<any>{
    return this.http.get(`${this.SERVER_URL}/developers`)
  }

  public registerUser(body: IRegisterUserRequest): Observable<IRegisterUserResponse>{
    return this.http.post<IRegisterUserResponse>(`${this.SERVER_URL}/users`, body)
  }
}
