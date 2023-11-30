import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}; 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { } 
  getData(){
      return this.http.get('https://jsonplaceholder.typicode.com/users',{});
  }
  getnanData(){
      return this.http.get(this.url,{});
  }
  getSingleData(id:any){
 return this.http.get(this.url+'/'+id,{});
  }

  postDataList(data){
    return this.http.post('https://jsonplaceholder.typicode.com/users',data,{});
  }
}
