import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

// Importa los componentes independientes en lugar de declararlos
import { AppComponent } from "./app.component";
import { LoginComponent } from './Login/login/login.component';
import { TablaTramiteComponent } from './tabla-tramite/tabla-tramite.component';

@NgModule({
    // Elimina los componentes de 'declarations'
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        // Importa los componentes independientes aquí
        AppComponent,
        LoginComponent,
        TablaTramiteComponent
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }
