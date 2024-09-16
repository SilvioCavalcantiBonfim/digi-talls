import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="faq"
export default class extends Controller {

  static targets = ["content", "icon"]

  toggle() {
    this.contentTarget.classList.toggle("hidden")
    if (this.contentTarget.classList.contains("hidden")) {
      this.iconTarget.textContent = "expand_more"
    } else {
      this.iconTarget.textContent = "expand_less"
    }
  }
}
