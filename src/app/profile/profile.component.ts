import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import * as http from "http";
import {AuthService} from "../services/auth.service";
import {toArray} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  completed:any;
  incompleted:any;
  private login: string;
  private numberOfCompletedMaps: number = 0;
  private numberOfInCompletedMaps: number = 0;

  constructor(private http: HttpClient,
              private authService: AuthService,
              private cookie: CookieService) {
  }

  ngOnInit(): void {

    this.login = this.cookie.get('login');

    let params = new HttpParams().set('userId', this.authService.id);

    this.http.get<Array<number>>("http://localhost:8080/user/profile/completed", {params:params}).subscribe(data=>{
      this.completed = data;
      this.numberOfCompletedMaps = this.completed.length;
    });

    this.http.get<Array<number>>("http://localhost:8080/user/profile/incompleted", {params:params}).subscribe(data=>{
      this.incompleted = data;
      this.numberOfInCompletedMaps = this.incompleted.length;
    });
  }

  public getLogin(){
    return this.login;
  }

  public getNumberOfCompletedMaps(){
    return this.numberOfCompletedMaps;
  }

  public getNumberOfInCompletedMaps(){
    return this.numberOfInCompletedMaps;
  }

  public getSuccess(){
    return Math.round(this.numberOfCompletedMaps/(this.numberOfCompletedMaps + this.numberOfInCompletedMaps) * 10000)/100;
  }

}
