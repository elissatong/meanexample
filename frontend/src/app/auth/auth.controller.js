export class AuthController {
    constructor($auth) {
        'ngInject';
        this.$auth = $auth;
    }

    register() {
        console.log("test auth");
        this.$auth.signup(this.user);
    }
}
