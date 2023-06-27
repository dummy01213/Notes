const newProject = () => {
    const projectModal = document.getElementById("project-modal");
    projectModal.classList.toggle("active");
}

const newProjectButton = () => {
    const btn = document.createElement("button");
    btn.innerText = "Add Project";
    btn.onclick = newProject;
    return btn;
}

const nav = () => {
    const nav = document.createElement("div");
    nav.classList.add("nav");
    const logo = document.createElement("h2");
    logo.innerText = "To Do";
    const addProjectButton = newProjectButton();
    nav.appendChild(logo);
    nav.appendChild(addProjectButton);
    return nav;
}

export default nav;