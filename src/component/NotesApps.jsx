import React from "react";
import { formatDate, formattedData } from "../utils/data";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";

class NotesApps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: formattedData,
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(notes => notes.id !== id);
    this.setState({notes});
  }

  onAddNotesHandler({title,body}) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt:formatDate(+new Date()),
            archived: false,
          }
        ]
      }
    })
  }

  render() {
    return (
      <div className="notes-apps">
        <h1>Notes Apps</h1>
        <NotesInput addNotes={this.onAddNotesHandler}/>
        <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
      </div>
    )
  }
}

export default NotesApps;