const Note = require("../models/Note");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

const getAllNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({}).lean();

  // Check if notes were found
  if (!notes?.length) {
    return res.status(404).json({ message: "No notes found" });
  }

  // Add username to each note before sending the response
  const notesWithUser = await Promise.all(
    notes.map(async (note) => {
      const user = await User.findById(note.user).lean().exec();
      if (!user || !user.username) {
        return note;
      } else return { ...note, username: user?.username };
    })
  );

  res.json(notesWithUser);
});

const createNewNote = asyncHandler(async (req, res) => {
  const { user, title, text } = req.body;

  // Confirm data
  if (!user || !title || !text) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check for duplicate note
  const duplicate = await Note.findOne({ title }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: "Note title already exists" });
  }

  // Create and store new note
  const note = await Note.create({ user, title, text });

  if (note) {
    res.status(201).json({
      message: `New note ${title} created`,
    });
  } else {
    res.status(400).json({ message: "Invalid note data received" });
  }
});

const updateNote = asyncHandler(async (req, res) => {
  const { id, user, title, text, completed } = req.body;
  // Confirm data
  if (!id || !user || !title || !text || typeof completed !== "boolean") {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Confirm note exists to update
  const note = await Note.findById(id).exec();
  if (!note) {
    return res.status(400).json({ message: "Note not found" });
  }

  // Check for duplicate title
  const duplicate = await Note.findOne({ title }).lean().exec();
  // Allow renaming of the original note
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: "Duplicate note title" });
  }

  note.user = user;
  note.title = title;
  note.text = text;
  note.completed = completed;

  const updatedNote = await note.save();

  res.json(`'${updatedNote.title}' updated`);
});

const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.body;

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: "Note ID required" });
  }

  // Confirm note exists to delete
  const note = await Note.findById(id).exec();
  if (!note) {
    return res.status(400).json({ message: "Note not found" });
  }

  const result = await note.deleteOne();
  const reply = `Note '${result.title}': ${result._id} has been deleted`;

  res.json(reply);
});

// read single note by ID by ticket number
const getSingleNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id).lean().exec();

  // Check if note was found
  if (!note) {
    return res.status(404).json({ message: "No note found" });
  }

  // Add username to note before sending the response
  const user = await User.findById(note.user).lean().exec();
  if (!user || !user.username) {
    return res.status(404).json({ message: "No user found" });
  }

  const noteWithUser = { ...note, username: user?.username };

  res.json(noteWithUser);
});

module.exports = {
  getAllNotes,
  createNewNote,
  updateNote,
  deleteNote,
  getSingleNote,
};
