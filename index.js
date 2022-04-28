function addLists() {
    document.getElementById("popNewList").style.display = "grid";
    document.getElementById("mainContainer").style.filter = "blur(5px)";
}



function closeTodo() {
    document.getElementById("popNewList").style.display = "none";
    document.getElementById("popNewItem").style.display = "none";
    document.getElementById("mainContainer").style.filter = "blur(0)";
}



const tasklist = [];

function addTodo() {

    document.getElementById("popNewList").style.display = "none";
    document.getElementById("content").style.display = "none";
    document.getElementById("mainContainer").style.filter = "blur(0)";
    const name = document.getElementById("name").value;


    const tempObject = {
        taskname: name,
        itemlist: [],
    }

    tasklist.push(tempObject);

    addtaskonScreen(); // add content on html page

}


function addtaskonScreen() {

    const element1 = document.createElement("h3");
    element1.setAttribute("class", "child");
    document.getElementById("parent").appendChild(element1);


    const element2 = document.createElement("div"); // --------------------------------- another div inside child
    element2.setAttribute("class", "innertext");
    element2.innerText = tasklist[tasklist.length-1].taskname; // array index's taskname
    document.getElementsByClassName("child")[tasklist.length-1].appendChild(element2);


    const hr = document.createElement("hr");
    document.getElementsByClassName("child")[tasklist.length-1].appendChild(hr);

    
    const element3 = document.createElement("span");    // ----------------------------- delete btn
    element3.setAttribute("class", "material-symbols-outlined");
    element3.setAttribute("id", "deleteTodoBtn");
    element3.setAttribute("onclick", "deleteTodoList()");
    element3.innerText = "delete_forever";
    document.getElementsByClassName("child")[tasklist.length-1].appendChild(element3);


    const element4 = document.createElement("span");    // ---------------------------- add btn
    element4.setAttribute("class", "material-symbols-outlined");
    element4.setAttribute("id", "addListBtn");
    element4.setAttribute("onclick", "addItemList()");
    element4.innerText = "add_circle";
    document.getElementsByClassName("child")[tasklist.length-1].appendChild(element4);


}


function deleteTodoList() {

    
    
}




function addItemList() {
    document.getElementById("popNewItem").style.display = "grid";
    document.getElementById("mainContainer").style.filter = "blur(5px)";
}

const tasklist2 = [];

const addtask2 = ()=> {

    document.getElementById("popNewItem").style.display="none";
    document.getElementById("mainContainer").style.filter = "blur(0)";

    const name2 = document.getElementById("card2").value;

    const tempObject2 = {
        taskname2:name2
    }
    tasklist2.push(tempObject2);

    cardsonscreen2();
}

function cardsonscreen2() {

    const element5 = document.createElement("div");
    element5.setAttribute("class","dummy");

    element5.innerText = tasklist2[tasklist2.length-1].taskname2;

    const existingChild = document.getElementsByClassName("child")[tasklist.length-1];
    existingChild.appendChild(element5);
    
    const btn = document.createElement("button");
    btn.setAttribute("onclick","markdone()");
    btn.innerText = "Mark Done";
    element5.appendChild(btn);


}

function markdone() {
    
    let mark = document.getElementsByClassName("dummy")[dummy.selectedIndex]

}




