const notes = document.querySelector(".notes");
const saveCheckbox = document.querySelector("#save");

const savedNotes = localStorage.getItem("autosave-data");
if (savedNotes) {
  notes.value = savedNotes;
}

saveCheckbox.checked = false;

setInterval(() => {
  if (saveCheckbox.checked) {
    localStorage.setItem("autosave-data", notes.value);
    console.log("Autosaved:", notes.value);
  }
}, 1000);
