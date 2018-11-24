import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';

const URL = 'ws://vmg-server.usharma.ca';

export interface Message {
	celcius: string,
	farenhiet: string,
	request: string
}

@Injectable()
export class ScreenService {

	public messages: Subject<Message>;

	constructor(private wsService: WebsocketService) {
		this.messages = <Subject<Message>>wsService.connect(URL).map((response: MessageEvent): Message => {
				
				let data = JSON.parse(response.data);
				
				return {
					celcius: data.celcius,
					farenhiet: data.farenhiet,
					request: data.request
				}
			});
	}
}
