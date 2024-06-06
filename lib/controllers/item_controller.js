import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ "item", "form", "name", "input" ]

  removeItem() {
    this.element.remove()
  }

  editItem() {

  }

  displayForm() {
    this.formTarget.classList.remove('d-none')
    this.itemTarget.classList.add('d-none')
    this.inputTarget.value = this.nameTarget.innerText
  }
}

// CATV 
