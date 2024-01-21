// NoteContainer.js

import React, { useState } from "react";
import Note from "../Note/Note";

import "./NoteContainer.css";

function NoteContainer(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" or "desc"

  const filteredAndSortedNotes = props.notes
    .filter((note) => {
      const searchText = note.text.toLowerCase();
      const searchTermLower = searchTerm.toLowerCase();

      return searchText.includes(searchTermLower);
    })
    .sort((a, b) => {
      const textA = a.text.toLowerCase();
      const textB = b.text.toLowerCase();

      if (sortOrder === "asc") {
        return textA.localeCompare(textB);
      } else {
        return textB.localeCompare(textA);
      }
    });

  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="sort-dropdown">
        <label htmlFor="sortOrder">Sort Order: </label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="note-container_notes custom-scroll">
        {filteredAndSortedNotes.length > 0 ? (
          filteredAndSortedNotes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h3>No Notes present</h3>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;
