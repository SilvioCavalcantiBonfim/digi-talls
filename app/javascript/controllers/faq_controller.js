import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="faq"
export default class extends Controller {
  static targets = ["content", "icon", "button"];

  toggle() {
    const content = this.contentTarget;
    const icon = this.iconTarget;
    const button = this.buttonTarget;

    button.classList.toggle("faq-color");
    icon.classList.toggle("rotate-180");

    const isHidden = content.classList.contains("hidden");

    if (isHidden) {
      content.classList.remove("hidden");
      content.classList.remove("scale-out-ver-top");
      content.classList.add("scale-in-ver-top");
    } else {
      content.classList.remove("scale-in-ver-top");
      content.classList.add("scale-out-ver-top");
      setTimeout(() => {
        content.classList.add("hidden");
      }, 200);
    }
  }
}
