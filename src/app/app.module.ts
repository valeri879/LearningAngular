import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './page-components/header/header.component';
import { FooterComponent } from './page-components/footer/footer.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserNotesComponent } from './user-notes/user-notes.component';
// modules
import {NgxPaginationModule} from 'ngx-pagination';
// page componetns

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        SignUpComponent,
        UserNotesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgxPaginationModule
    ],
    providers: [
        // no need to place any providers due to the `providedIn` flag...
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }