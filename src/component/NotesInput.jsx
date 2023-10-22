import React from "react";

class NotesInput extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: ''
    }

    this.onTitleChangeEventListener = this.onTitleChangeEventListener.bind(this);
    this.onBodyChangeEventListener = this.onBodyChangeEventListener.bind(this);
    this.onSubmitEventListener = this.onSubmitEventListener.bind(this);
  }

  onTitleChangeEventListener(e) {
    this.setState(() => {
      return {
        title: e.target.value,
      }
    })
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
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <form className="notes-input" onSubmit={this.onSubmitEventListener}>
        <label htmlFor="judul">Judul</label>
        <input type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventListener} id="judul" required/>
        <label htmlFor="catatan">Catatan</label>
        <textarea id="catatan" value={this.state.body} onChange={this.onBodyChangeEventListener} placeholder="Buat catatanmu disini..."></textarea>
        <button className="inputBtn" type="submit">Tambah</button>
      </form>  
    );
  }
}

export default NotesInput;