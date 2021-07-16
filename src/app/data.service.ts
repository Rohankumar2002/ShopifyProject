import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenProducts } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

  getUserById():Observable<MenProducts>{
    return this.hc.get<MenProducts>('http://localhost:3000/MenProducts')
  }
  getUserByIdWise(id):Observable<MenProducts>{
    return this.hc.get<MenProducts>('http://localhost:3000/MenProducts/'+id)
  }

  
  
}
