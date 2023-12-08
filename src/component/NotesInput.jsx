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
      <form
        className='notes-input flex flex-col w-[500px] mx-auto my-5 mt-32'
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
          className='border-[1px] rounded-lg py-2 px-4 mb-4'
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
          className='border-[1px] rounded-lg py-2 px-4 mb-4'
        ></textarea>
        <button
          className='inputBtn border-2 border-teal-500 text-teal-500 px-4 py-1 rounded-lg text-xl bg-transparent transition-all ease-in-out duration-200 hover:bg-teal-500 hover:text-white'
          type='submit'
        >
          Buat
        </button>
      </form>
    )
  }
}

export default NotesInput
