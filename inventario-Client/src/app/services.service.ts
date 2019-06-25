import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private httpClient: HttpClient,) { }
  get(url:string){
    this.httpClient.get(environment.API_URL + url );
  }
  post(url:string, data:any){
    return this.post(environment.API_URL + url, data);
  }
  update(url:string, data:any){
    return this.update(environment.API_URL + url, data);
  }
  delete(url:string){
    return this.delete(environment.API_URL + url);
  }
}
