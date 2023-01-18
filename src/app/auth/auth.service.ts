import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { LoginModel } from "./models/login.model";
import { Observable, tap } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../enironments/environment";
import { ILoginResponse } from "../interfaces/login-response";
import { RegisterModel } from "./models/register.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _accessToken: string | null = null;
  private _userName: string | null = null;

  public get isAuthorized(): boolean {
    return !!this._accessToken;
  }

  public get accessToken(): string | null {
    return this._accessToken;
  }

  public get userName(): string | null {
    return this._userName;
  }

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) {
  }

  public login(data: LoginModel): Observable<ILoginResponse> {
    let headers = new HttpHeaders({ ['Content-Type']: 'application/json' });

    return this.httpClient.post<ILoginResponse>(environment.apiUrl + 'auth/login', JSON.stringify(data), {
      headers: headers
    })
      .pipe(
        tap(result => {
          this._accessToken = result.accessToken;
          this.router.navigate(['/']);
          this.parseUserName();
        }, _ => {
          this._accessToken = null;
          this._userName = null;
        })
      );
  }

  public signup(data: RegisterModel): Observable<any> {
    let headers = new HttpHeaders({ ['Content-Type']: 'application/json' });
    this.router.navigate(['/auth/login']);

    return this.httpClient.post(environment.apiUrl + 'auth/register', JSON.stringify(data), {
      headers: headers
    });
  }

  public logout(): void {
    this._accessToken = null;
    this.router.navigate(['/auth/login']);
  }

  private parseUserName(): void {
    let jwtBody = this._accessToken?.split('.')[1] ?? '';
    let jsonString = window.atob(jwtBody);
    let jsonObject = JSON.parse(jsonString);
    this._userName = jsonObject.name;
  }
}