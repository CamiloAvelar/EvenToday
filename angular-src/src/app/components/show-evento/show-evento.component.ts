import { Component, OnInit } from '@angular/core';

import { QuerysService } from '../../services/querys.service';

@Component({
  selector: 'app-show-evento',
  templateUrl: './show-evento.component.html',
  styleUrls: ['./show-evento.component.css']
})
export class ShowEventoComponent implements OnInit {

  data: any;

  constructor(private queryService: QuerysService) { }

  ngOnInit() {
    this.queryService.currentevento.subscribe(data => {
      this.data = data;
    });
  }

}
