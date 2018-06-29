import { Component, OnInit } from '@angular/core';

import { QuerysService } from '../../services/querys.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  data: any;

  constructor(private queryService: QuerysService) { }

  ngOnInit() {
    this.queryService.currentusuario.subscribe(data => {
      this.data = data;
    });
  }

}
