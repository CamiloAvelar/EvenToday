import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  public isNomeCollapsed = true;
  public isEstabCollapsed = true;
  public isEventoCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  onUserNameSubmit(){

  }

  onEstabelecimentoSubmit(){

  }

  onEventoSubmit(){

  }

}
