const inputForm = document.querySelector(".add-note");
const inputBar = document.querySelectorAll(".input-bar");

const btn = document.querySelector(".btn");
const eventContainer = document.querySelector(".event-container");

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
  inputForm.reset();
}

btn.addEventListener("click", handleEvents);

function storedData() {
  localStorage.setItem("journalEntry", newEvent);
  const storedInput = localStorage.getItem("journalEntry");

  //  if(storageInput) {

  //  }
}