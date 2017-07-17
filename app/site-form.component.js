"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var site_1 = require("./site");
var SiteFormComponent = (function () {
    function SiteFormComponent() {
        this.urls = ["www.github.com", "www.stackoverflow.com", "www.facebook.com", "www.taobao.com"];
        this.model = new site_1.Site(1, "test", this.urls[0], 10000);
        this.Submited = false;
    }
    SiteFormComponent.prototype.onSubmit = function () { this.Submited = true; };
    Object.defineProperty(SiteFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    return SiteFormComponent;
}());
SiteFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "site-form",
        templateUrl: "site-form.component.html"
    })
], SiteFormComponent);
exports.SiteFormComponent = SiteFormComponent;
//# sourceMappingURL=site-form.component.js.map