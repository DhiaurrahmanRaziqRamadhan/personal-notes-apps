const DeleteButton = ({id, onDelete}) => {
  return (
    <button className="bg-red-600 w-12 h-12 rounded-full text-white shadow-lg hover:scale-105" onClick={() => onDelete(id)}><i className="fa-solid fa-trash"></i></button>
  )
}

export default DeleteButton