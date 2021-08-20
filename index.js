//Variables
const inputForm = document.querySelector(".add-note");
const inputBar = document.querySelectorAll(".input-bar");

const btn = document.querySelector(".btn");
const eventContainer = document.querySelector(".event-container");

//Add events
function handleEvents(e) {
  e.preventDefault();

  let newEvent = document.createElement("div");
  newEvent.classList.add("event");
  let eventList = document.createElement("ul");
  eventList.classList.add("event-list");
  newEvent.appendChild(eventList);

  let time = document.querySelector(".time-bar").value;
  let eventTime = document.createElement("h4");
  eventTime.innerHTML = `When: ${time}`;
  eventTime.classList.add("event-list-item");
  newEvent.insertBefore(eventTime, eventList);

  inputBar.forEach(function (el) {
    const inputID = el.id;
    const inputValue = el.value;
    const eventListItem = document.createElement("li");
    eventListItem.classList.add("event-list-item");

    switch (el.id) {
      case "what":
        text = "What:";
        break;

      case "trigger":
        text = "Why:";
        break;

      case "where":
        text = "Where:";
        break;

      case "solution":
        text = "Solution:";
    }

    eventListItem.innerHTML = `${text} ${inputValue}`;
    eventList.appendChild(eventListItem);
  });

  eventContainer.appendChild(newEvent);
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete-btn");
  newEvent.appendChild(deleteButton);

  inputForm.reset();
}

//Delete events
function deleteEvent(e) {
  if (e.target.classList.contains("delete-btn")){
      console.log(e);
  const newEventEl = e.target.parentElement;
  newEventEl.remove();
  } else {
    return;
  }
}

//Event listeners
btn.addEventListener("click", handleEvents);
eventContainer.addEventListener("click", deleteEvent);

//Working on local storage portion
function storedData() {
  localStorage.setItem("journalEntry", newEvent);
  const storedInput = localStorage.getItem("journalEntry");

  //  if(storageInput) {

  //  }
}
