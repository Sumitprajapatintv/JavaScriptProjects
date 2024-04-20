const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

function add_task() {
  if (inputBox.value == "") {
    alert("You Must Have To Write Something");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      console.log(e.target.tagName);
      console.log(e.target.classList);
      e.target.classList.toggle("checked");
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
