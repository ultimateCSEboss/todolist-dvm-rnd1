const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("write something here");
    }
    
    else{
        let li = document.createElement("li");
        let innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = documentcreateElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }

    inputBoxl.value = "";
    saveData();

}

listContainer.addEventListener("click", function(e)) {
    if (e.target.tagName === "LI") {
        e.target.classlist.toogle("checked");
        saveData();

    }

    else if(e.target.tagName === "SPAN");
    e.target.parentElement.remove();
    saveData();


}, false);

function saveData() {
    localStorage.setItem("Data", listContainer.innerHTML);
}

function showTask() {
    listContainer.ineerHTML = localStorage.getItem("data");
}

showTask();