import {HttpClient, HttpRequest} from "@angular/common/http";
import {User} from "../entity/user";
import {HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class AuthService{
  id: number = -1;
  auth = false;
  login:string;
  password:string;
  loginUrl: string;

  constructor(private http: HttpClient,
              private router: Router,
              private cookieService: CookieService) {
    this.loginUrl = "http://localhost:8080/user";
  }

  isAuth(){
    return this.auth;
  }

  signIn(){
    let params = new HttpParams()
      .set('login', this.login)
      .set('password', this.password);

    this.http.get<User>(this.loginUrl,{params:params}).subscribe(data=>{
      if(data === null){
        this.auth = false;
        this.password = "";
        this.login = "";
        this.cookieService.deleteAll();
      } else {
        let dateNow = new Date();
        dateNow.setMinutes(dateNow.getMinutes()+100);
        this.cookieService.set("auth", "true", dateNow);
        this.cookieService.set("userId", String(data.userId), dateNow)
        this.cookieService.set("login", String(data.login), dateNow)
        this.id = data.userId;
        this.auth = true;
      }
    });
  }

  signOut(){
    this.auth = false;
    this.password = "";
    this.login = "";
    this.cookieService.deleteAll();
  }
}
