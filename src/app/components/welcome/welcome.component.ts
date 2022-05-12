import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  user = {
    firstName: "",
    isSubscribed: false,
    email: "",
  };
  steps = {
    showWelcome: false,
    askForFirstName: true,
    askForEmail: false,
    askToSubscribe: false,
    subscribedSucces: false,
  };
  errorMessage = "";
  error = false;

  constructor() {}

  updateName(firstName: string) {
    this.user.firstName = firstName;
    if (firstName.length >= 3) {
      setTimeout(() => {
        this.steps.showWelcome = true;
        this.steps.askToSubscribe = true;
        this.steps.askForFirstName = false;
      }, 1500);
    }
  }

  agreedToSubscribed() {
    this.steps.askForEmail = true;
    this.steps.askToSubscribe = false;
  }


  updateEmail(emailRef: HTMLInputElement) {
    if (!this.user.email.includes("@") || this.user.email.length < 5) {
      this.steps.subscribedSucces = false;
      this.error = true;
      this.errorMessage = "The email is wrong";
      emailRef.value = "";
      return;
    }
    this.error = false;
    this.steps.askForEmail = false;
    this.steps.subscribedSucces = true;
    emailRef.value = "";
  }
  ngOnInit(): void {}
}
