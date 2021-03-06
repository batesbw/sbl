import { Component } from "@angular/core";

@Component({
    selector: 'app-messages',
    template: `
        <div class="row user-menu-container square">
        <div class="row">
            <app-message-input></app-message-input>
        </div>
        <div class="row">
            <app-message-list></app-message-list>
        </div>
        </div>
    `
})
export class MessagesComponent {

}