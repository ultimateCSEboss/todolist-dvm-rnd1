const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value === '') {
        alert("Add a Task Atleast?!");
    }
    
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u1F5D1";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();

}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classlist.toogle("checked");
        saveData();

    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }


}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();