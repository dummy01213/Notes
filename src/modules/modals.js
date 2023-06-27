import out from "./content";

const addTask = (e) => {
    e.preventDefault();

    const cur_project = document.querySelector("#tasks-content");
    const project = cur_project.attributes["data-project"].value;
    const projects = JSON.parse(localStorage.getItem("projects"));
    const form = e.target;
    console.log(form);
    const time = form["time"].value;
    const title = form["name"].value;

    const new_project = {
        "title": title,
        "time": new Date(time),
    }

    projects[project][title] = new_project;
    console.log(project)
    localStorage.setItem("projects", JSON.stringify(projects))
    location.reload();
}

const newTaskModal = () => {
    const modal = document.createElement("div");
    const heading = document.createElement("h2");
    const form = document.createElement("form");
    const label = document.createElement("label");
    const name = document.createElement("input");
    const time = document.createElement("input");
    const btn = document.createElement("button");

    modal.classList.add("modal");
    modal.classList.add("center");
    modal.id = "task-modal"
    heading.innerText = "Start new project"
    form.type = "post";
    label.for = "name";
    label.innerText = "Task"
    name.id = "name";
    name.name = "name";
    name.setAttribute("required", "")
    time.type = "date";
    time.name = "time";
    time.setAttribute("required", "")
    btn.innerText = "Add";
    form.onsubmit = addTask;

    form.appendChild(label);
    form.appendChild(name);
    form.appendChild(time);
    form.appendChild(btn);

    modal.appendChild(form)

    return modal;
}

const addProject = (e) => {
    e.preventDefault();
    const projects = JSON.parse(localStorage.getItem("projects"))
    const form = e.target;
    const title = form["name"].value;
    projects[title] = {}
    localStorage.setItem("projects", JSON.stringify(projects))
    location.reload()
}

const newProjectModal = () => {
    const modal = document.createElement("div");
    const heading = document.createElement("h2");
    const form = document.createElement("form");
    const label = document.createElement("label");
    const name = document.createElement("input");
    const btn = document.createElement("button");

    modal.classList.add("modal");
    modal.classList.add("center");
    modal.id = "project-modal"
    heading.innerText = "Start new project"
    form.type = "post";
    label.for = "name";
    label.innerText = "Project name:"
    name.id = "name";
    name.name = "name";
    name.setAttribute("required", "")
    btn.innerText = "Add";
    form.onsubmit = addProject;

    form.appendChild(heading)
    form.appendChild(label);
    form.appendChild(name);
    form.appendChild(btn);

    modal.appendChild(form)

    return modal;
}

const modals = { newProjectModal, newTaskModal };

export default modals;