import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ "input", "list" ]

  connect() {
  }

  addItem(event) {
    event.preventDefault()

    const item = `<li data-controller="item" class="list-group-item">
                    <div data-item-target="item" class="d-flex justify-content-between">
                      <p data-item-target="name">${this.inputTarget.value}</p>

                      <a  data-action="click->item#displayForm"
                          href="#" class="btn btn-warning">edit</a>
                      <a  data-action="click->item#removeItem"
                          href="#" class="btn btn-danger">x</a>
                    </div>
                    <form data-item-target="form" data-action="submit->item#editItem" class="row align-items-center mb-3 d-none">
                      <div class="col-9 offset-1">
                        <input  data-item-target="input"
                                type="text" class="form-control" >
                      </div>

                      <div class="col-1 d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary">Add</button>
                      </div>
                    </form>
                  </li>`;

    this.listTarget.insertAdjacentHTML('beforeend', item)
    this.inputTarget.value = ''
  }
}


// CAT
