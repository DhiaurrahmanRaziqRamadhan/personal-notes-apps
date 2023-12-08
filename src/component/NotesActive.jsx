import NotesCardList from './NotesCardList'

const NotesActive = ({ notes, onDelete, onToggleArchived }) => {
  return (
    <div>
      <p className='text-2xl'>Catatan Aktif</p>
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
