export class MainController {
  constructor ($http) {
    'ngInject';
    this.$http = $http;
    this.getMessages();
  }

  getMessages() {
      var viewModel = this;
      this.$http.get('http://localhost:5000/api/message').then(function(result) {
          viewModel.messages = result.data;
      });
  }
  postMessage() {
      this.$http.post('http://localhost:5000/api/message', {msg: this.message});
  }
}
