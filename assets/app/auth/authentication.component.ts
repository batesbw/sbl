import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-authentication',
    template: `
        <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-login">
                <div class="panel-body">
                <div class="row">
                <router-outlet></router-outlet>
          </div>
        </div>
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-6 tabs">
                    <div class="login">
                    <a id="login-form-link" [routerLink]="['signin']">Login</a>
                    </div>
                    </div>
                    <div class="col-xs-6 tabs">
                    <div class="register">
                    <a id="register-form-link" [routerLink]="['signup']">Register</a>
                    </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  </div>
</div>
    `
})
export class AuthenticationComponent {
    constructor(private authService: AuthService) {}

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}