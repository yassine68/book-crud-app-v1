import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: [ './test.component.css' ]
})
export class TestComponent implements OnInit {
	// fileds
	private ligne: number = 1;
	private name: string = 'Yassine ENNAJEM';
  private imageUrl: string = 'assets/images/bookLogo.png';
  private bookList = [];
  /*
	private bookList: string[] = [
		'Learn HTML5 & Css3',
		'get Started With Angular 9',
		'C" From Scratch',
		'A key To A Future Java',
		'Entity Framework Core',
		'ASP.NET Core & Angular 9',
		'best Practice From C#',
		'Delegates C#'
	];
*/
	public getImageUrl() {
		return this.imageUrl;
	} // Method
	get Name() {
		return this.name;
	} // Property
	get BookList() {
		return this.bookList;
	}

	// Function
	public DisplayName(nameParameter: string) {
		alert(`Hello ${nameParameter}`);
	}

	// Function to Control Ligne in HTML
	public PositionNumber() {
		if (this.ligne % 2 === 0) {
			this.ligne++;
			return true;
		} else {
			this.ligne++;
			return false;
		}
	}

	constructor() {}

	ngOnInit(): void {}
}
