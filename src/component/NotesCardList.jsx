import NotesCards from './NotesCards'

const NotesCardList = ({ notes, buttonText, onDelete, onToggleArchived }) => {
  if (notes.length === 0) {
    return (
      <div className='notes-card-list-empty text-center my-8'>
        <p>Tidak ada Catatan</p>
      </div>
    )
  } else {
    return (
      <div className='grid grid-cols md:grid-cols-2 xl:grid-cols-4 gap-4'>
        {notes?.map((note) => (
          <NotesCards
            {...note}
            key={note.id}
            buttonText={buttonText}
            onDelete={onDelete}
            onToggleArchived={onToggleArchived}
          />
        ))}
      </div>
    )
  }
}

export default NotesCardList
