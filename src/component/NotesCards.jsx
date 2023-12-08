import DeleteButton from './DeleteButton'
import ArchivedButton from './ArchivedButton'

const NotesCards = ({
  title,
  body,
  createdAt,
  archived,
  id,
  onDelete,
  onToggleArchived,
}) => {
  return (
    <div className='flex flex-col justify-between gap-2 notes-card bg-indigo-500 rounded-xl text-white shadow-lg'>
      <div className='notes-content p-4'>
        <p className='title-content text-xl font-bold'>{title}</p>
        <p className='date-content text-sm font-light'>{createdAt}</p>
        <p className='body-content text-sm'>{body}</p>
      </div>
      <div className='notes-btn flex justify-end p-4 gap-2'>
        <DeleteButton
          id={id}
          onDelete={onDelete}
        />
        <ArchivedButton
          id={id}
          archived={archived}
          onToggleArchived={onToggleArchived}
        />
      </div>
    </div>
  )
}

export default NotesCards
