import React from "react";
import DeleteButton from "./DeleteButton";

function NotesCards({title, body, createdAt, buttonText, id, onDelete}) {
  return (
    <div className="notes-card" >
      <div className="notes-content">
        <h3>{title}</h3>
        <h5>{createdAt}</h5>
        <p>{body}</p>
      </div>
      <div className="notes-btn">
        <DeleteButton id={id} onDelete={onDelete}/>
        <button className="btn">{buttonText}</button>
      </div>
    </div>
  )
}

export default NotesCards