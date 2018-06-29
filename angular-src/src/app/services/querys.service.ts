import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class QuerysService {

  private dataSource = new BehaviorSubject('');
  currentdata = this.dataSource.asObservable();

  usersUrl: string = 'http://localhost:8080/querys/users/all';
  cadastroUrl: string = 'http://localhost:8080/querys/cadastro';
  deleteUrl: string = 'http://localhost:8080/querys/delete';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.usersUrl, httpOptions)
  }

  cadastraUsuario(usuario: Object){
    return this.http.post(this.cadastroUrl, usuario, httpOptions)
  }

  deletaUsuario(id: any){
    return this.http.delete(`${this.deleteUrl}/${id}`, httpOptions);
  }

  sendData(data){
    this.dataSource.next(data);
  }
}