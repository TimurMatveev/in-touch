import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { LOCAL_STORAGE } from "./shared/providers/local-storage/local-storage.provider";
import { LocalStorageFallback } from "./shared/providers/local-storage/local-storage.fallback";

@NgModule({
	imports: [
		AppModule,
		ServerModule,
	],
	providers: [
		{
			provide: LOCAL_STORAGE,
			useClass: LocalStorageFallback,
		},
	],
	bootstrap: [AppComponent],
})
export class AppServerModule {}
