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
    <div className='flex flex-col justify-between gap-2 rounded-xl border-[1px] border-slate-500'>
      <div className='p-4'>
        <p className='text-xl font-semibold line-clamp-1'>{title}</p>
        <p className='text-sm font-light'>{createdAt}</p>
        <p className='text-sm'>{body}</p>
      </div>
      <div className='flex justify-end p-4 gap-2'>
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
