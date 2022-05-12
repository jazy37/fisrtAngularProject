import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="main-content">
      <h1>Welcome to {{ title }}!</h1>
      <app-welcome></app-welcome>
    </div>
  `,
  styles: [
    `
      .main-content {
        text-align: center;
        font-family: sans-serif;
      }
    `,
  ],
})
export class AppComponent {
  title = "first-project";
}
