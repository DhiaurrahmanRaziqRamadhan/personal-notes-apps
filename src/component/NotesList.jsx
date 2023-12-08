import NotesActive from './NotesActive'
import NotesArchive from './NotesArchive'

const NotesList = ({
  activeNotes,
  archivedNotes,
  onDelete,
  onToggleArchived,
}) => {
  return (
    <div className='notes-list w-[500px] mx-auto md:w-[1000px]'>
      <NotesActive
        notes={activeNotes}
        onDelete={onDelete}
        onToggleArchived={onToggleArchived}
      />
      <NotesArchive
        notes={archivedNotes}
        onDelete={onDelete}
        onToggleArchived={onToggleArchived}
      />
    </div>
  )
}

export default NotesList
