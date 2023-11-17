const inputBox =document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("Please Enter Your Task");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //close icon
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

// checked/unchecked, remove task
listContainer.addEventListener("click", function(e){
    if(e.target.tagName  === "LI"){
        // e.target.classList.add('ckecked');
        e.target.classList.toggle('checked');  
        
        let data = e.target.classList;
        console.log(data);
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
       
    }
}, false);;