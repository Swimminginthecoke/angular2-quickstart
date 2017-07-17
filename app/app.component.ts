import { Component } from "@angular/core";
import { Site } from "./site";
@Component({
    selector : "my-app",
    template : "<h1>{{ title }}</h1>"
    + "<h2>My favorite web site: {{ mySite }}</h2>"
    + "<p>Site List:</p>"
    + "<ul>"
    + "<li *ngFor='let site of sites'>  {{ site.name }} </li>"
    + "</ul>"
    + "<p *ngIf='sites.length > 2'>Your sites more than 2.</p>"
})
export class AppComponent { 
    title = "Site list";
    mySite = "My first angular2 app.";
    sites = [
        new Site(1, "StackOverflow."),
        new Site(2, "GitHub."),
        new Site(3, "CnBlogs.")
    ];
}