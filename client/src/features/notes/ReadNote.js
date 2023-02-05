// create a new ReadNote component

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNoteById } from "./notesApiSlice";

export default function ReadNote() {
  const { noteId } = useParams();
  const note = useSelector((state) => selectNoteById(state, noteId));

  if (!note) {
    return <div>Note not found!</div>;
  }

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.text}</p>
    </div>
  );
}
