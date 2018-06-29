import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../models/usuario';

import { QuerysService } from '../../services/querys.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data: any;
  usuario: Usuario;
  id: any;
  nome: string;
  email: string;
  nascimento: string;

  constructor(private querysService: QuerysService) { }

  ngOnInit() {
    this.querysService.currentdata.subscribe(data => this.data = data)
  }

  onFormSubmit(){
    // const tabela = this.tabela;

    // this.querysService.queryAll(tabela).subscribe(data => {
    //   console.log(data);
    //   this.querysService.sendData(data);
    // });

    const id = Math.floor((Math.random() * 100000) + 1)

    const usuario = {
      id: id,
      nome: this.nome,
      email: this.email,
      nascimento: this.nascimento
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
    this.nascimento = ''
  }

}
