const DeleteButton = ({id, onDelete}) => {
  return (
    <button className="deleteBtn bg-red-600 w-12 h-12 rounded-full shadow-lg hover:opaci" onClick={() => onDelete(id)}><i className="fa-solid fa-trash"></i></button>
  )
}

export default DeleteButton