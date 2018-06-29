import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../models/usuario';

import { QuerysService } from '../../services/querys.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  data: Object;

  constructor(private queryService: QuerysService) { }

  ngOnInit() {
    this.queryService.getUsers().subscribe(usuarios => {
      this.data = usuarios;
    });
    this.queryService.currentusuarios.subscribe(data => this.data = data);
  }

  deleteUser(user){
    if(confirm('Tem certeza?')){
    this.queryService.deletaUsuario(user.id).subscribe(data => {
      this.queryService.getUsers().subscribe(usuarios => {
        this.data = usuarios;
      });
    });
    }
  }

}
