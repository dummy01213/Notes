import generateTasks from "./tasks";

const getProjectsFromStorage = () => {
    if (!localStorage.getItem("projects")){
        const projects = {
            "tasks": {
                "default": {
                    "parent": "tasks",
                    "title": "This is a default task",
                    "time": new Date(),
                }
            }
        }
        localStorage.setItem("projects", JSON.stringify(projects));
    }
    return JSON.parse(localStorage.getItem("projects"));
}

const projects = getProjectsFromStorage();

const createMain = () => {
    const key = Object.keys(projects)[0]
    return generateTasks(key)
}

const createSidebar = () => {
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    
    for (const [key, project] of Object.entries(projects)){
        const container = document.createElement("div");
        const heading = document.createElement("h3");
        heading.innerText = key;
        container.classList.add("sidebar-project")
        container.id = key;
        container.appendChild(heading);
        container.onclick = () => {generateTasks(key)};
        sidebar.appendChild(container)
    }
    return sidebar;
}

const displayContent = () => {
    const content = document.createElement("div");
    const sidebar = createSidebar();
    const tasks = document.createElement("div");
    content.classList.add("content");
    tasks.id = "tasks-content";
    content.appendChild(sidebar);
    content.appendChild(tasks)
    return content;
}

const out = { displayContent, createMain }

export default out;