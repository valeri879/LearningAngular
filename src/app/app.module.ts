import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PageComponentsComponent } from './page-components/page-components.component';
// page componetns
import { headerComponentsComponent } from './page-components/header/header-components.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        PageComponentsComponent,
        headerComponentsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        // no need to place any providers due to the `providedIn` flag...
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }