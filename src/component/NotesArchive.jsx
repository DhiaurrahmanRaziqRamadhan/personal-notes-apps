import NotesCardList from './NotesCardList'

const NotesArchive = ({ notes, onDelete, onToggleArchived }) => {
  return (
    <div className='notes-archive mb-4'>
      <p className='title-section text-2xl mb-4'>Arsip</p>
      <NotesCardList
        notes={notes}
        buttonText='Pindahkan'
        onDelete={onDelete}
        onToggleArchived={onToggleArchived}
      />
    </div>
  )
}

export default NotesArchive
