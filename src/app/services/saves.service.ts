import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class SavesService{
  constructor(private http: HttpClient) {
  }

  public saveMapProgress(userId: number, mapId: number, mapRow: string){
    let requestBody = {
      "userId": userId,
      "mapId": mapId,
      "mapRow": mapRow
    }

    this.http.post<any>("http://localhost:8080/map/save-map-progress", requestBody).subscribe();
  }

  public rewriteMapProgress(userId: number, mapId: number, mapRow: string){

    let reqBody = {
      'userId': userId,
      'mapId':mapId,
      'mapRow': mapRow
    }

    this.http.put("http://localhost:8080/map/save-map-progress", reqBody).subscribe();
  }

  public saveResolvedMap(){

  }


}
