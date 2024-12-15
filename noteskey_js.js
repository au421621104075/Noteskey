var pop_page = document.querySelector(".pop_page")
var pop_box = document.querySelector(".pop_box")
function adds() {
    pop_page.style.display = "block"
    pop_box.style.display = "block"
}
//when add_content will clicked title,author,description added to block
var title = document.getElementById("title")
var author = document.getElementById("author")
var description = document.getElementById("description")
var block = document.querySelector(".block")
var add_content = document.getElementById("add_content")
add_content.addEventListener("click", function (event) {
    event.preventDefault()
    if (title.value === "" || author.value === "" || description.value === "") {
        alert("Please fill out all fields before adding a note.");
        return;
    }
    var div = document.createElement("div")
    div.setAttribute("class", "container")
    div.innerHTML = `<h2>${author.value}</h2>
                       <h3>${title.value}</h3>
                       <p>${description.value}</p>
                       <button onclick="remove(event)">Delete</button>`
    block.append(div)
})
var Delete_content = document.getElementById("Delete_content")
Delete_content.addEventListener("click", function (event) {
    event.preventDefault()
    title.value = ""
    author.value = ""
    description.value = ""
    pop_page.style.display = "none"
    pop_box.style.display = "none"
})
function remove(event) {
    event.target.parentElement.remove()
}
pop_page.addEventListener("click", function () {
    pop_page.style.display = "none";
    pop_box.style.display = "none";
});
