// NoteDetails.js

import React from "react";
import "./NoteDetails.css"; // Import the NoteDetails CSS

function NoteDetails({ selectedNote }) {
  if (!selectedNote) {
    return <div className="note-details">Please select a note to view details.</div>;
  }

  return (
    <div className="note-details">
      <h3>{selectedNote.title}</h3>
      <p>{selectedNote.text}</p>
      {/* Add other details as needed */}
    </div>
  );
}

export default NoteDetails;
