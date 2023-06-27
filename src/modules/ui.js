import nav from "./navbar";
import out from "./content"
import modals from "./modals";

const ui = (e) => {
    document.body.appendChild(nav());
    document.body.appendChild(out.displayContent());
    out.createMain();
    document.body.appendChild(modals.newProjectModal());
    document.body.appendChild(modals.newTaskModal());
} 

export default ui;