const ArchivedButton = ({ id, archived, onToggleArchived }) => {
  const buttonText = archived ? <i className="fa-solid fa-rotate-right"></i> : <i className="fa-solid fa-box-archive"></i>;

  return (
    <button className="btn bg-yellow-400 w-12 h-12 rounded-full shadow-lg" onClick={() => onToggleArchived(id)}>
      {buttonText}
    </button>
  );
}

export default ArchivedButton;