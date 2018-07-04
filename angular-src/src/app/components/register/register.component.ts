import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../models/usuario';

import { QuerysService } from '../../services/querys.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public isCollapsed = true;

  data: any;
  usuario: Usuario;
  id: any;
  nome: string;
  senha: any;
  email: string;
  nascimento: string;
  cep: any;
  logradouro: string;
  bairro: string;
  cidade: string;
  pais: string;
  estado: string;

  constructor(private querysService: QuerysService) { }

  ngOnInit() {
    this.querysService.currentusuarios.subscribe(data => this.data = data)
  }

  onFormSubmit(){
    // const tabela = this.tabela;

    // this.querysService.queryAll(tabela).subscribe(data => {
    //   console.log(data);
    //   this.querysService.sendData(data);
    // });

    const id = Math.floor((Math.random() * 100000) + 1);
    const latitude = Math.floor((Math.random() * 100000) + 1);
    const longitude = Math.floor((Math.random() * 100000) + 1);

    const usuario = {
      id: id,
      nome: this.nome,
      senha: this.senha,
      email: this.email,
      nascimento: this.nascimento,
      logradouro: this.logradouro,
      cep: this.cep,
      bairro: this.bairro,
      cidade: this.cidade,
      estado: this.estado,
      pais: this.pais,
      latitude: latitude,
      longitude: longitude
    };

    this.querysService.cadastraUsuario(usuario).subscribe(data => {
      this.querysService.getUsers().subscribe(usuarios => {
      this.querysService.sendData(usuarios);
      this.clearForm();
      });
    });

  }

  clearForm(){
    this.nome = '',
    this.email = '',
    this.senha = '',
    this.nascimento = '',
    this.logradouro = '',
    this.cep = '',
    this.bairro = '',
    this.cidade = '',
    this.estado = '',
    this.pais = ''
  }

}
