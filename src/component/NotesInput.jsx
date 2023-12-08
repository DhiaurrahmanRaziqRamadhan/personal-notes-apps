import React from 'react'

class NotesInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeEventListener = this.onTitleChangeEventListener.bind(this)
    this.onBodyChangeEventListener = this.onBodyChangeEventListener.bind(this)
    this.onSubmitEventListener = this.onSubmitEventListener.bind(this)
  }

  onTitleChangeEventListener(e) {
    const inputValue = e.target.value

    // Batasi panjang judul tidak lebih dari 50 karakter
    if (inputValue.length <= 50) {
      this.setState({
        title: inputValue,
      })
    }
  }

  onBodyChangeEventListener(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      }
    })
  }

  onSubmitEventListener(e) {
    e.preventDefault()

    if (this.state.title.length === 0 || this.state.body.length === 0) {
      alert('Judul atau isi catatan tidak boleh kosong')
    } else {
      this.props.addNotes(this.state)
    }
  }

  render() {
    return (
      <div className='px-4 md:w-[500px] xl:w-[550px] mx-auto '>
        <form
          className='notes-input flex flex-col my-5 '
          onSubmit={this.onSubmitEventListener}
        >
          <label>
            <p className='sisaKarakter text-end'>
              Sisa karakter: {50 - this.state.title.length}
            </p>
          </label>
          <label
            htmlFor='judul'
            className='hidden'
          >
            Judul
          </label>
          <input
            type='text'
            placeholder='tulis judulmu disini...'
            value={this.state.title}
            onChange={this.onTitleChangeEventListener}
            id='judul'
            className='bg-transparent outline-none ring-1 ring-slate-500 p-4 mb-4 rounded hover:ring-slate-800 dark:hover:ring-slate-200 duration-300'
          />
          <label
            htmlFor='catatan'
            className='hidden'
          >
            Catatan
          </label>
          <textarea
            id='catatan'
            value={this.state.body}
            onChange={this.onBodyChangeEventListener}
            placeholder='Buat catatanmu disini...'
            className='bg-transparent outline-none ring-1 ring-slate-500 p-4 mb-4 rounded hover:ring-slate-800 dark:hover:ring-slate-200 duration-300'
          ></textarea>
          <button
            className='border-[1px] border-[#0B652D] text-[#0B652D] px-4 py-1 rounded text-xl bg-transparent transition-all ease-in-out duration-200 hover:bg-[#0B652D] hover:text-white'
            type='submit'
          >
            Buat
          </button>
        </form>
      </div>
    )
  }
}

export default NotesInput
