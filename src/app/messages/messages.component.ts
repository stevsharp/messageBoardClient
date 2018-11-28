import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //messages = [{text:'some text', owner:'Time'},{text:'other message', owner:'Jane'}];
  messages = [];

  constructor(private webService: WebService) { }

  async ngOnInit() {
    const response = await this.webService.getMessages();
     console.log(response);
  }

}
