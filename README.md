# Notepad with Autosave

A simple web-based notepad application that allows you to write notes and automatically save them to your browser’s local storage.

---

## Features

- **Autosave functionality:** Automatically saves notes every second when enabled.  
- **Feature toggle:** “Save My Notes” checkbox to enable or disable autosave.  
- **Persistent notes:** Previously saved notes are restored when reopening or refreshing the app.  
- **Simple UI:** A textarea for writing notes with placeholder text.  
- **Local Storage:** Notes are stored using the key `autosave-data`.  

---

## How to Use

1. Open the `index.html` file in your browser.  
2. Write your notes in the textarea.  
3. To enable autosave, check the **“Save My Notes”** checkbox.  
4. Notes will be automatically saved to local storage every 1 second.  
5. Uncheck the checkbox to disable autosave.  
6. Close or refresh the page — your notes will be retained if autosave was enabled.  

---

## File Structure

Notepad/
├── index.html # Main HTML file
├── style.css # (Optional) CSS for styling
└── README.md # Project documentation


---

## Technologies Used

- HTML  
- JavaScript (Vanilla JS)  
- Local Storage (Web API)  

---

## Notes

- The **“Save My Notes”** checkbox is unchecked by default.  
- Autosave only works when the checkbox is checked.  
- Local storage is used to save notes, so clearing browser data will delete the saved notes.
