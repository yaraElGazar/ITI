const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Database instance
let db;

// HTML Elements
const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
const title = document.getElementById("title");
const hours = document.getElementById("deadline-hours");
const minutes = document.getElementById("deadline-minutes");
const day = document.getElementById("deadline-day");
const month = document.getElementById("deadline-month");
const year = document.getElementById("deadline-year");
const notificationBtn = document.getElementById("enable");

// Check notification permission state
if (
  Notification.permission === "denied" ||
  Notification.permission === "default"
) {
  notificationBtn.style.display = "block";
} else {
  notificationBtn.style.display = "none";
}

// Open database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  db = DBOpenRequest.result;

  // Display all the to-do list data already in the IndexedDB
  displayData();
};

// Check if a new version of the database needs to be created
DBOpenRequest.onupgradeneeded = (event) => {
  db = event.target.result;

  // Create an objectStore for this database
  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // Define what data items the objectStore will contain
  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });
};

function displayData() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.lastChild);
  }

  // Cursor list of all the different data items in the db to iterate through
  const objectStore = db.transaction("toDoList").objectStore("toDoList");
  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    // Check if the list finished
    if (!cursor) {
      return;
    }

    // Check which suffix the deadline day of the month needs
    const { hours, minutes, day, month, year, notified, taskTitle } =
      cursor.value;
    const ordDay = ordinal(day);

    //HTML code
    const toDoText = `${taskTitle} — ${hours}:${minutes}, ${month} ${ordDay} ${year}.`;
    const listItem = createListItem(toDoText);

    if (notified === "yes") {
      listItem.style.textDecoration = "line-through";
      listItem.style.color = "rgba(255, 0, 0, 0.5)";
    }
    taskList.appendChild(listItem);

    // delete button
    const deleteButton = document.createElement("button");
    listItem.appendChild(deleteButton);
    deleteButton.textContent = "X";

    // add data-task attribute to name the tasks
    deleteButton.setAttribute("data-task", taskTitle);

    deleteButton.onclick = (event) => {
      deleteItem(event);
    };

    // continue on to the next item in the cursor
    cursor.continue();
  };
}

// Add listener for clicking the submit button
taskForm.addEventListener("submit", addData, false);

function addData(e) {
  // Prevent sumbition every time a task is added
  e.preventDefault();

  // put the input fields values in an object
  const newItem = [
    {
      taskTitle: title.value,
      hours: hours.value,
      minutes: minutes.value,
      day: day.value,
      month: month.value,
      year: year.value,
      notified: "no",
    },
  ];

  const transaction = db.transaction(["toDoList"], "readwrite");

  const objectStore = transaction.objectStore("toDoList");

  const objectStoreRequest = objectStore.add(newItem[0]);
  objectStoreRequest.onsuccess = (event) => {
    // Clear the form, ready for adding the next entry
    title.value = "";
    hours.value = null;
    minutes.value = null;
    day.value = 01;
    month.value = "January";
    year.value = 2020;
  };

  transaction.oncomplete = () => {
    displayData();
  };
}

function deleteItem(event) {
  // Check which task to delete
  const dataTask = event.target.getAttribute("data-task");

  // delete from db
  const transaction = db.transaction(["toDoList"], "readwrite");
  transaction.objectStore("toDoList").delete(dataTask);

  // Remove from HTML
  transaction.oncomplete = () => {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  };
}

// Check whether the deadline for each task is up or not
function checkDeadlines() {
  // Check whether notifications are enabled or denied
  if (
    Notification.permission === "denied" ||
    Notification.permission === "default"
  ) {
    notificationBtn.style.display = "block";
  } else {
    notificationBtn.style.display = "none";
  }

  // Current time and date
  const now = new Date();

  // Current minutes, hours, day of the month, month, year and seconds
  const minuteCheck = now.getMinutes();
  const hourCheck = now.getHours();
  const dayCheck = now.getDate();
  const monthCheck = now.getMonth();
  const yearCheck = now.getFullYear();

  // Open a new transaction
  const objectStore = db
    .transaction(["toDoList"], "readwrite")
    .objectStore("toDoList");

  // Open a cursor to iterate through all the data items in the IndexedDB
  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (!cursor) return;
    const { hours, minutes, day, month, year, notified, taskTitle } =
      cursor.value;

    // convert the month names into a month number
    const monthNumber = MONTHS.indexOf(month);
    if (monthNumber === -1)
      throw new Error("Incorrect month entered in database.");

    if (
      parseInt(hours) === hourCheck &&
      parseInt(minutes) === minuteCheck &&
      parseInt(day) === dayCheck &&
      parseInt(monthNumber) === monthCheck &&
      parseInt(year) === yearCheck &&
      notified === "no"
    ) {
      // If the numbers all do match, run the createNotification() function to create a system notification
      // but only if the permission is set
      if (Notification.permission === "granted") {
        createNotification(taskTitle);
      }
    }

    // Move on to the next cursor item
    cursor.continue();
  };
}

// Ask for permission when the 'Enable notifications' button is clicked
function askNotificationPermission() {
  if (
    Notification.permission === "default" ||
    Notification.permission === "denied"
  ) {
    Notification.requestPermission().then((status) => {
      console.log(status);
      if (status == "granted") {
        notificationBtn.style.display = "none";
      } else {
        notificationBtn.style.display = "block";
      }
    });
  }
}

// Wire up notification permission functionality to 'Enable notifications' button
notificationBtn.addEventListener("click", askNotificationPermission);

function createListItem(contents) {
  const listItem = document.createElement("li");
  listItem.textContent = contents;
  return listItem;
}

// Create a notification with the given title
function createNotification(title) {
  // Create and show the notification
  const img = "/to-do-notifications/img/icon-128.png";
  const text = `HEY! Your task "${title}" is now overdue.`;
  const notification = new Notification("To do list", {
    body: text,
    icon: img,
  });

  // update notified to 'yes'
  const objectStore = db
    .transaction(["toDoList"], "readwrite")
    .objectStore("toDoList");

  // Get the to-do list object that has this title as its title
  const objectStoreTitleRequest = objectStore.get(title);

  objectStoreTitleRequest.onsuccess = () => {
    // Grab the data object returned as the result
    const data = objectStoreTitleRequest.result;

    data.notified = "yes";

    const updateTitleRequest = objectStore.put(data);

    updateTitleRequest.onsuccess = () => {
      displayData();
    };
  };
}

// Using a setInterval to run the checkDeadlines() function every second
setInterval(checkDeadlines, 1000);

// Returning the day of the month followed by an ordinal (st, nd, or rd)
function ordinal(day) {
  const n = day.toString();
  const last = n.slice(-1);
  if (last === "1" && n !== "11") return `${n}st`;
  if (last === "2" && n !== "12") return `${n}nd`;
  if (last === "3" && n !== "13") return `${n}rd`;
  return `${n}th`;
}
