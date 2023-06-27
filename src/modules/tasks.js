const generateTasks = (key) => {
    // console.log(key)
    const project = JSON.parse(localStorage.getItem("projects"))[key];
    const tasks_div = document.getElementById("tasks-content");
    tasks_div.innerHTML = "";
    // console.log(project)
    const btn  = document.createElement("button");
    const tasks = document.createElement("div");

    btn.innerText = "Add task";
    btn.onclick = () => {

        const modal = document.querySelector("#task-modal");
        modal.classList.toggle("active")
    }

    tasks_div.appendChild(btn);
    
    for (const [key, task] of Object.entries(project)){
        const title = document.createElement("p");
        title.innerText = task.title;
        tasks.appendChild(title);
    }

    tasks_div.appendChild(tasks);
    tasks_div.setAttribute("data-project", key)

}

export default generateTasks;