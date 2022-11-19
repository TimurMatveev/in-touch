import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LOCAL_STORAGE } from "./shared/providers/local-storage/local-storage.provider";
import { HttpClientModule } from "@angular/common/http";
import { TranslationModule } from "./shared/translation/translation.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule.withServerTransition({appId: 'serverApp'}),
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		TranslationModule,
	],
	providers: [
		{
			provide: LOCAL_STORAGE,
			useValue: localStorage,
		},
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
