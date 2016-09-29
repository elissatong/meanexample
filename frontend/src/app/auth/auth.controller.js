export class AuthController {
    constructor($auth) {
        'ngInject';
        this.$auth = $auth;
    }

    register() {
        var viewModel = this;
        console.log("Register user");
        this.$auth.signup(this.user).then(function (token) {
            viewModel.$auth.setToken(token);
        });
    }

    login() {
        var viewModel = this;
        console.log("Login user");
        this.$auth.login(this.login.user).then(function (token) {
            viewModel.$auth.setToken(token);
        });
    }
}
