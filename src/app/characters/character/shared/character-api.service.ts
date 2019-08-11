import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CharacterApiService {
  PUBLIC_KEY = '627add8b9fe14a3248f694d0e0dd7c50';
  HASH = 'efd2388b321edcfc5899541606185f5f2aa3f673';
  URL_API = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&
  hash=${this.HASH}` ;
  constructor(private http: HttpClient) { }
 
  getAllCharacters() : Observable<any>{
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) =>data.data.results))
  }
}
