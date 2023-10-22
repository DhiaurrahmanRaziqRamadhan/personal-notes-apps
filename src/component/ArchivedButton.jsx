import React from "react";

function ArchivedButton({ id, archived, onToggleArchived }) {
  const buttonText = archived ? "Pindahkan" : "Arsipkan";

  return (
    <button className="btn" onClick={() => onToggleArchived(id)}>
      {buttonText}
    </button>
  );
}

export default ArchivedButton;