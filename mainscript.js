let addBtnEl = document.getElementById("add-btn")
let greetingEl = document.getElementById("greeting")
let toDoInputEl = document.getElementById("to-do-input")
let deleteAllEl = document.getElementById("delete-all-btn")

//get the value from the previous welcome page
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('userName');

greetingEl.innerHTML = `Hi ${userName}, Here’s your To-Do List.`


// click to add to the list

let listedContainerEl = document.getElementById("listed-container")

addBtnEl.addEventListener("click", function() {
    let toDoValue = toDoInputEl.value
    if(!toDoValue) {
        return;
    }

    let newDiv = document.createElement("div")
    newDiv.classList.add("listed-todo")
    newDiv.innerHTML = toDoValue
    listedContainerEl.appendChild(newDiv)

    toDoInputEl.value = ""

    let newButton = document.createElement("button")
    newButton.classList.add("delete-listed-button")
    newButton.innerHTML = `🗑️`
    newDiv.appendChild(newButton)

    newButton.addEventListener("click",function() {
        listedContainerEl.removeChild(newDiv)
    })

})


//press enter to add to list

toDoInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let toDoValue = toDoInputEl.value
        if(!toDoValue) {
            return;
        }


        let newDiv = document.createElement("div")
        newDiv.classList.add("listed-todo")
        newDiv.innerHTML = toDoValue
        listedContainerEl.appendChild(newDiv)

        toDoInputEl.value = ""

        let newButton = document.createElement("button")
        newButton.classList.add("delete-listed-button")
        newButton.innerHTML = `🗑️`
        newDiv.appendChild(newButton)

        newButton.addEventListener("click",function() {
            listedContainerEl.removeChild(newDiv)
        })

    }
})

//delete all button

deleteAllEl.addEventListener("click", function() {
        while(listedContainerEl.firstChild) {
            listedContainerEl.removeChild(listedContainerEl.firstChild)
        }
    })



//logout button

let deleteBtnEl = document.getElementById("logout-btn")

deleteBtnEl.addEventListener("click", function () {
    window.location.href = `index.html`
})


