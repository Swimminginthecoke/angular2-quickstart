import { Component } from "@angular/core";
import { Site } from "./site";

@Component({
    moduleId : module.id,
    selector : "site-form",
    templateUrl : "site-form.component.html"
})

export class SiteFormComponent {
    urls = ["www.github.com", "www.stackoverflow.com", "www.facebook.com","www.taobao.com"];

    model = new Site(1, "test", this.urls[0], 10000);
    Submited = false;
    onSubmit() { this. Submited = true; }

    get diagnostic() { return JSON.stringify(this.model); }
}