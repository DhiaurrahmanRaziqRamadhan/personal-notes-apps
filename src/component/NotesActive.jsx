import NotesCardList from './NotesCardList'

const NotesActive = ({ notes, onDelete, onToggleArchived }) => {
  return (
    <div className='notes-active mb-4'>
      <p className='title-section text-2xl mb-4'>Catatan Aktif</p>
      <NotesCardList
        notes={notes}
        buttonText='Arsipkan'
        onDelete={onDelete}
        onToggleArchived={onToggleArchived}
      />
    </div>
  )
}

export default NotesActive
