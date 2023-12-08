import NotesActive from './NotesActive'
import NotesArchive from './NotesArchive'

const NotesList = ({
  activeNotes,
  archivedNotes,
  onDelete,
  onToggleArchived,
}) => {
  return (
    <div className='flex flex-col px-4 gap-4 xl:w-[1000px] mx-auto'>
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
