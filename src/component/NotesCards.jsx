import React from "react";
import DeleteButton from "./DeleteButton";
import ArchivedButton from "./ArchivedButton";

function NotesCards({ title, body, createdAt, archived, id, onDelete, onToggleArchived }) {
  return (
    <div className="notes-card" >
      <div className="notes-content">
        <h3>{title}</h3>
        <h5>{createdAt}</h5>
        <p>{body}</p>
      </div>
      <div className="notes-btn">
        <DeleteButton id={id} onDelete={onDelete}/>
        <ArchivedButton id={id} archived={archived} onToggleArchived={onToggleArchived} />
      </div>
    </div>
  )
}

export default NotesCards