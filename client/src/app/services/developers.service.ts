import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICreateDeveloper, IDeveloper } from '../constants/types';

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {
  private SERVER_URL: string = environment.serverUrl;

  constructor(private readonly http: HttpClient) { }

  public getDevelopers(): Observable<IDeveloper[]> {
    return this.http.get<IDeveloper[]>(`${this.SERVER_URL}/developers`);
  }

  public createDeveloper(body: ICreateDeveloper): Observable<IDeveloper> {
    return this.http.post<IDeveloper>(`${this.SERVER_URL}/developers`, body);
  }

  public completeTodo(id: string): Observable<IDeveloper> {
    return this.http.patch<IDeveloper>(`${this.SERVER_URL}/developers/${id}`, { completed: true });
  }
}
