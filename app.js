let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNote() {
  const noteText = document.getElementById("note").value;
  if (noteText === "") return;

  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
  document.getElementById("note").value = "";
  displayNotes();
}

function displayNotes() {
  const list = document.getElementById("notesList");
  list.innerHTML = "";

  notes.forEach((note) => {
    const li = document.createElement("li");
    li.textContent = note;
    list.appendChild(li);
  });
}

displayNotes();
