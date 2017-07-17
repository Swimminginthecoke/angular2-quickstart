import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { SiteFormComponent } from "./site-form.component";


@NgModule({
    imports : [
        BrowserModule,
        FormsModule
    ],
    declarations : [
        AppComponent,
        SiteFormComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
