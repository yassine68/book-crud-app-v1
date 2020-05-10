import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: [ './test.component.css' ]
})
export class TestComponent implements OnInit {
	// fileds
	private name: string = 'Yassine ENNAJEM';
  private imageUrl: string = 'assets/images/bookLogo.png';
  
  public getImageUrl() { return this.imageUrl }; // Method
  get Name() { return this.name;} // Property

  // Function 
  public DisplayName(nameParameter:string) {
    alert(`Hello ${nameParameter}`);
  }


	constructor() {}

	ngOnInit(): void {}
}
