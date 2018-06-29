import { Component, OnInit } from '@angular/core';

import { QuerysService } from '../../services/querys.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  nomeevento = this.nomeevento;
  nomeestabelecimento = this.nomeestabelecimento;
  nomeusuario = this.nomeusuario;
  data: any;
  estabelecimento: any;
  evento: any;

  constructor(private queryService: QuerysService) { }

  ngOnInit() {
    this.queryService.currentusuario.subscribe(data => this.data = data);
    this.queryService.currentestabelecimento.subscribe(data => this.estabelecimento = data);
    this.queryService.currentevento.subscribe(data => this.evento = data);
  }

  onUserNameSubmit(){
    this.queryService.selectUsuario(this.nomeusuario).subscribe(usuario => {
      console.log(usuario);
      this.queryService.sendUsuario(usuario);
    })
  }

  onEstabelecimentoSubmit(){
    this.queryService.selectEstabelecimento(this.nomeestabelecimento).subscribe(estabelecimento => {
      console.log(estabelecimento);
      this.queryService.sendEstabelecimento(estabelecimento);
    })
  }

  onEventoSubmit(){
    this.queryService.selectEvento(this.nomeevento).subscribe(evento => {
      console.log(evento);
      this.queryService.sendEvento(evento);
    })
  }

}
