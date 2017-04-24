import { Component, Input, forwardRef } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'rating',
	templateUrl: 'rating.component.html',
	styleUrls: [ 'rating.component.css' ]
})

export class RatingComponent { 

	@Input()
	model: number;
	
}