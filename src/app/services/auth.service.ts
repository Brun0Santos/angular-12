import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG_API } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getCep(){
    return this.http.get("https://viacep.com.br/ws/08555680/json/")
  }
}
