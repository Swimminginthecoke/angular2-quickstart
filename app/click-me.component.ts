import { Component } from "@angular/core";

@Component({
    selector : "click-me",
    template : "<button (click)='onClickMe()'>Hit me!</button> {{ clickMessage }}"
})

export class ClickMeComponent {
    clickMessage = "";
    onClickMe(){
        this.clickMessage = "ADSFSDKLJFLKSDJFKLXCNVNXCM<VNM<XNCVNX<CNV<MSDFNS<DNF";
    }
}