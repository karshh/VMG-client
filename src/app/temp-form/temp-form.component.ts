import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormGroup, FormControl, Validators  } from '@angular/forms';
import { ScreenService } from '../screen.service';

@Component({
	selector: 'app-temp-form',
	templateUrl: './temp-form.component.html',
	styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent implements OnInit {

	tempForm: FormGroup;
	celcius: FormControl;
	farenhiet: FormControl;
	constructor(private screenService: ScreenService) { 

		this.createFormControls();
		this.tempForm = new FormGroup({
			celcius: this.celcius,
			farenhiet: this.farenhiet
		});

		screenService.messages.subscribe(msg => {			
			this.farenhiet.setValue(msg.farenhiet); 
			this.celcius.setValue(msg.celcius); 
		});
	}

	ngOnInit() {
	}
	private createFormControls(): void {
		this.celcius = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
		this.farenhiet = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
	}

	submitTempForm(request) {

		let message = {'celcius': this.celcius.value, 'farenhiet': this.farenhiet.value, 'request': request };
		this.screenService.messages.next(message);

		return false;
	}

	submit() {
		return false;
	}
}
