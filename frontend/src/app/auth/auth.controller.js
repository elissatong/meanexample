export class AuthController {
    constructor($auth) {
        'ngInject';
        this.$auth = $auth;
    }

    register() {
        var viewModel = this;
        console.log("test auth");
        this.$auth.signup(this.user).then(function (token) {
            viewModel.$auth.setToken(token);
        });
    }
}
