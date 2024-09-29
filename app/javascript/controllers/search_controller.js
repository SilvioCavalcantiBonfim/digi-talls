import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input"]

  handle(){
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.element.requestSubmit();
    }, 300);
  }
}
