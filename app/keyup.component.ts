import { Component } from "@angular/core";

@Component({
    selector : "key-up1",
    template : "<input (keyup)='onKey($event)'> <p> {{ values }} </p>"
})
export class KeyUpComponent_v1{
    values = "";
    onKey(event : KeyboardEvent){
        this.values += (<HTMLInputElement>event.target).value + ' | ';
    }
}