import { Component, OnInit } from '@angular/core';

import { QuerysService } from '../../services/querys.service';

@Component({
  selector: 'app-show-estabelecimento',
  templateUrl: './show-estabelecimento.component.html',
  styleUrls: ['./show-estabelecimento.component.css']
})
export class ShowEstabelecimentoComponent implements OnInit {

  data: any;

  constructor(private queryService: QuerysService) { }

  ngOnInit() {
    this.queryService.currentestabelecimento.subscribe(data => {
      this.data = data;
    });
  }

}
