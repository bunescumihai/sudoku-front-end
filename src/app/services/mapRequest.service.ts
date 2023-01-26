import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {Map} from "../entity/map";

@Injectable()
export class MapRequestService {

  private mapById: string;
  private randomMapUrl: string

  constructor(private http: HttpClient) {
    this.mapById = 'http://localhost:8080/map';
    this.randomMapUrl = 'http://localhost:8080/map/rand'
  }

  public getMapById(id: number): Observable<Map>{
    let params = new HttpParams().set("mapId", id);
    return this.http.get<Map>(this.mapById, {params: params});
  }

  public getRandomMap(): Observable<Map>{
    return this.http.get<Map>(this.randomMapUrl);
  }

  public saveResolvedMap(userId: number, mapId: number){
    let params = new HttpParams()
      .set('userId', userId)
      .set('mapId', mapId);

    this.http.post("http://localhost:8080/map/save", params).subscribe();
  }

  public getProgressedMap(userId: number, mapId: number){
    let params = new HttpParams()
      .set("userId", userId)
      .set("mapId", mapId);

    return this.http.get<string>("http://localhost:8080/map/get-progressed-map", {params: params});
  }
}
