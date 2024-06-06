import { Application, Controller } from 'stimulus';
import ListController from "./controllers/list_controller.js";
import ItemController from "./controllers/item_controller.js";

window.Stimulus = Application.start()
Stimulus.register("list", ListController)
Stimulus.register("item", ItemController)
