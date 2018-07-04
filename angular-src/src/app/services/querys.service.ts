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

  private usuarios = new BehaviorSubject('');
  currentusuarios = this.usuarios.asObservable();

  private usuario = new BehaviorSubject('');
  currentusuario = this.usuario.asObservable();

  private estabelecimento = new BehaviorSubject('');
  currentestabelecimento = this.estabelecimento.asObservable();

  private evento = new BehaviorSubject('');
  currentevento = this.evento.asObservable();

  usersUrl: string = 'http://localhost:8080/querys/users/all';
  cadastroUrl: string = 'http://localhost:8080/querys/cadastro';
  deleteUrl: string = 'http://localhost:8080/querys/delete';
  selectEventoUrl: string = 'http://localhost:8080/querys/select/evento';
  selectEstabelecimentoUrl: string = 'http://localhost:8080/querys/select/estabelecimento';
  selectUsuarioUrl: string = 'http://localhost:8080/querys/select/usuario';
  // usersUrl: string = '/querys/users/all';
  // cadastroUrl: string = '/querys/cadastro';
  // deleteUrl: string = '/querys/delete';
  // selectEventoUrl: string = '/querys/select/evento';
  // selectEstabelecimentoUrl: string = '/querys/select/estabelecimento';
  // selectUsuarioUrl: string = '/querys/select/usuario';
  nomeJSON: any;

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

  selectEvento(nome: string){
    this.nomeJSON = {nome: nome};
    return this.http.post(this.selectEventoUrl, this.nomeJSON, httpOptions);
  }

  selectEstabelecimento(nome: string){
    this.nomeJSON = {nome: nome};
    return this.http.post(this.selectEstabelecimentoUrl, this.nomeJSON, httpOptions);
  }

  selectUsuario(nome: string){
    this.nomeJSON = {nome: nome};
    return this.http.post(this.selectUsuarioUrl, this.nomeJSON, httpOptions);
  }

  sendData(data){
    this.usuarios.next(data);
  }

  sendUsuario(data){
    this.usuario.next(data);
  }

  sendEstabelecimento(data){
    this.estabelecimento.next(data);
  }

  sendEvento(data){
    this.evento.next(data);
  }
}