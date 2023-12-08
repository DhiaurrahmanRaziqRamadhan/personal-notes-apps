import React from 'react'
import { formatDate, formattedData } from '../utils/data'
import NotesInput from './NotesInput'
import NotesList from './NotesList'
import Navbar from './Navbar'
import '../styles/index.css'

class NotesApps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: formattedData,
      darkMode: true,
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this)
    this.onToggleArchived = this.onToggleArchived.bind(this)
    this.toggleDarkMode = this.toggleDarkMode.bind(this)
  }

  toggleDarkMode() {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }))
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((notes) => notes.id !== id)
    this.setState({ notes })
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: formatDate(+new Date()),
            archived: false,
          },
        ],
      }
    })
  }

  onToggleArchived(id) {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            archived: !note.archived, // Mengubah nilai archived
          }
        }
        return note
      })
      return { notes: updatedNotes }
    })
  }

  render() {
    // Pisahkan catatan menjadi dua kelompok berdasarkan archived
    const activeNotes = this.state.notes.filter((note) => !note.archived)
    const archivedNotes = this.state.notes.filter((note) => note.archived)

    return (
      <div className='notes-apps'>
        <Navbar />
        <div className='content'>
          <NotesInput addNotes={this.onAddNotesHandler} />
          <NotesList
            activeNotes={activeNotes}
            archivedNotes={archivedNotes}
            onDelete={this.onDeleteHandler}
            onToggleArchived={this.onToggleArchived}
          />
        </div>
      </div>
    )
  }
}

export default NotesApps
