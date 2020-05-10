import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookListComponent } from './book-list/book-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [
		// Array : names of componenets in project
		AppComponent,
		HomeComponent,
		LoginComponent,
		RegisterComponent,
		BookListComponent,
		NavbarComponent,
		FooterComponent
	],
	imports: [
		// Array : libraries used in project
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
