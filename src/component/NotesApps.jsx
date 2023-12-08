import { useEffect, useState } from 'react';
import { formattedData, formatDate } from '../utils/data';
import NotesInput from './NotesInput';
import NotesList from './NotesList';
import Navbar from './Navbar';
import '../styles/index.css';

const NotesApps = () => {
  const [notes, setNotes] = useState(() => {
    // Memuat data dari local storage saat komponen dimuat
    const storedData = localStorage.getItem('formattedData');
    return storedData ? JSON.parse(storedData) : formattedData;
  });

  const initialDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    // Menyimpan data ke local storage saat terjadi perubahan pada state 'notes'
    localStorage.setItem('formattedData', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleThemeSwitch = () => {
    setDarkMode(darkMode === "dark" ? "" : "dark");
  };

  const onDeleteHandler = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const onAddNotesHandler = ({ title, body }) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: +new Date(),
        title,
        body,
        createdAt: formatDate(+new Date()),
        archived: false,
      },
    ]);
  };

  const onToggleArchived = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div>
      <Navbar darkMode={darkMode} handleThemeSwitch={handleThemeSwitch}/>
      <div className='pt-24'>
        <NotesInput addNotes={onAddNotesHandler} />
        <NotesList
          activeNotes={activeNotes}
          archivedNotes={archivedNotes}
          onDelete={onDeleteHandler}
          onToggleArchived={onToggleArchived}
        />
      </div>
    </div>
  );
};

export default NotesApps;
